function getMinMax(str) {
  let result = str
    .split(" ")
    .map((el) => Number(el))
    .filter((el) => !isNaN(el));
  let min = Math.min(...result);
  let max = Math.max(...result);
  return { min, max };
}

const inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

console.log(getMinMax(inputData));
