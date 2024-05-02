//array vs object
var shoppingItem = ["book", "pen", "keyboard", "mouse"];
var friendAge = [20, 22, 34, 13, 37];
var friendAge = {
  rohim: 21,
  fahim: 18,
  mohammad: 34,
  ali: 13,
  amir: 37,
};

var shoppingCart = {
  book: 3,
  sunglass: 5,
  Keyboard: 6,
  mouse: 1,
  pen: 25,
  mouse: 10,
  shoes: 35,
};
const keys = Object.keys(shoppingCart);
//console.log(keys);

const values = Object.values(shoppingCart);
//console.log(values);

//var keys=["book", "pen", "keyboard", "mouse"]

///loop to using value with name
for (var i = 0; i < keys.length; i++) {
  var propertiesName = keys[i];
  var propertiesValues = shoppingCart[propertiesName];
  // console.log(propertiesName, propertiesValues);
}

//for in loop shortcurt----------------
for (var propertiesName in shoppingCart) {
  const value = shoppingCart[propertiesName];
  console.log(propertiesName, value);
}
