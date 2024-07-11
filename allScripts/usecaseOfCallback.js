// When and how to implement the callback functions

const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

const firstNeg = (num) => {
  return num < 0;
};

// ---- using advance array methods ----

// findIndex() method
const result = a.findIndex(firstNeg);
console.log(result);

// forEach() method -> first argument is a Number, second argument is Index always
a.forEach((num, index) => {
  console.log("element at index", index, "is =", num);
});