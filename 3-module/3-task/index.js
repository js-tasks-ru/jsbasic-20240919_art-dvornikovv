let str = "background-color";

function camelize(str) {
  str = str.split("-");
  return str
    .map((word, index) =>
      index ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
}
camelize(str);
