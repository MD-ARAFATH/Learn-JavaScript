// // //1---inch to fwwt
// const myInch = 36;
// const myFeet = myInch / 12;

// console.log(myFeet);

// const dadaInch = 144;
// const dadaFeet = dadaInch / 12;

// console.log("dada Feet-------->", dadaFeet);

// const dadiInch = 60;
// const dadiFeet = dadiInch / 12;

// console.log("dadi Feet-------->", dadiFeet);

function inchToFeet(inches) {
  const Feet = inches / 12;
  return Feet;
}

const naniInch = 1200;
const naniFeet = inchToFeet(naniInch);

console.log("nani__sobar jomi----------->", naniFeet);

const dadiInch = 600;
const dadiFeet = inchToFeet(dadiInch);

console.log("dadi___sobar jomi----------->", dadiFeet);

//-------------mile to km--------------------------------
function totalmile(mile) {
  const km = mile * 1.60934;
  return km;
}

const firstmile = 1200;
const distance = totalmile(firstmile);

console.log("distance koto----------->", distance, "km");

const secoundmile = 1400;
const lastdistance = totalmile(secoundmile);

console.log("Secound_distance koto----------->", lastdistance, "km");
