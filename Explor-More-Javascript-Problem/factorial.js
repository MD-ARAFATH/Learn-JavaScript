// let factorail = 1;
// for (let i = 5; i >= 1; i--) {
//   factorail = factorail * i;
// }
// console.log(factorail);

function factorail(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorail(i - 1);
}
const result = factorail(5);
console.log(result);
