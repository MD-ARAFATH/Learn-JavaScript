//MDN MATH Search google

const result = Math.pow(3, 2);
console.log(result);

const num1 = 41;
const num2 = 25;
const gap = Math.abs(num1 - num2);
console.log(gap);
if (gap < 5) {
  console.log("you can be friend");
} else {
  console.log("too far away");
}

//----------------

const number = 5.6;
//const totalNum = Math.round(number);
//console.log("number------->", totalNum);

const number2 = 4.664376;
const totalNum2 = Math.ceil(4.00001);
console.log("celi--->", totalNum2);

const number3 = 3.664376;
const totalNum3 = Math.round(3.00001);
console.log("round--->", totalNum3);

const number4 = 745.664376;
const totalNum4 = Math.floor(745.664376);
console.log("floor--->", totalNum4);

//----------------------------------Random number--------------

const random = Math.round(Math.random() * 100);
console.log("random number------------------->", random);

for (let i = 0; i < 10; i++) {
  const random = Math.round(Math.random() * 10);
  console.log("random number-->", random);
}
