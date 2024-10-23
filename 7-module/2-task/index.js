import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.elem = this.createModal();
    this.open();
    this.closeOnButtons();
  }

  createModal() {
    let modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
            <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>
    </div>
    `);
    return modal;
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add("is-modal-open");
  }

  setTitle(title) {
    this.elem.querySelector(".modal__title").textContent = title;
  }

  setBody(node) {
    this.elem.querySelector(".modal__body").append(node);
  }

  close() {
    if (document.body.contains(this.elem)) {
      document.body.removeChild(this.elem);
    }
    document.body.classList.remove("is-modal-open");
    document.removeEventListener("keydown", this.onKeydown);
  }

  closeOnButtons() {
    this.elem.querySelector(".modal__close").addEventListener("click", () => {
      this.close();
    });

    document.addEventListener(
      "keydown",
      (this.onKeydown = (event) => {
        if (event.code === "Escape") {
          this.close();
        }
      })
    );
  }
}
