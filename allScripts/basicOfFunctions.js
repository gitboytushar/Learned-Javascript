// Function -> Divide the big code into reusable chunks for efficient coding -> make code DRY(dont repeat yourself).
// Management and Bug fixing becomes fast.

// ----- Basic of functions -----

function sum(n1, n2) {
  console.log(`${n1} + ${n2} = `, n1 + n2);
}

const a = 2, b = 5;
sum(a, b);
console.log('multiplication is =', multiply(a, b));

const c = 3, d = 6;
sum(c, d);
console.log('multiplication is =', multiply(c, d));
console.log(typeof (sum(c, d))); // undefined

// fucntion with a return statement
function multiply(m, n) {
  return m * n;
}

console.log("\n");

// ----- Function as Expression -----

// with this method we can embedd a complete function inside a variable <- allowed only in javascript
// Note: We don't write function-name here as per it's syntax -> thus we call it Anonymous function declaration -> used in DOM manipulation etc. 
// Note: Always define this function-expression before calling it, otherwise it will give error

const functionVariable = function (a, b) {
  return a ** b; // exponential calc
}

console.log('function as expression, returned value is =', functionVariable(2, 5)); // 32
console.log('function as expression, its datatype is = ', typeof (functionVariable(2, 5))); // number

console.log("\n");

// -------- Nested Functions ---------

function addSquares(a, b) {
  const sqA = square(a);
  console.log('square of number', a, 'is =', sqA); // 9
  const sqB = square(b);
  console.log('square of number', b, 'is =', sqB); // 16

  function square(num) {
    return num * num;
  }

  return sqA + sqB;
}

console.log('The sum of squares of given two numbers', addSquares(3, 4)); // 25