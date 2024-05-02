// const numbers = [25, 30, 45, 67, 21, 50];
// // for (let i = 0; i < numbers.length; i++) {
// //   const number = numbers[i];
// //   console.log(number);
// // }
// for (const number of numbers) {
//   console.log(number);
// }
const products = [
  {
    id: 1,
    name: "walton",
    product: "mobile",
    price: 120000,
    mode: "k3",
    id: 2,
    name: "walton2",
    product: "laptop",
    price: 121000,
    mode: "k4",
    id: 3,
    name: "walton3",
    product: "mouse",
    price: 122000,
    mode: "k5",
    id: 4,
    name: "walton4",
    product: "keyboard",
    price: 125000,
    mode: "k6",
  },
];
// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    console.log(product.name.includes(search));
  }
}
const result = matchedProducts(products, "phone");
console.log(result);
