// Promises in javascript to handle asychronous operations, It has three states Pending, Fulfilled and Rejected.

/*
// Let's understand with example
// suppose a async function
function getCheese() {
  setTimeout(() => {
    const cheese = '🧀'
    console.log("here is the cheese", cheese);
    return cheese
  }, 2000)
}

// simply creating a promise
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = true
  if (isBoarded) {
    resolve('You are not in the Flight!')
  } else {
    reject('Your flight has been cancelled!')
  }
})

// simply using the Promise
ticket
  .then((data) => {
    console.log('wohoo', data)
  })
  .catch((data) => {
    console.log('oh no', data)
  })
  .finally(() => {
    console.log("I will always be executed.")
  })
*/

// ------------------------------------------------- Main Learning ----------------------------------------------

// async function 1
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 2000);
  })
}

// async function 2
function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🫓";
      resolve(dough);
      // reject("Bad cheese 🧀");
    }, 2000);
  })
}

// async function 3
function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  })
}


// ----------- better approach: using async function and await keyword to avoid chaining of then() -----------

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("got the cheese", cheese);

    const dough = await makeDough(cheese);
    console.log("got the dough", dough);

    const pizza = await bakePizza(dough);
    console.log("got the pizza", pizza);
  } catch (err) {
    console.log("'error occurred: ", err);
  }
  // finally block here: always executes
  console.log("Process ended.");
}

orderPizza(); // calling that async function


// --------- function calling in Promises without Async function -----------
// getCheese()
//   .then((cheese) => {
//     console.log("here is the cheese", cheese);
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("here is the dough", dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("here is the pizza", pizza);
//   })
//   .catch((data) => {
//     console.log("Error occurred!", data);
//   })
//   .finally(() => {
//     console.log("Process Ended.");
//   })