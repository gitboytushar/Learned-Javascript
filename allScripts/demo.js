// basic rememberings...
let a = 22;
console.log('datatype of a is of', typeof (a), 'and its value is', a);

a = a + 1;
console.log('datatype of a is of', typeof (a), 'and its value is increased by 1. so it is', a);

a = '23'
console.log('datatype of a is changed to', typeof (a), 'and its value is', a);
a = a + 1;
console.log('datatype of a is of', typeof (a), 'and its value is concatenated by 1. so its value becomes', a);
console.log("\n");
// exponential operator -> ** -> we can calculate 'b' to the power of 'a' -> a ** b;
let b = 2;
let c = 3;
let result = b ** c;
console.log(result);  // means -> b^c -> 2^3 = 8

// Using exponential operator as Assigning Operator -> **=
result **= 2;
console.log(result);
console.log("\n");
// comparison operators
let firstNumber = 3;
let secondNumber = "3";
result = firstNumber == secondNumber; // only check their values after implicit type-conversion -> Less Used 
console.log(result);
result = firstNumber === secondNumber; // check BOTH value and their datatype -> More Accurate 
console.log(result);

let thirdNumber = 3;
let fourthNumber = "3";
let result2 = thirdNumber != fourthNumber; // simple Not equal to check -> gives false bcz, values are equal
console.log(result2);
result2 = thirdNumber !== fourthNumber; // Most accurate and used Not Equal to  
console.log(result2);

console.log("\n");
// ---------- ternary operator example -------------
const marks = 50;

const output = (marks >= 40) ? "Passed" : "Failed"; // syntax: condition ? true : false;
// Note: 'const' variables are more preffered over 'let' variables. Also, Good to use in case of ternary operator code.
console.log('You got', marks, 'marks which means you are:', output);

console.log("\n");
// ----- switch case -------

const grade = 'B';

switch (grade) {
  case 'A':
    console.log("A -> Very Good");
    break;
  case 'B':
    console.log("B -> Good, Keep learning");
    break;
  case 'C':
    console.log("C -> Need Improvement");
    break;
  case 'D':
  case "E":
    console.log("D -> Not Good");
    break;
  default:
    console.log("Invalid grade!");
}

// ------- loops: It helps to avoid multiple code line with similar type-of-data. -----------
console.log("\n");
// 1. for loop: Used when number of iterations are 'known' to perform
for (let index = 0; index < 5; index++) {
  console.log("Tushar", index);
}
console.log("\nindex with number jump of 2:");
for (let i = 1; i <= 5; i += 2) {
  console.log(i);
}
console.log("\n");
// 2. while loop: Used when number of iterations are 'Unknown' to perform
let j = 0;
while (j < 5) {
  console.log("Iteration number ", j);
  j++;
};
console.log("\n");
// 3. do-while loop: always run for first time then checks the condition mentioned.
do {
  console.log("value of j is ", j);
  j++;
} while (j < 10);

console.log("\n");
// 4. 'break' and 'continue' statements in loop.
// example1: break when temp becomes 2 
let temp = 0;
while (temp < 5) {
  console.log("Temp is =", temp);
  temp += 1;
  if (temp === 2) {
    break;
  }
};
console.log("\n");
// example2: continue means to skip the all following code statements and goto condition check -> continue when temp2 is 3 -> 3rd value will be skipped
let temp2 = 0;

while (temp2 < 5) {
  temp2 += 1;
  if (temp2 === 3) {
    continue;
  }
  console.log("Temp is =", temp2);
};

console.log("\n");