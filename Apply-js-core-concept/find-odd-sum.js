// function getSumOfArray(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     const index = i;
//     const element = number[i];
//     sum = sum + element;
//     //console.log(i, element, "Total Sum=", sum);
//   }
//   return sum;
// }

function getOddNumberofArray(numbers) {
  const oddNum = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      console.log(index, element);
      oddNum.push(element);
    }
  }
  return oddNum;
}
const myNum = [20, 34, 45, 76, 78, 12];
const oddNum = getOddNumberofArray(myNum);
console.log(oddNum);
const oddNumSum = getOddNumberofArray(oddNum);
console.log(oddNumSum);
