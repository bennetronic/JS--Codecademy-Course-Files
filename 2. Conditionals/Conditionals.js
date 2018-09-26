// if Statements

if (true) {
  console.log('This message will print!'); 
} 
// Prints "This message will print!"

let sale = true;
sale = false;

if(sale) {
  console.log('Time to buy!');
}



// if...else Statements

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints "But the code in this block will!"


let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}



// Comparison Operators

10 < 12 // Evaluates to true

'apples' === 'oranges' // false


let hungerLevel = 7;

if(hungerLevel >= 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}



// Logical Operators

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}


if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}


let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true


let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}



//  Truthy and Falsy

let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}


let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'


let wordCount = 10;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}



// Truthy and Falsy Assignment

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

// Or shorthand...

let defaultName = username || 'Stranger';

// ---------------------------

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);



// Ternary Operator

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}


isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


// Long hand...

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}


// Short Hand.....

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!')
: console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



// Else if statements

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}































