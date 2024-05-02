var shoppingCart = {
  book: 3,
  sunglass: 5,
  Keyboard: 6,
  mouse: 1,
  pen: 25,
  mouse: 10,
};

//when we know property name,use .dot notation
var pencount = shoppingCart.pen;
//console.log(shoppingCart);

//alternative system
//when we know property name,use .dot notation
var pencount2 = shoppingCart["pen"];

var propertiesName = "book";
var propertyValues = shoppingCart[propertiesName];
console.log(propertiesName, propertyValues);

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
//console.log(properties);
//console.log(propertiesValues);

//1..........set properties value
shoppingCart.phone = 4;
console.log(shoppingCart);

//2..........set properties value
shoppingCart["mouse"] = 25;
console.log(shoppingCart);

//3..........set properties value
shoppingCart[propertiesName] = 69;
console.log(shoppingCart);
