const friend = [
  { name: "abul", friend: "babul", name: "kabul", friend: "abul" },
];

function IsBestFriend(obj1, obj2) {
  const friends = obj1.friend === obj2.name && obj2.friend === obj1.name;
  return friends;
}

console.log(
  IsBestFriend(
    { name: "kabul", friend: "bbul" },
    { name: "abul", friend: "kabul" }
  )
); 
