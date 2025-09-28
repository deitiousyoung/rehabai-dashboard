// Dark/Light Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  toggleBtn.textContent =
    document.body.dataset.theme === "dark" ? "☀️" : "🌙";
});
