// ---- method 1: Basic error handling (when javascript throws error) ----

// try {
//   console.log(age);
// } catch (e) {
//   console.log(e.name, '-->', e.message);
// }

// const a = 2 * 4;
// console.log("Important statements under the error code statement, value of 'a' is =", a);

// ---- method 2: Custom error throw on defined conditions ----

// try {
//   const res = prompt('Are you a robot?')
//   if (res === 'y' || res === 'Y') {
//     throw new Error('Robot Found!')
//   }
// } catch (error) {
//   console.log(error.name, '--->', error.message);
// }

// ---- method 3: Custom error throw and "Finally block" ----

try {
  const res = prompt('Are you a robot?')
  if (res === 'y' || res === 'Y') {
    throw new Error('Robot Found!')
  }
} catch (error) {
  console.log(error.name, error.message);
} finally {
  console.log('Finally block says: Hello to error handling.');
}