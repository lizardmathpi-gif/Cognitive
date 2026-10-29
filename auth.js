// Local accounts for testing. Everything is saved in this browser only.
// Load this in the <head> of every page.
(function () {
  const ACCOUNTS_KEY = "cognitiveAccounts";
  const CURRENT_KEY = "cognitiveCurrentAccount";
  const CONFIG_KEY = "cognitiveConfig";
  const PREFS_KEY = "cognitivePrefs";
  const LEGACY_KEYS = ["cognitiveShop", "cognitiveActivity", "cognitiveProgress"];
  const DEFAULT_CONFIG = { pointsPerProblem: 10 };
  const PREF_DEFAULTS = { theme: "system", textSize: "medium", accent: "blue", motion: "system" };

  // TESTING ONLY: anyone can read this passcode in the page source. Change it.
  const ADMIN_PASSCODE = "admin123";

  function read(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value === null || value === undefined ? fallback : value;
    } catch (error) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Storage may be blocked; nothing we can do.
    }
  }

  // ----- Appearance settings (saved for this device, not per account) -----
  function getPrefs() {
    return Object.assign({}, PREF_DEFAULTS, read(PREFS_KEY, {}));
  }

  function applyPrefs() {
    const prefs = getPrefs();
    const root = document.documentElement;
    const systemDark = Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const dark = prefs.theme === "dark" || (prefs.theme === "system" && systemDark);

    root.setAttribute("data-theme", dark ? "dark" : "light");
    root.setAttribute("data-text", prefs.textSize);
    root.setAttribute("data-accent", prefs.accent);
    root.setAttribute("data-motion", prefs.motion);
  }

  function setPrefs(changes) {
    write(PREFS_KEY, Object.assign(getPrefs(), changes));
    applyPrefs();
  }

  applyPrefs();

  // If the setting is "Match my device", follow the device when it switches.
  if (window.matchMedia) {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = function () {
      if (getPrefs().theme === "system") applyPrefs();
    };
    if (query.addEventListener) query.addEventListener("change", follow);
  }

  // ----- Accounts -----
  function loadAccounts() {
    const data = read(ACCOUNTS_KEY, {});
    return {
      nextNumber: Number.isFinite(data.nextNumber) ? data.nextNumber : 1,
      list: Array.isArray(data.list) ? data.list : []
    };
  }

  function all() {
    return loadAccounts().list;
  }

  function currentId() {
    try {
      return localStorage.getItem(CURRENT_KEY) || "";
    } catch (error) {
      return "";
    }
  }

  function current() {
    const id = currentId();
    return all().find(function (account) { return account.id === id; }) || null;
  }

  // Each account's data is stored under its own prefix, like acct:student-1:cognitiveShop
  function key(name, id) {
    return "acct:" + (id || currentId()) + ":" + name;
  }

  function signIn(id) {
    try { localStorage.setItem(CURRENT_KEY, id); } catch (error) {}
  }

  function signOut() {
    try { localStorage.removeItem(CURRENT_KEY); } catch (error) {}
  }

  // The very first student account inherits any progress saved before accounts existed.
  function adoptOldData(id) {
    LEGACY_KEYS.forEach(function (name) {
      try {
        const old = localStorage.getItem(name);
        if (old !== null) {
          localStorage.setItem(key(name, id), old);
          localStorage.removeItem(name);
        }
      } catch (error) {}
    });
  }

  function createStudent() {
    const data = loadAccounts();
    const firstStudent = !data.list.some(function (a) { return !a.isAdmin; });
    const account = {
      id: "student-" + data.nextNumber,
      name: "Student " + data.nextNumber,
      isAdmin: false,
      created: Date.now()
    };
    data.nextNumber += 1;
    data.list.push(account);
    write(ACCOUNTS_KEY, data);
    if (firstStudent) adoptOldData(account.id);
    signIn(account.id);
    return account;
  }

  function adminSignIn(passcode) {
    if (passcode !== ADMIN_PASSCODE) return false;
    const data = loadAccounts();
    let admin = data.list.find(function (a) { return a.isAdmin; });
    if (!admin) {
      admin = { id: "admin", name: "Admin", isAdmin: true, created: Date.now() };
      data.list.push(admin);
      write(ACCOUNTS_KEY, data);
    }
    signIn(admin.id);
    return true;
  }

  // Returns the cleaned-up name, or an empty string if the name wasn't usable.
  function rename(id, newName) {
    const clean = String(newName || "").trim().slice(0, 24);
    if (!clean) return "";
    const data = loadAccounts();
    const account = data.list.find(function (a) { return a.id === id; });
    if (!account) return "";
    account.name = clean;
    write(ACCOUNTS_KEY, data);
    return clean;
  }

  function deleteAccount(id) {
    const data = loadAccounts();
    data.list = data.list.filter(function (a) { return a.id !== id; });
    write(ACCOUNTS_KEY, data);

    const prefix = "acct:" + id + ":";
    try {
      Object.keys(localStorage).forEach(function (storageKey) {
        if (storageKey.indexOf(prefix) === 0) localStorage.removeItem(storageKey);
      });
    } catch (error) {}

    if (currentId() === id) signOut();
  }

  function getConfig() {
    return Object.assign({}, DEFAULT_CONFIG, read(CONFIG_KEY, {}));
  }

  function setConfig(changes) {
    write(CONFIG_KEY, Object.assign(getConfig(), changes));
  }

  // Anyone who isn't signed in goes to the login page.
  const onLoginPage = window.location.pathname.indexOf("login.html") !== -1;
  if (!onLoginPage && !current()) {
    window.location.replace("login.html");
  }

  // Add the account box (name, admin link, log out) to the bottom of the sidebar.
  function addAccountBox() {
    const sidebar = document.querySelector(".sidebar");
    const account = current();
    if (!sidebar || !account) return;

    const box = document.createElement("div");
    box.className = "account-box";

    const name = document.createElement("div");
    name.className = "account-name";
    name.textContent = account.name;
    box.appendChild(name);

    if (account.isAdmin) {
      const link = document.createElement("a");
      link.className = "nav-link" + (window.location.pathname.indexOf("admin.html") !== -1 ? " active" : "");
      link.href = "admin.html";
      link.textContent = "Admin controls";
      box.appendChild(link);
    }

    const out = document.createElement("button");
    out.type = "button";
    out.className = "logout";
    out.textContent = "Log out";
    out.addEventListener("click", function () {
      signOut();
      window.location.href = "login.html";
    });
    box.appendChild(out);

    sidebar.appendChild(box);
  }

  document.addEventListener("DOMContentLoaded", addAccountBox);

  window.Auth = {
    all: all,
    current: current,
    currentId: currentId,
    key: key,
    signIn: signIn,
    signOut: signOut,
    createStudent: createStudent,
    adminSignIn: adminSignIn,
    rename: rename,
    deleteAccount: deleteAccount,
    getConfig: getConfig,
    setConfig: setConfig,
    getPrefs: getPrefs,
    setPrefs: setPrefs
  };
})();