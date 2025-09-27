const container = document.getElementById('container');
const goSignUp = document.getElementById('goSignUp');
const goSignIn = document.getElementById('goSignIn');
const signUpForm = document.querySelector('.sign-up');
const signInForm = document.querySelector('.sign-in');

goSignUp.addEventListener('click', () => {
  container.classList.add('show-signup');
  signUpForm.style.opacity = '1';
  signUpForm.style.pointerEvents = 'auto';
  signInForm.style.opacity = '0';
});

goSignIn.addEventListener('click', () => {
  container.classList.remove('show-signup');
  signUpForm.style.opacity = '0';
  signUpForm.style.pointerEvents = 'none';
  signInForm.style.opacity = '1';
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const menuBtn = document.querySelector('.menu');
const dropdown = document.querySelector('.dropdown');
menuBtn.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
