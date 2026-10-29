// Draws one course page from the course id in the web address.
(function () {
    const KEY = window.Auth ? window.Auth.key("cognitiveProgress") : "cognitiveProgress";

  function currentCourseId() {
    const fromHash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (fromHash) return fromHash;
    return new URLSearchParams(window.location.search).get("course") || "";
  }

  const course = (window.COURSES || []).find(function (c) {
    return c.id === currentCourseId();
  });

  const titleEl = document.querySelector("#course-title");
  const blurbEl = document.querySelector("#course-blurb");
  const list = document.querySelector("#topic-list");
  const fill = document.querySelector("#progress-fill");
  const bar = document.querySelector("#progress-bar");
  const percentEl = document.querySelector("#progress-percent");
  const nextUp = document.querySelector("#next-up");

  if (!list) return;

  if (!course) {
    titleEl.textContent = "Course not found";
    blurbEl.innerHTML = 'Go back to the <a href="math.html">Math page</a> and pick a course.';
    return;
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch (error) {
      // Storage may be blocked; the page still works for this visit.
    }
  }

  function render() {
    const progress = loadProgress();
    const tracker = window.CognitiveProgress;

    document.title = course.name + " | Cognitive";
    titleEl.textContent = course.name;
    blurbEl.textContent = course.blurb;

    const backLink = document.querySelector("#back-link");
    if (backLink) {
      const isScience = course.subject === "science";
      backLink.href = isScience ? "science.html" : "math.html";
      backLink.textContent = isScience ? "← Science" : "← Math";
    }

    list.innerHTML = "";
    let doneCount = 0;
    let next = null;

    course.topics.forEach(function (topic, index) {
      const key = course.id + "/" + topic.id;
      const lesson = (window.LESSONS || {})[key];

      // Topics with a lesson are complete when every problem is solved.
      let solved = 0;
      let isDone;
      if (lesson && tracker) {
        solved = lesson.problems.filter(function (p) { return tracker.isSolved(p.id); }).length;
        isDone = solved === lesson.problems.length;
      } else {
        isDone = Boolean(progress[key]);
      }

      if (isDone) {
        doneCount++;
      } else if (!next) {
        next = { topic: topic, lesson: lesson, key: key };
      }

      let statusText;
      let badgeText;
      let badgeClass = "badge";
      if (isDone) {
        statusText = "Completed";
        badgeText = "Completed";
        badgeClass += " done";
      } else if (lesson && solved > 0) {
        statusText = solved + " of " + lesson.problems.length + " solved";
        badgeText = "In Progress";
        badgeClass += " working";
      } else {
        statusText = lesson ? "Lesson ready" : "Lesson coming soon";
        badgeText = "Not Started";
      }

      const row = document.createElement("li");
      row.className = "topic-row";

      const thumb = document.createElement("div");
      thumb.className = "topic-thumb";
      thumb.textContent = index + 1;

      const info = document.createElement("div");
      info.className = "topic-info";
      const name = document.createElement("strong");
      if (lesson) {
        const link = document.createElement("a");
        link.href = "lesson.html#" + key;
        link.textContent = topic.name;
        name.appendChild(link);
      } else {
        name.textContent = topic.name;
      }
      const status = document.createElement("small");
      status.textContent = statusText;
      info.append(name, status);

      const badge = document.createElement("span");
      badge.className = badgeClass;
      badge.textContent = badgeText;

      let action;
      if (lesson) {
        action = document.createElement("a");
        action.href = "lesson.html#" + key;
        action.className = "buy secondary mark";
        action.textContent = isDone ? "Review" : solved > 0 ? "Continue" : "Start";
      } else {
        action = document.createElement("button");
        action.type = "button";
        action.className = "buy secondary mark";
        action.textContent = isDone ? "Undo" : "Mark done";
        action.addEventListener("click", function () {
          const current = loadProgress();
          if (current[key]) {
            delete current[key];
          } else {
            current[key] = true;
          }
          saveProgress(current);
          render();
        });
      }

      row.append(thumb, info, badge, action);
      list.appendChild(row);
    });

    const percent = Math.round((doneCount / course.topics.length) * 100);
    fill.style.width = percent + "%";
    percentEl.textContent = percent + "%";
    bar.setAttribute("aria-valuenow", String(percent));
    nextUp.textContent = next ? next.topic.name : "All topics complete. Nice work!";
  }

  render();
})();