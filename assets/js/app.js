const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

if (header && hero) {
  const heroHeight = hero.offsetHeight;

  console.log(heroHeight);
  console.log(window.scrollY);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= heroHeight) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
}

// reviews fade slider
const slides = document.querySelectorAll('.reviews-item');

const prevBtn = document.querySelector('.slider-arrows-prev');
const nextBtn = document.querySelector('.slider-arrows-next');

let slideIndex = 0;

function show(index) {
  slides[slideIndex].classList.remove('active');
  slides[index].classList.add('active');
  slideIndex = index;
}

prevBtn.addEventListener('click', () => {
  if (slideIndex <= 0) return;
  show(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  if (slideIndex >= slides.length - 1) return;
  show(slideIndex + 1);
});

// burger menu
const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav');

if (burgerBtn && navList) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
  });
}

// gallery fade slider
// !!!!!!!!!!!зробити!!!!!!!!!!!!
// if (count === 4) count = 1;
// використати timeout
