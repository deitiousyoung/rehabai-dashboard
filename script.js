// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Carousel
let slides = document.querySelectorAll('.slide');
let indicatorsContainer = document.querySelector('.indicators');
let currentIndex = 0;

// Create indicators
slides.forEach((_, i) => {
  let btn = document.createElement('button');
  if (i === 0) btn.classList.add('active');
  btn.addEventListener('click', () => showSlide(i));
  indicatorsContainer.appendChild(btn);
});

let indicators = indicatorsContainer.querySelectorAll('button');

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Auto rotate every 5s
setInterval(nextSlide, 5000);
