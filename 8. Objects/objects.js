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



// Nested Objects

// Exercise:
let spaceship = {
  passengers: [ {name: 'Space Rabbit'}, {name: 'Space Dog'}, {name: 'Space Cat'} ] ,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    back-up: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];
//console.log(firstPassenger); // Returns 'Space Rabbit'



// Pass By Reference

// eg.1
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'


//eg.2

let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false,
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified : false,
  'transport type': 'flying'
}; // Regular reassignment still works.

// Exercise:

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)



// Looping Through Objects

let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}



// // REVIEW:

- Objects store collections of key-value pairs.

- Each key-value pair is a property—when a property is a function it is known as a method.

- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.

- You can access, add or edit a property within an object by using dot notation or bracket notation.

- We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.

- We can navigate complex, nested objects by chaining operators.

- Objects are mutable—we can change their properties even when they're declared with const.

- Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.

- We can iterate through objects using the For...in syntax.
