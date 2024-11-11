document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Optional: Auto-play
  setInterval(showNext, 5000); // Change slide every 5 seconds
});