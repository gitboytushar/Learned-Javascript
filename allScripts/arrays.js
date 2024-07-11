// An array is an object that can store multiple values at once.

const words = ['apple', 'banana', 'cherry']
console.log(words)

console.log('\n')

// Array in javascript can contain mixed datatypes. for example:
const mix = ['apple', 'banana', 'cherry', 12, true, 35, false]
console.log(mix[3])
console.log(mix[4])
console.log(mix[2])

console.log('\n')

// we can also add 'function' into an array in javascript
const arr = [
  'apple',
  'banana',
  'cherry',
  5,
  true,
  function hello() {
    console.log('Hello from array!')
  },
  { name: 'Tushar' }
]

console.log(arr[4])
console.log(arr[5])
console.log(arr[6])

// properties and method in array
console.log('The length of the array (arr) is =', arr.length);

console.log('\n')

// if wwords is an Array
const wwords = ['a', 'b', 'c'];
console.log(wwords);
const newWords = wwords; // now this array variable now also points to the same array in computer memory
console.log(newWords); // it prints the same array

// let's try to can change the element's value with 'newWords' pointer
newWords[1] = 'd';

// Now the array will be printed as: ['a','d','c']
console.log('element at index 1 is no changed to:', newWords[1]);
console.log(wwords);

console.log("\n");

// ------------ Common methods in javascripts -------------

const newArray = [2, 4, 5, 8, 3, 1];

// indexOf() : returns index of element | note: if element is not present, it returns -1
console.log('The index of number 10 in newArray is = ', newArray.indexOf(10));

// includes() : returns true/false
if (newArray.includes(5)) {
  console.log("the newArray includes the number 5 at index = ", newArray.indexOf(5));
}

// push() : push an element at the last of the array
newArray.push('Tushar');
console.log(newArray);

// unshift() : insert new element at the beginning of that array | all elements shifted towards right
newArray.unshift('verma');
console.log(newArray);

// pop() : pops-out(removes) the last element of array
newArray.pop();
console.log(newArray);

// shift() : removes the first element of that array | all elements shifted towards left
newArray.shift();
console.log(newArray);

// sort() : to sort the array in accending order (default)
newArray.sort();
console.log(newArray);

// * slice() : to make a sub-array out an array
// <array name>.slice(<exact index of first element of sub-array bcz it's inclusive>, <one index ahead of the required element bcz it's exclusive>)
const subNewArray = newArray.slice(1, 4);
console.log(subNewArray);