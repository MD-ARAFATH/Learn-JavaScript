// fixed per wood requirement
// 1.chair--> 3cft
// 2.table--> 10ft
// 3.bed -->50ft
// vary: quantity

function woodCalculator(chairquantity, tablequantity, bedquantity) {
  const woodPerChair = 114;
  const tablePerWood = 130;
  const bedPerWood = 135;

  const chairwood = chairquantity * woodPerChair;
  const tablewood = tablequantity * tablePerWood;
  const bedWood = bedquantity * bedPerWood;
  //console.log(chairquantity, tablequantity, bedquantity);
  const totalwood = chairwood + tablewood + bedWood;
  return totalwood;
  //   console.log(
  //     "chairwood->",
  //     chairwood,
  //     "tablewood->",
  //     tablewood,
  //     "bedPerWood->",
  //     bedPerWood
  //   );
}
const totalwood = woodCalculator(1, 1, 1);
console.log("totalwood-->", totalwood);





