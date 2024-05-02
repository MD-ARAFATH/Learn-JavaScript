//1
const jim = 85;
const dela = 99;
const chinku = 77;
if (jim > dela && jim > chinku) {
  console.log("jim will get the cake");
} else if (dela > jim && dela > chinku) {
  console.log("Dela will get the cake");
} else if (chinku > jim && chinku > dela) {
  console.log("Chinku will get the cake");
}

//2
const num1 = 78;
const num2 = 345;
const num3 = 54;
const result = Math.max(78, 345, 54);
const result2 = Math.min(78, 345, 54);
console.log(result);
console.log(result2);

//3
function largeNum(number) {
  const MaxNum = Math.max(301, 45, 78);
  return MaxNum;
}
const value = largeNum(301, 45, 78);
console.log("maxnum--->", value);

//4
function minNum(number5) {
  const minNum = Math.min(301, 45, 78);
  return minNum;
}
const value5 = minNum(301, 45, 78);
console.log("maxnum--->", value5);
