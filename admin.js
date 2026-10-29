// The admin page: edit any account's gems, items, streak, and progress.
(function () {
  const auth = window.Auth;
  const store = window.CognitiveStore;
  const me = auth && auth.current();

  // auth.js already sends signed-out visitors to the login page.
  if (!auth || !me) return;
  if (!me.isAdmin) {
    window.location.replace("index.html");
    return;
  }

  const targetEl = document.querySelector("#target");
  const statsEl = document.querySelector("#admin-stats");
  const messageEl = document.querySelector("#admin-message");
  const gemInput = document.querySelector("#gem-amount");
  const lifetimeInput = document.querySelector("#lifetime-amount");
  const rewardInput = document.querySelector("#points-per-problem");

  // ----- Reading and writing an account's saved data -----
  function readData(name, id, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(auth.key(name, id)));
      return value === null || value === undefined ? fallback : value;
    } catch (error) {
      return fallback;
    }
  }

  function writeData(name, id, value) {
    try {
      localStorage.setItem(auth.key(name, id), JSON.stringify(value));
    } catch (error) {}
  }

  function removeData(name, id) {
    try {
      localStorage.removeItem(auth.key(name, id));
    } catch (error) {}
  }

  function shopOf(id) {
    return Object.assign({ points: 0, totalEarned: 0 }, readData("cognitiveShop", id, {}));
  }

  function activityOf(id) {
    const data = readData("cognitiveActivity", id, {});
    return {
      solved: Array.isArray(data.solved) ? data.solved : [],
      activity: data.activity && typeof data.activity === "object" ? data.activity : {}
    };
  }

  // ----- Small helpers -----
  function dateKey(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }

  function streakOf(activity) {
    const cursor = new Date();
    if (!activity[dateKey(cursor)]) {
      cursor.setDate(cursor.getDate() - 1);
    }
    let count = 0;
    while (activity[dateKey(cursor)]) {
      count++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }

  function wholeNumber(input) {
    const n = Math.floor(Number(input.value));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }

  function targetId() {
    return targetEl.value;
  }

  function say(text) {
    messageEl.textContent = text;
  }

  // ----- Drawing the page -----
  function fillTargets(selectedId) {
    targetEl.innerHTML = "";
    auth.all().forEach(function (account) {
      const option = document.createElement("option");
      option.value = account.id;
      option.textContent = account.name + (account.isAdmin ? " (admin)" : "");
      targetEl.appendChild(option);
    });
    if (selectedId && auth.all().some(function (a) { return a.id === selectedId; })) {
      targetEl.value = selectedId;
    }
  }

  function renderStats() {
    const id = targetId();
    statsEl.innerHTML = "";
    if (!id) return;

    const shop = shopOf(id);
    const data = activityOf(id);
       const owned = Array.isArray(shop.owned) ? shop.owned.length : (store ? store.SLOTS.filter(function (s) { return !s.multi; }).length : 5);

    [
      ["Gems", shop.points],
      ["Lifetime points", shop.totalEarned],
      ["Problems solved", data.solved.length],
      ["Day streak", streakOf(data.activity)],
      ["Items owned", owned]
    ].forEach(function (pair) {
      const box = document.createElement("div");
      box.className = "admin-stat";
      const number = document.createElement("strong");
      number.textContent = pair[1];
      const label = document.createElement("span");
      label.textContent = pair[0];
      box.append(number, label);
      statsEl.appendChild(box);
    });
  }

  function onTargetChange() {
    lifetimeInput.value = shopOf(targetId()).totalEarned;
    renderStats();
  }

  // ----- The actions -----
  const actions = {
    "add-gems": function (id) {
      const shop = shopOf(id);
      shop.points += wholeNumber(gemInput);
      writeData("cognitiveShop", id, shop);
      return "Added " + wholeNumber(gemInput) + " gems.";
    },
    "remove-gems": function (id) {
      const shop = shopOf(id);
      shop.points = Math.max(0, shop.points - wholeNumber(gemInput));
      writeData("cognitiveShop", id, shop);
      return "Removed " + wholeNumber(gemInput) + " gems.";
    },
    "set-gems": function (id) {
      const shop = shopOf(id);
      shop.points = wholeNumber(gemInput);
      writeData("cognitiveShop", id, shop);
      return "Gem balance set to " + shop.points + ".";
    },
    "set-lifetime": function (id) {
      const shop = shopOf(id);
      shop.totalEarned = wholeNumber(lifetimeInput);
      writeData("cognitiveShop", id, shop);
      return "Lifetime total set to " + shop.totalEarned + ".";
    },
    "save-reward": function () {
      const amount = wholeNumber(rewardInput);
      auth.setConfig({ pointsPerProblem: amount });
      return "Each correct answer now earns " + amount + " gems.";
    },
    "unlock-all": function (id) {
      if (!store) return "The shop items didn't load.";
      const shop = shopOf(id);
      shop.owned = store.CATALOG.map(function (item) { return item.id; });
      writeData("cognitiveShop", id, shop);
      return "Unlocked every shop item.";
    },
    "reset-avatar": function (id) {
      const shop = shopOf(id);
      shop.equipped = {};
      writeData("cognitiveShop", id, shop);
      return "Avatar reset to the free defaults.";
    },
    "add-today": function (id) {
      const data = activityOf(id);
      const today = dateKey(new Date());
      data.activity[today] = Math.max(1, data.activity[today] || 0);
      writeData("cognitiveActivity", id, data);
      return "Marked today as active.";
    },
    "fill-week": function (id) {
      const data = activityOf(id);
      for (let i = 0; i < 7; i++) {
        const day = new Date();
        day.setDate(day.getDate() - i);
        const keyName = dateKey(day);
        data.activity[keyName] = Math.max(1, data.activity[keyName] || 0);
      }
      writeData("cognitiveActivity", id, data);
      return "Filled the last 7 days.";
    },
    "clear-solved": function (id) {
      const data = activityOf(id);
      data.solved = [];
      writeData("cognitiveActivity", id, data);
      return "Cleared solved problems. Lessons can be solved again.";
    },
    "clear-test-progress": function (id) {
      removeData("cognitiveProgress", id);
      return "Cleared the test lesson progress.";
    },
    "reset-account": function (id) {
      if (!window.confirm("Erase all gems, items, progress, and activity for this account?")) return "";
      removeData("cognitiveShop", id);
      removeData("cognitiveActivity", id);
      removeData("cognitiveProgress", id);
      onTargetChange();
      return "Account data erased.";
    },
    "delete-account": function (id) {
      if (id === me.id) return "You can't delete the account you're signed in to.";
      if (!window.confirm("Delete this account and all of its data?")) return "";
      auth.deleteAccount(id);
      fillTargets(me.id);
      onTargetChange();
      return "Account deleted.";
    }
  };

  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = actions[button.getAttribute("data-action")];
    if (!action) return;

    const result = action(targetId());
        if (result) say(result + " (" + targetEl.options[targetEl.selectedIndex].text + ")");
    renderStats();
  });

  targetEl.addEventListener("change", onTargetChange);

  // ----- Start -----
    fillTargets(me.id);
  rewardInput.value = auth.getConfig().pointsPerProblem;
  onTargetChange();
})();