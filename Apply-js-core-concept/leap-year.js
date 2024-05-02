// var year = 4;
// var leaYear = 2024 % year;
// console.log(leaYear);

// function isLeapYear(year) {
//   const reminder = year % 4;
//   if (reminder === 0) {
//     console.log("yes,this is leapyear---==", year);
//   } else {
//     console.log("No,your year not a leap year");
//   }
// }
// isLeapYear(1245);

function isLeapYear(year) {
  const reminder = year % 4;
  if (reminder === 0) {
    return true;
  } else {
    return false;
  }
}
const isMyLeapYear = isLeapYear(2024);
console.log(isMyLeapYear);

const isHerLeapYear = isLeapYear(1900);
console.log(isHerLeapYear);
