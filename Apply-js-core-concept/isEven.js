// console.log(8 / 2);
// console.log(6 / 2);
// console.log(18 / 2);
// console.log(48 / 2);
// console.log(32 / 2);

// console.log(9 / 2);
// console.log(5 / 2);
// console.log(17 / 2);
// console.log(49 / 2);
// console.log(33 / 2);

// console.log(9 % 2);
// console.log(5 % 2);
// console.log(17 % 2);
// console.log(49 % 2);
// console.log(33 % 2);

// function isEven(number) {
//   const reminder = number % 2;
//   //console.log("reminder------==", costReminder);
//   if (reminder === 0) {
//     console.log("number is Even");
//   } else {
//     console.log("number is Odd");
//   }
// }
// isEven(28);
// isEven(29);

function isEven(number) {
  const reminder = number % 2;

  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const myNum = isEven(304);
console.log(myNum);

const herNum = isEven(301);
console.log(herNum);
