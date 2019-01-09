// INTERMEDIATE JAVASCRIPT MODULES



// 1. module.exports

// Eg.
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;

1. let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.
2. Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
3. "Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
4. module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.


// Ex.
let Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;



// 2. require()

// Eg.
const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();


1. In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. We can set this variable to any variable name we like, such as menuItems.
2. require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.
3. './menu.js' is the argument we pass to the require() function.
4. The placeOrder() function then uses the Menu module in its function definition. By calling Menu.specialty, we access the property specialty defined in the Menu module.
5. We can then invoke the function using placeOrder()


// Ex.
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();



// 3. module.exports II

// Eg.
let Menu = {};

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  }
};

1. module.exports exposes the current module as an object.
2. specialty and getSpecialty are properties on the object.

// Then in order.js, we write:
const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
// Here we can still access the behavior in the Menu module.


// Ex.
// 2-airplane.js page
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
// 2-missionControl.js page
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());



// 4. Export Default

let Menu = {};

export default Menu; // export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.


// Ex.
let Airplane = {};

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
  },
  {name: 'SkyJet',
    fuelCapacity: 500
  }
];

export default Airplane;



// 5. import

// Eg.
import Menu from './menu';

// Ex.
import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

// 6. Named Exports

// Eg.
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};

export { specialty, isVegetarian };


// Ex.
let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  {name: 'SkyJet',
    fuelCapacity: 500,
   availableStaff: ['pilots', 'flightAttendants']
  }
];

let flightRequirements = {
  requiredStaff: 4
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
     return true;
  } else {
       return false;
     }
};

export {availableAirplanes, flightRequirements, meetsStaffRequirements};

// 7. Named Imports

// Eg.
import { specialty, isVegetarian } from './menu';

console.log(specialty);

// Ex.
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();



// 8. Export Named Exports


// eg.
export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};

1. The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
2. We no longer need an export statement at the bottom of our file, since this behavior is handled above.


// Ex.
export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300,
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200,
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};



// 9. Import names Variables

// Eg.
import { specialty, isVegetarian } from 'menu';

1. To import variables that are declared, we simply use the original syntax that describes the variable name. In other words, exporting upon declaration does not have an impact on how we import the variables.

// Ex.
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();



// 10. Export as

// Eg.
let specialty = '';
let isVegetarian = function() {
};
let isLowSodium = function() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
In the above example, take a look at the export statement at the bottom of the of the file.

1. The as keyword allows us to give a variable name an alias as demonstrated in specialty as chefsSpecial and isVegetarian as isVeg.
2. Since we did not give isLowSodium an alias, it will maintain its original name.


// Ex.
let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300,
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200,
}];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};

export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};



// 11. Import as

// Eg.
import { chefsSpecial, isVeg } from './menu';

1. We import chefsSpecial and isVeg from the Menu object.
2. Here, note that we have an option to alias an object that was not previously aliased when exported.
3. For example, the isLowSodium object that we exported could be aliased with the as keyword when imported: import {isLowSodium as saltFree} from 'Menu';


// Another way of using aliases is to import the entire module as an alias:

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();

1. This allows us to import an entire module from menu.js as an alias Carte.
2. In this example, whatever name we exported would be available to us as properties of that module. For example, if we exported the aliases chefsSpecial and isVeg, these would be available to us. If we did not give an alias to isLowSodium, we would call it as defined on the Carte module.


// Ex.
import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
}

displayStaffStatus();

function meetsSpeedRangeReqs() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();



// 12. Combining Export Statements

// Eg.1
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

1.Here we use the keyword export to export the named exports at the bottom of the file. Meanwhile, we export the isGlutenFree variable using the export default syntax.
2. This would also work if we exported most of the variables as declared and exported others with the export default syntax.

// Eg.2
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
};
export let isLowSodium = function() {
};
let isGlutenFree = function() {
};

export default isGlutenFree;

1. Here we use the export keyword to export the variables upon declaration, and again export the isGlutenFree variable using the export default syntax
2. While it's better to avoid combining two methods of exporting, it is useful on occasion. For example, if you suspect developers may only be interested in importing a specific function and won't need to import the entire default export.


// Ex.
export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300,
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200,
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};

export default meetsSpeedRangeRequirements;

export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};



// 12. Combining Import Statements

// Eg.
import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';


// Ex.
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function meetsSpeedRangeRequirements() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();



// 13. REVIEW

Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program.

1. module.exports exports the module for use in another program.
2. require() imports the module for use in the current program.

ES6 introduced a more flexible, easier syntax to export modules:

1. default exports use export default to export JavaScript objects, functions, and primitive data types.
2. named exports use the export keyword to export data in variables.
3. named exports can be aliased with the as keyword.
4. import is a keyword that imports any object, function, or data type.
