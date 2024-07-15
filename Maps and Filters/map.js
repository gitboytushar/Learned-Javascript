// suppose this array of students
let students = [
  { id: '001', name: 'Anish', sports: 'Cricket' },
  { id: '002', name: 'Smriti', sports: 'Basketball' },
  { id: '003', name: 'Rahul', sports: 'Cricket' },
  { id: '004', name: 'Bakul', sports: 'Basketball' },
  { id: '005', name: 'Nikita', sports: 'Hockey' }
]

// using map() to get student names in console
// const names = students.map((curValue, index, array) => {
//   // print names
//   return `<li>${curValue.name}</li>`
// })

// using filter and map both to get specific result
const names = students
  .filter((curValue) => curValue.sports==='Cricket')
  .map((curValue, index, array) => {
  return `<li>${curValue.name}</li>`;
})

console.log(names)

// select the div container from html to send this array list
const div = document.getElementById('container')
div.innerHTML = `<ul>${names.join('')}</ul>` // to make the array element into string, inside the <ul> tag
