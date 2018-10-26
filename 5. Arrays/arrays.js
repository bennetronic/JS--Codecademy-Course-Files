// ARRAYS

New Year's Resolutions:
1. Keep a journal 
2. Take a falconry class
3. Learn to juggle

// In JS, looks like this:

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];



// Array Literals []

const hobbies = ['Drumming', 'The gym', 'Cycling'];

console.log(hobbies);



// Accessing Elements within Arrays. Arrays in JavaScript are 'zero-indexed'.
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(famousSayings[0]); // 'Fortune...''
console.log(famousSayings[2]); // 'Where there...'
console.log(famousSayings[3]); // 'Undefined'



// Update Elements

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']


// Exercise:
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);



// Arrays with let and const

// Exercise:
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);



// The .length property

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2


// Exercise
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);



// The .push() Method

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


// Exercise
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('scrub toilet', 'eat cake');
console.log(chores);



// The .pop() Method

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2


// Exercise
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop('mop floor');
console.log(chores);



// More Array Methods:
// Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

groceryList.indexOf('pasta');
const pastaIndex = 'pasta';
console.log(pastaIndex);



// Change Array within Function

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


// Exercise:
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);



// Nested Arrays

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]

// eg.
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2


// Exercise:
const numberClusters = [[1, 2], [3, 4], [5, 6]];

// Access Element [6] in numberClusters
const target = numberClusters[2][1];





















