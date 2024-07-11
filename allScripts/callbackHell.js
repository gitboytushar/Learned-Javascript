// Synchronous functions: run quickly after declaration
// console.log('Hello1 with synchronous function')
// console.log('Hello2 with synchronous function')

/* Asynchronous functions: runs after specified time of declaration during compilation
    setTimeout() function:
      1. The setTimeout() method calls a function after a number of milliseconds.
      2. The setTimeout() method executes a block of code after the specified time.
      3. The method executes the code only once.
      4. setTimeout() is an Asynchronous function, 
         meaning that the timer function will not pause the execution of other functions in function's stack.
         syntax -> setTimeout(function, milliseconds);
*/

// setTimeOut() implementation
// console.log('\nStatement before setTimeOut in code order')
// setTimeout(() => {
//   console.log('This is executed after 3 secs')
// }, 3000)
// console.log('Statement after setTimeOut in code order')


// ----------------------------------- Callback Hell function usecase ----------------------------------

// suppose a scenario to make pizza: pizza -> dough -> cheese

// step 1
function getCheese(callback) {
  setTimeout(() => {
    const cheese = '🧀'
    console.log('here is cheese', cheese)
    callback(cheese);
  }, 2000)
}

// step 2
function makeDough(cheese, callbackOnceMore) {
  setTimeout(() => {
    const dough = cheese + "🫓"
    console.log("here is cheese with dough", dough);
    callbackOnceMore(dough)
  }, 2000);
}

// step 3
function bakePizza(dough, finalCallback) {
  setTimeout(() => {
    const pizza = "🍕"
    console.log("here is your pizza", pizza, "created with", dough);
    finalCallback(pizza)
  }, 2000);
}

// callback hell
getCheese((cheese) => {
  makeDough(cheese, (dough) => {
    bakePizza(dough, () => {
      console.log("Let's Eat! 🍕🍽️");
    })
  })
})


// 