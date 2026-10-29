// The full-size calendar. Click the mini calendar on the dashboard to open it.
(function () {
  const mini = document.querySelector("#calendar");
  if (!mini || typeof HTMLDialogElement === "undefined") return;

  const KEY = window.Auth ? window.Auth.key("cognitiveCalendar") : "cognitiveCalendar";
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const HOUR_HEIGHT = 48;

  const COLORS = [
    { id: "blue", name: "Blue", color: "#3f7fd0" },
    { id: "green", name: "Green", color: "#2f9e6a" },
    { id: "red", name: "Red", color: "#d94b4b" },
    { id: "purple", name: "Purple", color: "#8e5bd9" },
    { id: "orange", name: "Orange", color: "#c46f0a" },
    { id: "teal", name: "Teal", color: "#1f9aa8" }
  ];

  const DEFAULT_SETTINGS = {
    weekStart: 0,
    view: "month",
    hour12: true,
    showWeekends: true,
    showStudy: true,
    eventColor: "blue",
    eventLength: 60
  };

  const GEAR_SVG =
    '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="3.4" stroke-dasharray="3.22 3.22" />' +
    '<path fill="currentColor" fill-rule="evenodd" d="M12 5.2 a6.8 6.8 0 1 0 0.01 0 Z M12 9.2 a2.8 2.8 0 1 1 -0.01 0 Z" />' +
    '</svg>';

  // ----- Saved data -----
  function defaultData() {
    return { events: [], settings: Object.assign({}, DEFAULT_SETTINGS) };
  }

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (!saved) return defaultData();
      return {
        events: Array.isArray(saved.events) ? saved.events : [],
        settings: Object.assign({}, DEFAULT_SETTINGS, saved.settings)
      };
    } catch (error) {
      return defaultData();
    }
  }

  let data = load();
  let view = data.settings.view;
  let cursor = new Date();
  let editing = null;
  let pickedColor = data.settings.eventColor;

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (error) {
      // Storage may be blocked; the calendar still works for this visit.
    }
  }

  // ----- Small helpers -----
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function dateKey(date) {
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
  }

  function addDays(date, n) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n);
  }

  function sameDay(a, b) {
    return dateKey(a) === dateKey(b);
  }

  function startOfWeek(date) {
    const back = (date.getDay() - data.settings.weekStart + 7) % 7;
    return addDays(date, -back);
  }

  function minutesOf(time) {
    const parts = String(time || "00:00").split(":");
    return Number(parts[0]) * 60 + Number(parts[1]);
  }

  function addMinutes(time, amount) {
    const total = Math.min(1439, minutesOf(time) + amount);
    return pad(Math.floor(total / 60)) + ":" + pad(total % 60);
  }

  function formatTime(time) {
    const parts = time.split(":").map(Number);
    if (!data.settings.hour12) return pad(parts[0]) + ":" + pad(parts[1]);
    const suffix = parts[0] >= 12 ? "PM" : "AM";
    const hour = parts[0] % 12 || 12;
    return hour + (parts[1] ? ":" + pad(parts[1]) : "") + " " + suffix;
  }

  function colorOf(id) {
    return (COLORS.find(function (c) { return c.id === id; }) || COLORS[0]).color;
  }

  function eventsOn(key) {
    return data.events
      .filter(function (event) { return event.date === key; })
      .sort(function (a, b) {
        if (a.allDay !== b.allDay) return a.allDay ? -1 : 1;
        return (a.start || "").localeCompare(b.start || "");
      });
  }

  function visibleOffsets() {
    const offsets = [];
    for (let i = 0; i < 7; i++) {
      const weekday = (data.settings.weekStart + i) % 7;
      if (data.settings.showWeekends || (weekday !== 0 && weekday !== 6)) offsets.push(i);
    }
    return offsets;
  }

  function weekDays() {
    const start = startOfWeek(cursor);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = addDays(start, i);
      if (data.settings.showWeekends || (day.getDay() !== 0 && day.getDay() !== 6)) days.push(day);
    }
    return days;
  }

  // ----- Build the three windows: calendar, event editor, settings -----
  const dialog = document.createElement("dialog");
  dialog.className = "cal-dialog";
  dialog.setAttribute("aria-label", "Calendar");
  dialog.innerHTML =
    '<div class="cal-shell">' +
      '<header class="cal-toolbar">' +
        '<button type="button" class="cal-btn" data-nav="today">Today</button>' +
        '<button type="button" class="cal-icon" data-nav="prev" aria-label="Previous">‹</button>' +
        '<button type="button" class="cal-icon" data-nav="next" aria-label="Next">›</button>' +
        '<h2 class="cal-title" id="cal-title"></h2>' +
        '<div class="cal-views" role="group" aria-label="Calendar view">' +
          '<button type="button" class="cal-btn" data-view="month">Month</button>' +
          '<button type="button" class="cal-btn" data-view="week">Week</button>' +
          '<button type="button" class="cal-btn" data-view="day">Day</button>' +
        '</div>' +
        '<button type="button" class="cal-icon" data-action="settings" aria-label="Calendar settings">' + GEAR_SVG + '</button>' +
        '<button type="button" class="cal-icon" data-action="close" aria-label="Close calendar">✕</button>' +
      '</header>' +
      '<div class="cal-body" id="cal-body"></div>' +
    '</div>';
  document.body.appendChild(dialog);

  const eventDialog = document.createElement("dialog");
  eventDialog.className = "cal-event-dialog";
  eventDialog.setAttribute("aria-label", "Event");
  eventDialog.innerHTML =
    '<div class="cal-form">' +
      '<h3 id="ev-heading">New event</h3>' +
      '<label class="cal-field">Title<input type="text" id="ev-title" maxlength="80" placeholder="Add title"></label>' +
      '<label class="cal-field">Date<input type="date" id="ev-date"></label>' +
      '<label class="cal-check"><input type="checkbox" id="ev-allday"> All day</label>' +
      '<div class="cal-row" id="ev-times">' +
        '<label class="cal-field">Start<input type="time" id="ev-start"></label>' +
        '<label class="cal-field">End<input type="time" id="ev-end"></label>' +
      '</div>' +
      '<div class="cal-field">Color<div class="option-row" id="ev-colors"></div></div>' +
      '<label class="cal-field">Notes<textarea id="ev-notes" rows="3" maxlength="500"></textarea></label>' +
      '<div class="cal-actions">' +
        '<button type="button" class="buy secondary danger" id="ev-delete">Delete</button>' +
        '<button type="button" class="buy secondary" id="ev-cancel">Cancel</button>' +
        '<button type="button" class="buy" id="ev-save">Save</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(eventDialog);

  const colorOptions = COLORS.map(function (c) {
    return '<option value="' + c.id + '">' + c.name + '</option>';
  }).join("");

  const settingsDialog = document.createElement("dialog");
  settingsDialog.className = "cal-settings-dialog";
  settingsDialog.setAttribute("aria-label", "Calendar settings");
  settingsDialog.innerHTML =
    '<div class="cal-form">' +
      '<h3>Calendar settings</h3>' +
      '<label class="cal-field">Week starts on' +
        '<select id="set-week"><option value="0">Sunday</option><option value="1">Monday</option><option value="6">Saturday</option></select>' +
      '</label>' +
      '<label class="cal-field">Default view' +
        '<select id="set-view"><option value="month">Month</option><option value="week">Week</option><option value="day">Day</option></select>' +
      '</label>' +
      '<label class="cal-field">Time format' +
        '<select id="set-hour12"><option value="12">12-hour (1:30 PM)</option><option value="24">24-hour (13:30)</option></select>' +
      '</label>' +
      '<label class="cal-check"><input type="checkbox" id="set-weekends"> Show weekends</label>' +
      '<label class="cal-check"><input type="checkbox" id="set-study"> Show the days I studied</label>' +
      '<label class="cal-field">Default event color<select id="set-color">' + colorOptions + '</select></label>' +
      '<label class="cal-field">Default event length' +
        '<select id="set-length"><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="45">45 minutes</option><option value="60">1 hour</option><option value="90">90 minutes</option><option value="120">2 hours</option></select>' +
      '</label>' +
      '<p class="cal-note">Time zone: <strong id="set-zone"></strong> (from your device)</p>' +
      '<div class="cal-actions">' +
        '<button type="button" class="buy secondary danger" id="set-clear">Delete all events</button>' +
        '<button type="button" class="buy" id="set-done">Done</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(settingsDialog);

  const titleEl = dialog.querySelector("#cal-title");
  const body = dialog.querySelector("#cal-body");

  const evHeading = eventDialog.querySelector("#ev-heading");
  const evTitle = eventDialog.querySelector("#ev-title");
  const evDate = eventDialog.querySelector("#ev-date");
  const evAllDay = eventDialog.querySelector("#ev-allday");
  const evTimes = eventDialog.querySelector("#ev-times");
  const evStart = eventDialog.querySelector("#ev-start");
  const evEnd = eventDialog.querySelector("#ev-end");
  const evColors = eventDialog.querySelector("#ev-colors");
  const evNotes = eventDialog.querySelector("#ev-notes");
  const evDelete = eventDialog.querySelector("#ev-delete");

  // ----- Drawing the calendar -----
  function titleFor() {
    if (view === "month") {
      return cursor.toLocaleDateString(undefined, { month: "long", year: "numeric" });
    }
    if (view === "day") {
      return cursor.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    }
    const days = weekDays();
    return (
      days[0].toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
      " – " +
      days[days.length - 1].toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
    );
  }

  function render() {
    titleEl.textContent = titleFor();
    dialog.querySelectorAll("[data-view]").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-view") === view);
    });

    body.innerHTML = "";
    if (view === "month") renderMonth();
    else if (view === "week") renderTimeGrid(weekDays());
    else renderTimeGrid([cursor]);
  }

  function goToDay(day) {
    cursor = day;
    view = "day";
    render();
  }

  function buildChip(event) {
    const chip = el("button", "cal-chip");
    chip.type = "button";
    chip.style.setProperty("--chip", colorOf(event.color));
    chip.textContent = (event.allDay ? "" : formatTime(event.start) + " ") + event.title;
    chip.addEventListener("click", function (click) {
      click.stopPropagation();
      openEditor(event);
    });
    return chip;
  }

  function buildDayCell(day, month) {
    const key = dateKey(day);
    const classes = "cal-cell" + (day.getMonth() !== month ? " other" : "") + (sameDay(day, new Date()) ? " today" : "");
    const cell = el("div", classes);

    const number = el("button", "cal-daynum", String(day.getDate()));
    number.type = "button";
    number.setAttribute("aria-label", day.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }));
    number.addEventListener("click", function (click) {
      click.stopPropagation();
      goToDay(day);
    });
    cell.appendChild(number);

    if (
      data.settings.showStudy &&
      window.CognitiveProgress &&
      window.CognitiveProgress.wasActive(day.getFullYear(), day.getMonth(), day.getDate())
    ) {
      cell.appendChild(el("span", "cal-study", "✓ Studied"));
    }

    const list = eventsOn(key);
    list.slice(0, 3).forEach(function (event) {
      cell.appendChild(buildChip(event));
    });

    if (list.length > 3) {
      const more = el("button", "cal-more", "+" + (list.length - 3) + " more");
      more.type = "button";
      more.addEventListener("click", function (click) {
        click.stopPropagation();
        goToDay(day);
      });
      cell.appendChild(more);
    }

    cell.addEventListener("click", function () {
      openEditor({ date: key });
    });
    return cell;
  }

  function renderMonth() {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const gridStart = startOfWeek(new Date(year, month, 1));
    const offsets = visibleOffsets();

    const wrap = el("div", "cal-month");
    wrap.style.setProperty("--cols", offsets.length);

    const head = el("div", "cal-weekdays");
    offsets.forEach(function (i) {
      head.appendChild(el("div", "cal-weekday", WEEKDAYS[(data.settings.weekStart + i) % 7]));
    });
    wrap.appendChild(head);

    const grid = el("div", "cal-grid");
    for (let week = 0; week < 6; week++) {
      offsets.forEach(function (i) {
        grid.appendChild(buildDayCell(addDays(gridStart, week * 7 + i), month));
      });
    }
    wrap.appendChild(grid);
    body.appendChild(wrap);
  }

  // Side-by-side layout for events that overlap in time.
  function layoutLanes(list) {
    const sorted = list.slice().sort(function (a, b) {
      return minutesOf(a.start) - minutesOf(b.start);
    });
    const laneEnds = [];
    const placed = sorted.map(function (event) {
      const start = minutesOf(event.start);
      let lane = 0;
      while (lane < laneEnds.length && laneEnds[lane] > start) lane++;
      laneEnds[lane] = Math.max(minutesOf(event.end), start + 15);
      return { event: event, lane: lane };
    });
    const lanes = Math.max(1, laneEnds.length);
    placed.forEach(function (item) { item.lanes = lanes; });
    return placed;
  }

  function renderTimeGrid(days) {
    const wrap = el("div", "cal-time");
    wrap.style.setProperty("--cols", days.length);
    wrap.style.setProperty("--hour", HOUR_HEIGHT + "px");

    // Day names and dates
    const head = el("div", "cal-time-head");
    head.appendChild(el("div", "cal-gutter"));
    days.forEach(function (day) {
      const label = el("button", "cal-daylabel" + (sameDay(day, new Date()) ? " today" : ""));
      label.type = "button";
      label.appendChild(el("span", "", WEEKDAYS[day.getDay()]));
      label.appendChild(el("strong", "", String(day.getDate())));
      label.addEventListener("click", function () { goToDay(day); });
      head.appendChild(label);
    });
    wrap.appendChild(head);

    // All-day events
    const allDayRow = el("div", "cal-allday-row");
    allDayRow.appendChild(el("div", "cal-gutter", "all-day"));
    days.forEach(function (day) {
      const key = dateKey(day);
      const cell = el("div", "cal-allday-cell");
      eventsOn(key).filter(function (e) { return e.allDay; }).forEach(function (event) {
        cell.appendChild(buildChip(event));
      });
      cell.addEventListener("click", function () {
        openEditor({ date: key, allDay: true });
      });
      allDayRow.appendChild(cell);
    });
    wrap.appendChild(allDayRow);

    // Hours
    const scroller = el("div", "cal-scroll");
    const grid = el("div", "cal-time-grid");

    const gutter = el("div", "cal-gutter");
    for (let hour = 0; hour < 24; hour++) {
      gutter.appendChild(el("div", "cal-hour", hour === 0 ? "" : formatTime(pad(hour) + ":00")));
    }
    grid.appendChild(gutter);

    days.forEach(function (day) {
      const key = dateKey(day);
      const column = el("div", "cal-col");

      layoutLanes(eventsOn(key).filter(function (e) { return !e.allDay; })).forEach(function (item) {
        const event = item.event;
        const startMin = minutesOf(event.start);
        const endMin = Math.max(minutesOf(event.end), startMin + 15);

        const block = el("button", "cal-event");
        block.type = "button";
        block.style.top = (startMin / 60) * HOUR_HEIGHT + "px";
        block.style.height = Math.max(((endMin - startMin) / 60) * HOUR_HEIGHT - 2, 18) + "px";
        block.style.left = (item.lane / item.lanes) * 100 + "%";
        block.style.width = 100 / item.lanes + "%";
        block.style.setProperty("--chip", colorOf(event.color));
        block.appendChild(el("strong", "", event.title));
        block.appendChild(el("span", "", formatTime(event.start) + " – " + formatTime(event.end)));
        block.addEventListener("click", function (click) {
          click.stopPropagation();
          openEditor(event);
        });
        column.appendChild(block);
      });

      if (sameDay(day, new Date())) {
        const now = new Date();
        const line = el("div", "cal-now");
        line.style.top = ((now.getHours() * 60 + now.getMinutes()) / 60) * HOUR_HEIGHT + "px";
        column.appendChild(line);
      }

      column.addEventListener("click", function (click) {
        const rect = column.getBoundingClientRect();
        const minutes = Math.floor((click.clientY - rect.top) / (HOUR_HEIGHT / 2)) * 30;
        const clamped = Math.max(0, Math.min(minutes, 23 * 60 + 30));
        openEditor({ date: key, start: pad(Math.floor(clamped / 60)) + ":" + pad(clamped % 60) });
      });

      grid.appendChild(column);
    });

    scroller.appendChild(grid);
    wrap.appendChild(scroller);
    body.appendChild(wrap);
    scroller.scrollTop = 7 * HOUR_HEIGHT;
  }

  // ----- The event editor -----
  function defaultStart(dateText) {
    const now = new Date();
    if (dateText === dateKey(now)) return pad(Math.min(23, now.getHours() + 1)) + ":00";
    return "09:00";
  }

  function syncTimes() {
    evTimes.hidden = evAllDay.checked;
  }

  function drawColorDots() {
    evColors.innerHTML = "";
    COLORS.forEach(function (c) {
      const dot = el("button", "option-dot" + (c.id === pickedColor ? " active" : ""));
      dot.type = "button";
      dot.style.background = c.color;
      dot.title = c.name;
      dot.setAttribute("aria-label", c.name);
      dot.addEventListener("click", function () {
        pickedColor = c.id;
        drawColorDots();
      });
      evColors.appendChild(dot);
    });
  }

  function openEditor(seed) {
    seed = seed || {};
    editing = seed.id ? seed : null;

    const date = seed.date || dateKey(cursor);
    const start = seed.start || defaultStart(date);

    evHeading.textContent = editing ? "Edit event" : "New event";
    evTitle.value = editing ? editing.title : "";
    evDate.value = date;
    evAllDay.checked = Boolean(seed.allDay);
    evStart.value = start;
    evEnd.value = seed.end || addMinutes(start, data.settings.eventLength);
    pickedColor = seed.color || data.settings.eventColor;
    evNotes.value = seed.notes || "";
    evDelete.hidden = !editing;

    syncTimes();
    drawColorDots();
    eventDialog.showModal();
    evTitle.focus();
  }

  function saveEvent() {
    if (!evDate.value) {
      evDate.focus();
      return;
    }

    const allDay = evAllDay.checked;
    const start = evStart.value || "09:00";
    let end = evEnd.value || addMinutes(start, data.settings.eventLength);
    if (!allDay && minutesOf(end) <= minutesOf(start)) {
      end = addMinutes(start, data.settings.eventLength);
    }

    const record = {
      id: editing ? editing.id : "ev" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: evTitle.value.trim() || "(No title)",
      date: evDate.value,
      allDay: allDay,
      start: start,
      end: end,
      color: pickedColor,
      notes: evNotes.value
    };

    if (editing) {
      data.events = data.events.map(function (event) {
        return event.id === record.id ? record : event;
      });
    } else {
      data.events.push(record);
    }

    save();
    eventDialog.close();
    render();
    markMini();
  }

  function deleteEvent() {
    if (!editing) return;
    data.events = data.events.filter(function (event) { return event.id !== editing.id; });
    save();
    eventDialog.close();
    render();
    markMini();
  }

  // ----- Settings -----
  function fillSettings() {
    settingsDialog.querySelector("#set-week").value = String(data.settings.weekStart);
    settingsDialog.querySelector("#set-view").value = data.settings.view;
    settingsDialog.querySelector("#set-hour12").value = data.settings.hour12 ? "12" : "24";
    settingsDialog.querySelector("#set-weekends").checked = data.settings.showWeekends;
    settingsDialog.querySelector("#set-study").checked = data.settings.showStudy;
    settingsDialog.querySelector("#set-color").value = data.settings.eventColor;
    settingsDialog.querySelector("#set-length").value = String(data.settings.eventLength);

    let zone = "your device's time zone";
    try {
      zone = Intl.DateTimeFormat().resolvedOptions().timeZone || zone;
    } catch (error) {}
    settingsDialog.querySelector("#set-zone").textContent = zone;
  }

  function bindSetting(selector, apply) {
    const field = settingsDialog.querySelector(selector);
    field.addEventListener("change", function () {
      apply(field);
      save();
      render();
    });
  }

  bindSetting("#set-week", function (f) { data.settings.weekStart = Number(f.value); });
  bindSetting("#set-view", function (f) { data.settings.view = f.value; view = f.value; });
  bindSetting("#set-hour12", function (f) { data.settings.hour12 = f.value === "12"; });
  bindSetting("#set-weekends", function (f) { data.settings.showWeekends = f.checked; });
  bindSetting("#set-study", function (f) { data.settings.showStudy = f.checked; });
  bindSetting("#set-color", function (f) { data.settings.eventColor = f.value; });
  bindSetting("#set-length", function (f) { data.settings.eventLength = Number(f.value); });

  settingsDialog.querySelector("#set-done").addEventListener("click", function () {
    settingsDialog.close();
  });

  settingsDialog.querySelector("#set-clear").addEventListener("click", function () {
    if (!window.confirm("Delete every event on this calendar? This can't be undone.")) return;
    data.events = [];
    save();
    render();
    markMini();
  });

  // ----- Wiring up the buttons -----
  function shift(delta) {
    if (view === "month") cursor = new Date(cursor.getFullYear(), cursor.getMonth() + delta, 1);
    else if (view === "week") cursor = addDays(cursor, 7 * delta);
    else cursor = addDays(cursor, delta);
  }

  dialog.addEventListener("click", function (click) {
    if (click.target === dialog) {
      dialog.close();
      return;
    }

    const nav = click.target.closest("[data-nav]");
    if (nav) {
      const kind = nav.getAttribute("data-nav");
      if (kind === "today") cursor = new Date();
      else shift(kind === "next" ? 1 : -1);
      render();
      return;
    }

    const viewButton = click.target.closest("[data-view]");
    if (viewButton) {
      view = viewButton.getAttribute("data-view");
      render();
      return;
    }

    const action = click.target.closest("[data-action]");
    if (action) {
      const name = action.getAttribute("data-action");
      if (name === "close") dialog.close();
      if (name === "settings") {
        fillSettings();
        settingsDialog.showModal();
      }
    }
  });

  dialog.addEventListener("close", markMini);

  eventDialog.addEventListener("click", function (click) {
    if (click.target === eventDialog) eventDialog.close();
  });
  settingsDialog.addEventListener("click", function (click) {
    if (click.target === settingsDialog) settingsDialog.close();
  });

  evAllDay.addEventListener("change", syncTimes);
  eventDialog.querySelector("#ev-save").addEventListener("click", saveEvent);
  eventDialog.querySelector("#ev-cancel").addEventListener("click", function () { eventDialog.close(); });
  evDelete.addEventListener("click", deleteEvent);
  evTitle.addEventListener("keydown", function (key) {
    if (key.key === "Enter") saveEvent();
  });

  // ----- The mini calendar on the dashboard -----
  function markMini() {
    const today = new Date();
    mini.querySelectorAll(".calendar-day").forEach(function (cell) {
      const key = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(Number(cell.textContent));
      cell.classList.toggle("has-event", data.events.some(function (event) { return event.date === key; }));
    });
  }

  function openCalendar() {
    if (dialog.open) return;
    view = data.settings.view;
    cursor = new Date();
    dialog.showModal();
    render();
  }

  mini.setAttribute("role", "button");
  mini.setAttribute("tabindex", "0");
  mini.setAttribute("aria-label", "Open full calendar");
  mini.title = "Open full calendar";
  mini.appendChild(el("div", "calendar-hint", "Click to open the full calendar"));

  mini.addEventListener("click", openCalendar);
  mini.addEventListener("keydown", function (key) {
    if (key.key === "Enter" || key.key === " ") {
      key.preventDefault();
      openCalendar();
    }
  });

  markMini();
})();