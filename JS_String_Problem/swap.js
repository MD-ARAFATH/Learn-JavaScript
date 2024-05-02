//---------temporary------------
//aproach-1--------------------------------------------->
let first = 5;
let secound = 10;
console.log(first, secound);
const temp = first;
first = secound;
secound = temp;
console.log(first, secound);

//aproach-2------------------>Distructuring
[first, secound] = [secound, first];
console.log(first, secound);
