export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");
    this.createHeader();
    this.createBody(rows);
  }

  createHeader() {
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let headers = ["Имя", "Возраст", "Зарплата", "Город"];

    headers.forEach((headerTitle) => {
      let th = document.createElement("th");
      th.textContent = headerTitle;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    this.elem.appendChild(thead);
  }

  createBody(rows) {
    let tbody = document.createElement("tbody");

    rows.forEach((row) => {
      let tr = document.createElement("tr");

      Object.values(row).forEach((text) => {
        let td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
      });

      let td = document.createElement("td");
      let button = document.createElement("button");

      button.textContent = "[X]";
      button.addEventListener("click", () => tr.remove());
      td.appendChild(button);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });

    this.elem.appendChild(tbody);
  }
}
