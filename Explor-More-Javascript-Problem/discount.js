// 1.if ticket number is less than 100,per ticket price:100
// 2.if ticket number is More than 100, but less than 200 ,first 100 ticket will be 100tk /rest ticket will be 90tk per piece
// 3.if you purchase more than 200 tickets
// first 100-->100tk
// 101-200-->90tk
// 200+--->70tk

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const secound100rate = 90;
  const rest = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * secound100rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const secound100Price = 100 * secound100rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * rest;
    const totalCost = first100Price + secound100Price + restTicketPrice;
    return totalCost;
  }
}
const price = ticketPrice(250);
console.log(price);
