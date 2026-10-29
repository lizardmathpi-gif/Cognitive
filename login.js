// Handles the login page: new account, existing accounts, and admin sign-in.
(function () {
  const auth = window.Auth;
  if (!auth) return;

  document.querySelector("#login-button").addEventListener("click", function () {
    auth.createStudent();
    window.location.href = "index.html";
  });

  // Let people go back to an account they already made.
  const students = auth.all().filter(function (account) { return !account.isAdmin; });
  const existing = document.querySelector("#existing");
  const list = document.querySelector("#existing-list");

  if (students.length > 0) {
    existing.hidden = false;
    students.forEach(function (account) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "existing-account";
      button.textContent = account.name;
      button.addEventListener("click", function () {
        auth.signIn(account.id);
        window.location.href = "index.html";
      });
      list.appendChild(button);
    });
  }

  // Admin sign-in
  const pass = document.querySelector("#admin-pass");
  const message = document.querySelector("#admin-message");

  function adminLogin() {
    if (auth.adminSignIn(pass.value)) {
      window.location.href = "admin.html";
    } else {
      message.textContent = "That passcode isn't right.";
    }
  }

  document.querySelector("#admin-button").addEventListener("click", adminLogin);
  pass.addEventListener("keydown", function (event) {
    if (event.key === "Enter") adminLogin();
  });
})();