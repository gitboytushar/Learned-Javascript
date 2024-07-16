// --------- method 1: export directly ---------

// export function multiply(a, b, c) {
//   return a * b * c;
// }


// ------ method 2: export in last, and can change the name of function in export statement -----

function multiply(a, b, c) {
  return a * b * c;
}

function addition(a, b, c) {
  return a + b + c;
}

export {
  multiply as mul,
  addition as add
}

// ------ method 3: default export ------

function square(a) {
  return a * a;
}
export default square; // only one function can be exported as default