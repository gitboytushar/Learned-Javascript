// DOM manipulation -> Access and modify html elements

// ------------------------------------ Access html elements -------------------------------

// demo
// const myBody = document.body
// // myBody.style.backgroundColor = "red";
// console.log(myBody)

// // method 1
// const box2 = document.getElementById('box-2')
// console.log(box2)

// // method 3
// const divs = document.getElementsByTagName('div')
// console.log(divs)

// // method 4
// const boxes = document.getElementsByClassName('box')
// console.log(boxes)

// // method 5
// const random = document.querySelector('.container .random') // return single element
// console.log(random)
// const random2 = document.querySelectorAll('.container .random') // returns array of all .<stylesClassNamesCSS>
// console.log(random2)


// ----------------------------------- Modifying html elements ------------------------------

// ------ example implementation

// accessing html element
const box1 = document.getElementById("box-1");
// modifying html content
box1.innerHTML = "<h1>Hello</h1>";
// modifying attribute value
box1.style.backgroundColor = "lightgreen";
// modifying class
box1.classList.add("rounded-borders");

// modifying multiple classes at once with for loop
const boxes = document.getElementsByClassName('box');
for (let i = 2; i < boxes.length; i++) {
  boxes[i].classList.add('rounded-borders');
}

// remove a class from the html element
const box4 = document.getElementById('box-4');
box4.classList.remove('rounded-borders')


// --------------------------- Adding completely New HTML Element -------------------------

// create new element
const newParagraph = document.createElement('p');
// put some content into the new element
newParagraph.innerText = "This a brand new";
// access the element in which we want to append this new element
const container = document.getElementById('container');
// append this new element to it
container.append(newParagraph);

// now give 'box' class to the newParagraph element
newParagraph.classList.add('box');
// change the background color of new element
newParagraph.style.backgroundColor = "yellow";
