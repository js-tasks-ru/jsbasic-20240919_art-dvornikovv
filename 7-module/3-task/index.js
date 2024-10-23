export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.createSlider();
    this.changeSLiderValue();
  }

  createSlider() {
    let elem = `
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value">0</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps"></div>
      </div>
    `;

    let container = document.querySelector(".container");
    container.innerHTML += elem;

    for (let i = 0; i < this.steps; i++) {
      let stepItem = document.createElement("span");
      container.querySelector(".slider__steps").append(stepItem);
    }

    container
      .querySelector(".slider__steps")
      .children[0].classList.add("slider__step-active");

    return container.querySelector(".slider");
  }

  changeSLiderValue() {
    this.elem.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;

      let value = Math.round(approximateValue);
      let valuePercents = (value / segments) * 100;

      let thumb = this.elem.querySelector(".slider__thumb");
      let progress = this.elem.querySelector(".slider__progress");

      let leftPercents = valuePercents;

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      this.value = value;
      thumb.querySelector(".slider__value").innerHTML = value;

      this.elem.dispatchEvent(
        new CustomEvent("slider-change", { detail: this.value, bubbles: true })
      );
    });
  }
}
