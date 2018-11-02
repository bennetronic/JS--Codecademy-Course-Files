// OBJECTS


// Creating Object Literals

let spaceship = {}; // spaceship is an empty object


// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

// fasterShip object literal
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};



// Accessing Properties

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

spaceship.favoriteIcecream; // Returns undefined


// Exercise:
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
// console.log(crewCount);


let planetArray = spaceship.flightPath;
// console.log(planetArray);



// Bracket Notation

['A', 'B', 'C'][0]; // Returns 'A'

// Eg.
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// Eg.
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// Exercise:
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['propName'];

console.log(spaceship[propName]);



// Property Assignment

// eg 1
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// eg 2
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property

// Exercise
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold'; // Update color

spaceship.numEngines = 9; // Add numEngines property

delete spaceship['Secret Mission'];



// Methods

// Syntax:
let objectName = {
  methodName() {
    console.log('The methodName method was invoked!')
  }
};
// ---
let objectName = {
  methodName() {
    console.log('The methodName method was invoked!')
  },
  secondMethodName() {
     console.log('The secondMethodName method was invoked!')
}
};

// eg
const alienShip = {
  invade: function () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

const alienShip = {
  invade () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


// Exercise
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
  	console.log('Spim... Borp... Glix... Blastoff!')
	}
};

alienShip.retreat();
alienShip.takeOff();
