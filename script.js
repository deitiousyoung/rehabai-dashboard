// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});

// Switch to Sign Up
document.querySelector('.switch-to-signup').addEventListener('click', () => {
  document.querySelector('.logo-box').classList.add('active');
  document.querySelector('.signup-box').classList.remove('hidden');
});

// Switch back to Sign In
document.querySelector('.switch-to-signin').addEventListener('click', () => {
  document.querySelector('.logo-box').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.signup-box').classList.add('hidden');
  }, 600); // wait for animation
});
