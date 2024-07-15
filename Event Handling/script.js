// ----------------------------------- event handlers -------------------------------

// mouse event 
// function myFunction() {
//   console.log("Box1 clicked");
// }

const mouseOver = () => {
  console.log('mouse over in box2');
}

const mouseMove = () => {
  console.log('mouse moved in box3');
}

// keyboard events
function keyPressEvent() {
  console.log('key was pressed');
}

function keyUpEvent() {
  console.log('key up was pressed');
}

function keyDownEvent() {
  console.log('key down was pressed');
}

// ----------------------------------- event Listeners -------------------------------

// box-1 click access with javascript only 
const box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
  console.log('box1 is clicked, used event listener, Event 1');
})

// we can handle multiple onclick events here
box1.addEventListener('click', () => {
  console.log('box1 is clicked, used event listener, Event 2');
})

// We can get all details about an Event triggered with -> 'e' or 'event' parameter in function declaration
box1.addEventListener('click', (e) => {
  console.log('box1 click event details', e); // see all the events list and grab event as per requirement
})

// get cursor's location on screen with event-details
box1.addEventListener('mousemove', (e) => {
  console.log('cursor in box 1 is at (x,y) =', e.clientX, ',', e.clientY);
})

// key details with event (Note: it only reflect the keys like alphanumerics Not the up-down or ctrl)
let nameInput = document.getElementById('nameInput');
nameInput = addEventListener('keypress', (e) => {
  console.log('key pressed is (', e.key, ')');
})

// to get details each and every keyboard key pressed use -> 'keydown' event listener
nameInput = addEventListener('keydown', (e) => {
  console.log('key pressed is (', e.key, ')');
})

// 'focus' event listener -> to see its properties
nameInput = addEventListener('focus', (e) => {
  console.log('user focus event', e);
})
