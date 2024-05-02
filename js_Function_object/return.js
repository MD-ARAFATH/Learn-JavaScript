function add(num1, num2) {
  // console.log(num1, num2);
  var sum = num1 + num2;
  //console.log(sum);
  return sum;
}
//add(15, 30);

var total = add(80, 20);
//console.log("total =", total);

function bringSingara(money) {
  var singaraPrice = 10;
  var Quantity = money / singaraPrice;
  return Quantity;
}
var myTaka = 150;
var singara = bringSingara(myTaka);
console.log("singara nen", singara);
