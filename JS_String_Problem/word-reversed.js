function reversedWord(text) {
  const word = text.split(" ");
  const result = [];
  for (let i = word.lenght - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
}
const myString = "i am good boy";
reversedWord(myString);
console.log(reversed);
