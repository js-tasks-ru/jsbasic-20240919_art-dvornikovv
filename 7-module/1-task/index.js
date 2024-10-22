import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.createRibbon();
    this.ribbonInner = this.elem.querySelector(".ribbon__inner");
    this.scrollRibbon();
    this.hideButtons();
    this.selectCategory();
  }

  createRibbon() {
    let elem = createElement(
      `
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <div class="ribbon__inner"></div>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `
    );

    this.categories.forEach((category) => {
      const link = createElement(`
        <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `);
      elem.querySelector(".ribbon__inner").append(link);
    });

    return elem;
  }

  scrollRibbon() {
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest(".ribbon__arrow_right")) {
        this.ribbonInner.scrollBy(350, 0);
      } else if (event.target.closest(".ribbon__arrow_left")) {
        this.ribbonInner.scrollBy(-350, 0);
      }
    });
  }

  hideButtons() {
    const leftArrow = this.elem.querySelector(".ribbon__arrow_left");
    const rightArrow = this.elem.querySelector(".ribbon__arrow_right");

    this.ribbonInner.addEventListener("scroll", () => {
      let scrollWidth = this.ribbonInner.scrollWidth;
      let scrollLeft = this.ribbonInner.scrollLeft;
      let clientWidth = this.ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        leftArrow.classList.remove("ribbon__arrow_visible");
      } else {
        leftArrow.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        rightArrow.classList.remove("ribbon__arrow_visible");
      } else {
        rightArrow.classList.add("ribbon__arrow_visible");
      }
    });
  }

  selectCategory() {
    this.elem.addEventListener("click", (event) => {
      if (event.target.classList.contains("ribbon__item")) {
        event.preventDefault();

        const activeCategory = this.elem.querySelector(".ribbon__item_active");
        if (activeCategory) {
          activeCategory.classList.remove("ribbon__item_active");
        }

        event.target.classList.add("ribbon__item_active");

        const categoryId = event.target.dataset.id;
        this.elem.dispatchEvent(
          new CustomEvent("ribbon-select", {
            detail: categoryId,
            bubbles: true,
          })
        );
      }
    });
  }
}
