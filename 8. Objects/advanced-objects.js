ADVANCED OBJECTS
// Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#

// Introduction

const robot = {
  model: 'B-4MI',
  mobile: true,
  greetMaster() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}



// Exercise:
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}`);
  }
};

console.log(robot.provideInfo())



// Arrow functions and .this

// Avoid using Arrow funtions when using .this in a method
// eg
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined


// Exercise:
// Refactor the Method to use function instead of arrow function
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();



// Privacy

// eg
const bankAccount = {
  _amount: 1000
}

bankAccount._amount = 1000000;

// Exercise:
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge(); // Output: 'Recharged! Energy is currently at high30%.'



// Getters

// eg.
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method:
person.fullName; // 'John Doe'


// Exercise:
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number'){
      return (`My current energy level is ${this._energyLevel}`)
    } else {
      return ('System malfunction: cannot retrieve energy level')
    }
  }
};

console.log(robot.energyLevel);



// Setters

// eg.
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

// eg.
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age


// Exercise:
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);



// Factory Functions

// eg.
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

// Exercise:
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep(); // Displays 'Beep Boop' in console
console.log(tinCan.model); // Displays P-500
console.log(tinCan.mobile); // Displays true

const r2d2 = robotFactory('R2D2', false);
r2d2.beep();
console.log(r2d2.model);
console.log(r2d2.mobile);



// Propety Value Shorthand

// Destructuring
const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age
  }
};

// ^^^Is the same as vvv
const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};



// Destructured Assignments

// eg.
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// eg.
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'

// Exercise
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
console.log(functionality); // Prints beep() and fireLaser() functions

functionality.beep(); // Prints Beep Boop



// Built in Object Methods: Object.keys(), Object.entries(), Object.assign()

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);



// REVIEW

The object that a method belongs to is called the calling object.

The this keyword refers the calling object and can be used to access properties of the calling object.

Methods do not automatically have access to other internal properties of the calling object.

The value of this depends on where the this is being accessed from.

We cannot use arrow functions as methods if we want to access other internal properties.

JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.

The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.

Setters and getter methods allow for more detailed ways of accessing and assigning properties.

Factory functions allow us to create object instances quickly and repeatedly.

There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

As with any concept, it is a good skill to learn how to use the documentation with objects!
