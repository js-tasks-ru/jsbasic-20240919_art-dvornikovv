let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  // read() {
  //   this.a = +prompt("a", 0);
  //   this.b = +prompt("b", 0);
  //   в данном случае из-за prompt не проходит проверку npm test
  // },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
