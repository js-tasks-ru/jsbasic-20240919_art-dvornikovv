/* eslint-disable indent */
import createElement from "../../assets/lib/create-element.js";
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.initCarousel();
  }

  createCarousel() {
    const carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
      </div>
    `);

    this.slides.forEach((slide) => {
      const slideInfo = `
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${
            slide.image
          }" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `;

      const slideElement = createElement(slideInfo);

      const carouselInner = carousel.querySelector(".carousel__inner");
      carouselInner.append(slideElement);
    });
    return carousel;
  }

  initCarousel() {
    const carouselInner = this.elem.querySelector(".carousel__inner");
    const carouselSlides = carouselInner.querySelectorAll(".carousel__slide");

    const carouselArrowRight = this.elem.querySelector(
      ".carousel__arrow_right"
    );
    const carouselArrowLeft = this.elem.querySelector(".carousel__arrow_left");

    const slideWidth = 500;
    // const slideWidth = carouselSlides[0].offsetWidth;
    // Почему-то offsetWidth = 0;

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

    this.elem.addEventListener("click", (event) => {
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
      } else if (event.target.closest(".carousel__button")) {
        const slideId = event.target
          .closest(".carousel__slide")
          .getAttribute("data-id");
        this.elem.dispatchEvent(
          new CustomEvent("product-add", { detail: slideId, bubbles: true })
        );
      }
    });
    updateCarousel();
  }
}
