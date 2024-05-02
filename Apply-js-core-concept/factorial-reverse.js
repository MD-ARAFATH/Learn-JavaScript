//7--1
function factorialNumber(number) {
  for (let i = number; i >= 1; i--) {
    console.log(i);
  }
}
factorialNumber(7);

function factorialNumber(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(i);
  }
  return result;
}
const number = 8;
const fact = factorialNumber(number);
console.log(number, "factorial-->", fact);
