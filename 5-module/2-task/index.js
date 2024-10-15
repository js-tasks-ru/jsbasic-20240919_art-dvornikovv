function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  btn.addEventListener("click", () => {
    let text = document.querySelector("#text");
    text.hidden = !text.hidden;
  });
}
