const container = document.getElementById('container');
const goSignUp = document.getElementById('goSignUp');
const goSignIn = document.getElementById('goSignIn');
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Switch between Sign In & Sign Up
goSignUp.addEventListener('click', () => {
  container.classList.add('show-signup');
});
goSignIn.addEventListener('click', () => {
  container.classList.remove('show-signup');
});

// Dropdown toggle for contacts
menuBtn.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Dark/Light theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});
