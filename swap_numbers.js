function swap_numbers_one(num1, num2) {
  console.log("num1", num1);
  console.log("num2", num2);

  [num2, num1] = [num1, num2];
  console.log("num1", num1);
  console.log("num2", num2);
}

// swap_numbers_one(5, 10);
function swap_numbers_two(num1, num2) {
  console.log("num1", num1);
  console.log("num2", num2);

  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  console.log("num1", num1);
  console.log("num2", num2);
}

// swap_numbers_two(5, 10);
