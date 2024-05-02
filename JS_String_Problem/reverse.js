function reverseString(text) {
  let reversed = " ";
  for (let i = text.lenght - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}
const myString = "i am aa good boy";
const reversed = reverseString(myString);
console.log("Reversed Output--->", reversed);
