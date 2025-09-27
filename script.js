const container = document.getElementById('container');
const goSignUp = document.getElementById('goSignUp');
const goSignIn = document.getElementById('goSignIn');
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const themeToggle = document.getElementById('themeToggle');

goSignUp.addEventListener('click', () => {
  container.classList.add('show-signup');
});

goSignIn.addEventListener('click', () => {
  container.classList.remove('show-signup');
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Dropdown menu toggle
menuBtn.addEventListener('click', () => {
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
});
