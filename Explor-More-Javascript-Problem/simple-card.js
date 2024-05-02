const shoppinCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 1000 },
  { name: "pant", price: 1400 },
  { name: "belt", price: 1500 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
    //console.log(sum);
  }
  return sum;
}
const expense = totalCost(shoppinCart);
console.log("totalcost-->", expense);
