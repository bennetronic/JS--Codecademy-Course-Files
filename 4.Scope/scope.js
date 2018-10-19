// BLOCKS AND SCOPE

// Block of Code as a Function
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

// Block as if statement
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
};


const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());


// GLOBAL SCOPE

const color = 'blue' //Variable outside block.

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue


// Exercise:
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite +', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());


// BLOCK SCOPE

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError


// Exercise:
  const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();


// SCOPE POLLUTION

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

// Exercise:
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)


// PRACTICE GOOD SCOPING

// Block scoping within if block
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

console.log(color); // ReferenceError


// Exercise:
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
     let lightWaves = 'Northern Lights';
   console.log(lightWaves)  
  }
   console.log(lightWaves);
};

logVisibleLightWaves();

/*
Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.

Blocks are statements that exist within curly braces {}.

Global scope refers to the context within which variables are accessible to every part of the program.

Global variables are variables that exist within global scope.

Block scope refers to the context within which variables that are accessible only within the block they are defined.

Local variables are variables that exist within block scope.

Global namespace is the space in our code that contains globally scoped information.

Scope pollution is when too many variables exist in a namespace or variable names are reused.
 */







