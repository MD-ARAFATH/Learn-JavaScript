function maxInArray(number) {
  const calculate = Math.max(number);

  return calculate;
}
const height = (60, 65, 80, 86);
const tallest = maxInArray(height);
console.log("Tallest man -----> ", tallest);

function maxInArrayNum(number2) {
  const calculate2 = Math.min(number2);

  return calculate2;
}
const height2 = (60, 65, 80, 86, 34);
const tallest2 = maxInArrayNum(height2);
console.log("Shortest man -----> ", tallest2);
