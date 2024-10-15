function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel__inner");
  const carouselSlides = carouselInner.querySelectorAll(".carousel__slide");

  const carouselArrowRight = carousel.querySelector(".carousel__arrow_right");
  const carouselArrowLeft = carousel.querySelector(".carousel__arrow_left");

  const slideWidth = carouselSlides[0].offsetWidth;

  let slideIndex = 0;

  function updateCarousel() {
    const translateX = -slideIndex * slideWidth;
    carouselInner.style.transform = `translateX(${translateX}px)`;

    if (slideIndex === 0) {
      carouselArrowLeft.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
    }

    if (slideIndex === carouselSlides.length - 1) {
      carouselArrowRight.style.display = "none";
    } else {
      carouselArrowRight.style.display = "";
    }
  }

  carousel.addEventListener("click", (event) => {
    if (event.target.closest(".carousel__arrow_right")) {
      if (slideIndex < carouselSlides.length - 1) {
        slideIndex++;
        updateCarousel();
      }
    } else if (event.target.closest(".carousel__arrow_left")) {
      if (slideIndex > 0) {
        slideIndex--;
        updateCarousel();
      }
    }
  });
  updateCarousel();
}
