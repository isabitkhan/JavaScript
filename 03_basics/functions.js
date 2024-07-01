const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

const result = addTwoNumbers(2, 3);
console.log("Result : ", result);

const addCartPrices = function (...prices) {
  return prices;
};

console.log(addCartPrices(200, 399, 400));

// IFEE

(() => console.log("Sabit"))();
((name) => console.log(`This is ${name}`))("sabit");
