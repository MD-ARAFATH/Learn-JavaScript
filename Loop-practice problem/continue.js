var numbers = [15, 25, 35, 55, 45, 65, 85, 95];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];

  if (number > 85) {
    continue;
  }

  console.log(number);
}
