// ------- when using bubbling propagation -------

// // innermost element
// const box1 = document.getElementById('box-1')
// box1.addEventListener('click', () => {
//   console.log('clicked on box1');
// })

// // outer element
// const container = document.getElementById('container')
// container.addEventListener('click', () => {
//   console.log('clicked on container');
// })

// -------- when using capture propagation ---------

// innermost element
const box1 = document.getElementById('box-1')
box1.addEventListener('click', () => {
  console.log('clicked on box1');
})

// outer element
const container = document.getElementById('container')
container.addEventListener('click', () => {
  console.log('clicked on container');
}, true)