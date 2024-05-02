const number = [20, 33, 45, 67, 45, 23];
//(Array.isArray check array)
console.log(Array.isArray(number));
//chcek element
console.log(number.includes(33));

//concat use to add new array
const newfriend = [99, 109, 110, 120, 130];
const addFriend = newfriend.concat(number);
console.log(addFriend);

const result = compare(15, "15");
console.log(result);
function compare(a, b) {
  if (a.toString() === b) {
    return true;
  } else {
    return false;
  }
}
const result = compare(25, 25);
console.log(result);
