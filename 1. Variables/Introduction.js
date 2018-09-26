// INTRODUCTION TO JAVASCRIPT


// Console

console.log(32);
console.log(8);


// Comments

//opening line
console.log('It was love at first sight.');

/* console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/


// Data Types

console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)


// Arithmetic Operators

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3

console.log(32 + 3.5);
console.log(2018-1969);
console.log(65 / 240);
console.log(0.2708 * 100);


// String Concatenation

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'

console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'


console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'


//Properties

console.log('Hello'.length); // Prints 5

console.log('Teaching the world how to code'.length);



// Methods

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());


// Built-in Objects

console.log(Math.random()); // Prints a random number between 0 and 1

Math.random() * 50;

Math.floor(Math.random() * 50);

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


// REVIEW

/* Data is printed, or logged, to the console, a panel that displays messages, with console.log().

You can write single-line comments with // and multi-line comments between /* and */.	/*

There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.

Numbers are any number without quotes: 23.8879

Strings are characters wrapped in single or double quotes: 'Sample String'

The built-in arithmetic operators include +, -, *, /, and %.

Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.

Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().

We can access properties and methods by using the ., dot operator.

Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
*/


var myName = 'James';
var myCity = 'London';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// typeOf Operator

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

// Review Variables

let favouriteCake = 'chocolate';
favouriteCake = 'victoria';
favouriteCake = 'cheese cake';

var favouriteTopping = 'cream';
favouriteTopping = 'jam';

let age = 5;
age = 6;

console.log(`My favourite cake is ${favouriteCake}. My favourite topping is ${favouriteTopping}. My age is ${age}.`)

/*console.log(test1);
const test1 = 'figuring out quirks';*/

console.log(typeof 'favouriteCake');

console.log(typeof `${favouriteCake} and ${age}`)








