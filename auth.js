// In-memory user store using localStorage
const users = JSON.parse(localStorage.getItem("users")) || {};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("registerUsername").value;
      const password = document.getElementById("registerPassword").value;

      if (users[username]) {
        alert("Username already exists!");
      } else {
        users[username] = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registered successfully!");
        window.location.href = "index.html";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      if (users[username] && users[username] === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }
});
