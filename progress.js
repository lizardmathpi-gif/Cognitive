// Tracks solved problems, daily activity, and streaks. Load after store.js.
(function () {
  function storageKey() {
    return window.Auth ? window.Auth.key("cognitiveActivity") : "cognitiveActivity";
  }

  function pointsPerProblem() {
    return window.Auth ? window.Auth.getConfig().pointsPerProblem : 10;
  }

  function dateKey(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey())) || {};
      return {
        solved: Array.isArray(saved.solved) ? saved.solved : [],
        activity: saved.activity && typeof saved.activity === "object" ? saved.activity : {}
      };
    } catch (error) {
      return { solved: [], activity: {} };
    }
  }

  function save(data) {
    try {
      localStorage.setItem(storageKey(), JSON.stringify(data));
    } catch (error) {
      // Storage may be blocked; the page still works for this visit.
    }
  }

  function isSolved(problemId) {
    return load().solved.indexOf(problemId) !== -1;
  }

  function wasActive(year, month, day) {
    return Boolean(load().activity[dateKey(new Date(year, month, day))]);
  }

  // Counts back from today (or yesterday, if today isn't done yet) through consecutive active days.
  function streak() {
    const activity = load().activity;
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

  function refresh() {
    const data = load();
    document.querySelectorAll('[data-stat="problems"]').forEach(function (el) {
      el.textContent = data.solved.length;
    });
    document.querySelectorAll('[data-stat="streak"]').forEach(function (el) {
      el.textContent = streak();
    });
  }

  function recordCorrect(problemId) {
    const data = load();
    if (data.solved.indexOf(problemId) !== -1) {
      return { firstTime: false, points: 0 };
    }

    data.solved.push(problemId);
    const today = dateKey(new Date());
    data.activity[today] = (data.activity[today] || 0) + 1;
    save(data);

    const points = pointsPerProblem();
    if (window.CognitiveStore) {
      const state = window.CognitiveStore.load();
      window.CognitiveStore.addPoints(state, points);
      window.CognitiveStore.applyToPage(state);
    }

    refresh();
    return { firstTime: true, points: points };
  }

  window.CognitiveProgress = {
    pointsPerProblem: pointsPerProblem,
    isSolved: isSolved,
    wasActive: wasActive,
    streak: streak,
    recordCorrect: recordCorrect,
    refresh: refresh
  };

  refresh();
})();