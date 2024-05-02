//factrial number
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= 9; i++) {
    result = result * i;
  }
  return result;
}
const result = factorial(9);
console.log(result);
