const names = [
  "abul",
  "babul",
  "sabul",
  "edul",
  "kobul",
  "hasibul",
  "ariful",
  "abul",
  "babul",
  "kabul",
  "sabul",
  "abul",
];
function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const uniqenames = removeDuplicate(names);
console.log(uniqenames);
