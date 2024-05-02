const shoppinCart = [
  { name: "shoe", price: 2200, quantity: 2 },
  { name: "shirt", price: 1500, quantity: 3 },
  { name: "pant", price: 2000, quantity: 4 },
  { name: "belt", price: 1200, quantity: 5 },
];
function totalCost(products) {
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price * product.quantity;
    //console.log(sum);
  }
  return sum;
}
const expense = totalCost(shoppinCart);
console.log("totalcost-->", expense);
