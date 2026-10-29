// The Settings page: appearance, account, and your data.
(function () {
  const auth = window.Auth;
  if (!auth) return;

  const account = auth.current();
  if (!account) return;

  const message = document.querySelector("#settings-message");
  const DATA_NAMES = ["cognitiveShop", "cognitiveActivity", "cognitiveProgress", "cognitiveCalendar"];

  function say(text) {
    message.textContent = text;
  }

  // ----- Appearance: every group of buttons works the same way -----
  document.querySelectorAll("[data-pref]").forEach(function (group) {
    const name = group.getAttribute("data-pref");

    function markActive() {
      const current = auth.getPrefs()[name];
      group.querySelectorAll("[data-value]").forEach(function (button) {
        const active = button.getAttribute("data-value") === current;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }

    group.addEventListener("click", function (event) {
      const button = event.target.closest("[data-value]");
      if (!button) return;
      const change = {};
      change[name] = button.getAttribute("data-value");
      auth.setPrefs(change);
      markActive();
      say("Saved.");
    });

    markActive();
  });

  // ----- Account -----
  const nameInput = document.querySelector("#display-name");
  nameInput.value = account.name;
  document.querySelector("#account-type").textContent = account.isAdmin ? "Admin" : "Student";

  function saveName() {
    const clean = auth.rename(account.id, nameInput.value);
    if (!clean) {
      say("Please type a name between 1 and 24 characters.");
      return;
    }
    nameInput.value = clean;
    document.querySelectorAll(".account-name").forEach(function (el) {
      el.textContent = clean;
    });
    say("Name saved.");
  }

  document.querySelector("#save-name").addEventListener("click", saveName);
  nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") saveName();
  });

  document.querySelector("#logout-here").addEventListener("click", function () {
    auth.signOut();
    window.location.href = "login.html";
  });

  // ----- Your data -----
  document.querySelector("#export-button").addEventListener("click", function () {
    const data = {};
    DATA_NAMES.forEach(function (name) {
      try {
        const value = localStorage.getItem(auth.key(name));
        if (value !== null) data[name] = value;
      } catch (error) {}
    });

    const backup = {
      app: "cognitive",
      version: 1,
      exported: new Date().toISOString(),
      account: account.name,
      data: data
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cognitive-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    say("Backup downloaded.");
  });

  const fileInput = document.querySelector("#import-file");

  document.querySelector("#import-button").addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed || parsed.app !== "cognitive" || typeof parsed.data !== "object" || parsed.data === null) {
          throw new Error("Not a Cognitive backup");
        }
        if (!window.confirm("Replace this account's progress with the backup? This can't be undone.")) {
          fileInput.value = "";
          return;
        }
        DATA_NAMES.forEach(function (name) {
          try {
            const value = parsed.data[name];
            if (typeof value === "string") localStorage.setItem(auth.key(name), value);
            else localStorage.removeItem(auth.key(name));
          } catch (error) {}
        });
        say("Backup restored. Reloading...");
        window.setTimeout(function () { window.location.reload(); }, 600);
      } catch (error) {
        say("That file isn't a Cognitive backup.");
      }
      fileInput.value = "";
    };
    reader.readAsText(file);
  });

  document.querySelector("#reset-button").addEventListener("click", function () {
    if (!window.confirm("Erase all gems, items, progress, and calendar events for this account? This can't be undone.")) return;
    DATA_NAMES.forEach(function (name) {
      try { localStorage.removeItem(auth.key(name)); } catch (error) {}
    });
    say("Everything was reset. Reloading...");
    window.setTimeout(function () { window.location.reload(); }, 600);
  });
})();