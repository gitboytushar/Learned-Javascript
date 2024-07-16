//  ------- method 1: same function name imports -------

// import { multiply } from "./utility.js";
// const result = multiply(2, 3, 4);
// - or -
// import { multiply as mul } from "./utility.js";
// const result = mul(2, 3, 4);

// output
// console.log(result);

// ------- method 2: suppose we change the name of function while exporting them in utility.js --------

import { mul, add } from "./utility.js"
const result1 = mul(2, 3, 4);
const result2 = add(2, 3, 4);
console.log(result1);
console.log(result2);

// ------  method 3: importing the 'default' exported function ---------

import square from "./utility.js"; // no need to put {} on function name in default exported function
console.log(square(10));
import sq from "./utility.js"; // we the change the name of function -> and it still works!
console.log(sq(10));

// -------  method 4: 'Importing All the Functions' of utility at once -------

import * as allFunctions from "./utility.js"
console.log(allFunctions.default(4)); //this is use the square function
console.log(allFunctions.add(4,2,1)); //addition function
console.log(allFunctions.mul(4,2,1)); //multiply function