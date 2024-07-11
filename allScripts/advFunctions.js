// Advance Function Concepts in javascript as per ES6

console.log("Hello to Advance functions in javascript");

// ---- Arrow Functions ----

const greet = () => {
  console.log("\nHello from Arrow function.");
}
const greetWithParameters = (count) => {
  for (let i = 0; i < count; i++) {
    console.log("Hello Arrow function, iteration", i + 1);
  }
}
greet();
greetWithParameters(5);

// oneline arrow function: no return keyword and {} when number of inside statements is only 1.
const square = (num) => num * num;
console.log(square(4));


// ---- Callback Functions ---- It is a function passed as an argument to another function

// ---- example 1

// function
function sayHello(name, callback) {
  console.log('Hi ' + name);
  callback();
}
// callback function
function callMe() {
  console.log("- I am callback function");
}

// passing the function as an argument
sayHello('Tushar', callMe);

// ---- example 2: make a parent function and pass any other function as an argument as per need

// main function
const calculate = (a, b, operation) => {
  return operation(a, b);
}

// method 1: declare the callback function in pararmeter itself
const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
})
console.log('Addition of given numbers is =', addition);

// method 2: declare the callback function seperately and pass it as argument
const subtraction = (a, b) => a - b;
const resultFromSubtraction = calculate(8, 3, subtraction);
console.log('Subtraction of given numbers is =', resultFromSubtraction);

// method 3: declaring one more function to multiply two numbers
function multiply(a, b) {
  return a * b;
}
const multiplyResult = calculate(4, 4, multiply);
console.log("Product of given numbers is =", multiplyResult);