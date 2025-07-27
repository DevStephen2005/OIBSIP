// Register user
document.getElementById("register-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  localStorage.setItem(username, password);
  document.getElementById("register-msg").textContent = "Registered successfully!";
  this.reset();
});

// Login user
document.getElementById("login-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    localStorage.setItem("currentUser", username);
    window.location.href = "secured.html";
  } else {
    document.getElementById("login-error").textContent = "Invalid credentials!";
  }
});
