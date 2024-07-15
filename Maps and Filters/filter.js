// suppose this array of students
let students = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" }
]

// ------ preferred method --------
const newArray = students.filter((curValue, index, array) => {
  if (curValue.id % 2 == 0) return true;
  else return false;
})

console.log(" Here is the New Array with filter method");
console.log(newArray);



// we can push those %2 value without using the filter() method 
// -> not preferred bcz there can chance of mutation in newArray in the process
const newArrayWithoutFilterMethod = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].id % 2 == 0) {
    newArrayWithoutFilterMethod.push(students[i]);
  }
}
console.log("Here is the New Array without filter method");
console.log(newArrayWithoutFilterMethod);