let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => (slide.style.transform = `translateX(-${slideIndex * 100}%)`));
  dots.forEach((dot) => dot.classList.remove("active"));

  dots[slideIndex].classList.add("active");
}

function currentSlide(index) {
  slideIndex = index - 1;
  showSlides();
}

setInterval(() => {
  slideIndex = (slideIndex + 1) % 3;
  showSlides();
}, 3000);
