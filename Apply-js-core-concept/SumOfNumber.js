//sum number value factorial number
// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//   sum = sum + i;
//   // console.log(i, sum);
// }

function sumOFnumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
sumOFnumber(20);
