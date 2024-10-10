function highlight(table) {
  let tbody = table.querySelector("tbody");
  let rows = tbody.querySelectorAll("tr");
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].querySelectorAll("td");
    let available = cells[3].getAttribute("data-available");

    if (available === "true") {
      rows[i].classList.add("available");
    } else if (available === "false") {
      rows[i].classList.add("unavailable");
    } else {
      rows[i].hidden = true;
    }

    if (cells[2].textContent === "m") {
      rows[i].classList.add("male");
    } else {
      rows[i].classList.add("female");
    }

    if (parseInt(cells[1].textContent) < 18) {
      rows[i].style.textDecoration = "line-through";
    }
  }
}
