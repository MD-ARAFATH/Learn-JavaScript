function getTotal(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;
  return average;
}

const assignment1mark1 = 85;
const assignment1mark2 = 65;
const assignment1mark3 = 45;
var myAverage = getTotal(assignment1mark1, assignment1mark2, assignment1mark3);
console.log("myAverage so far = ", myAverage);


