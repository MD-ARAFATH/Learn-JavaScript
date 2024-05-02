//1---a

var fruits = ["Apple", "Banana", "Orange"];
var index = fruits.indexOf("Banana");

//console.log(index);
// Output: 1

fruits[1] = "mango";
//console.log(fruits);
// Output: [ 'Apple', 'Mango', 'Orange' ]

//b
var fruits = ["Apple", "Banana", "Orange"];
fruits.pop("orange");

console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);

//2------------>

var iAm = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

var A = 80;

var B = 60;
var C = 50;
var D = 40;
var fail = 39;

if (A <= iAm) {
  console.log("iAm gradeA");
} else if (B <= iAm) {
  console.log("iam gradeB");
} else if (C <= iAm) {
  console.log("iam gradeC");
} else if (D <= iAm) {
  console.log("iam gradeD");
} else if (F <= iAm) {
  console.log("iam gradeF");
}

//B------------------

if (A <= tom) {
  console.log("tom gradeA");
} else if (B <= tom) {
  console.log("tom gradeB");
} else if (C <= tom) {
  console.log("tom gradeC");
} else if (D <= tom) {
  console.log("tom gradeD");
} else if (F <= tom) {
  console.log("tom gradeF");
}

//-----------------c--------

if (A <= jane) {
  console.log("jane gradeA");
} else if (B <= jane) {
  console.log("jane gradeB");
} else if (C <= jane) {
  console.log("jane gradeC");
} else if (D <= jane) {
  console.log("jane gradeD");
} else if (F <= jane) {
  console.log("jane gradeF");
}

//---------D------------

if (A <= peter) {
  console.log("peter gradeA");
} else if (B <= peter) {
  console.log("peter gradeB");
} else if (C <= peter) {
  console.log("peter gradeC");
} else if (D <= peter) {
  console.log("peter gradeD");
} else if (F <= peter) {
  console.log("peter gradeF");
}

//-----------------E---------

if (A <= john) {
  console.log("john gradeA");
} else if (B <= john) {
  console.log("john gradeB");
} else if (C <= john) {
  console.log("john gradeC");
} else if (D <= john) {
  console.log("john gradeD");
} else if (F <= john) {
  console.log("john gradeF");
}

//Output:

// iAm gradeA
// tom gradeB
// jane gradeA
// peter gradeC
// john gradeD

//3
var num1 = 13;
var num2 = 45;
var num3 = 79;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  }
} else {
  console.log(num3);
}

if (num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("Isosceles => two sides are equal");
}

//output:Isosceles => two sides are equal
