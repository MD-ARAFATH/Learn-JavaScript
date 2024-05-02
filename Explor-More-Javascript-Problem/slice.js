//slice-not remove orginal aray
const friends = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(friends.slice(1, 5));

//splice-remove orginal elemet ,add new element(indexnumber,how many,add new element)
console.log(friends.splice(1, 5, 88, 188, 288, 388, 488));
console.log("orginal array--->", friends);
