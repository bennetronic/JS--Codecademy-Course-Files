// LOOPS

// Repeating Tasks Manually

let vacationSpots = ['New York', 'Thailand', 'Melbourne'];

console.log(vacationSpots[0], vacationSpots[1], vacationSpots[2]);
//console.log(vacationSpots[1]);
//console.log(vacationSpots[2]);



// The For Loop

//Eg.
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
};
// Output
0
1
2
3

// Exercise:
// Write your code below

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
};
// Output
5
6
7
8
9
10



// Looping in Reverse

// Exercise: The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter)
};



// Looping through Arrays

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
};
// Output
Grizzly Bear
Sloth
Sea Lion

//Exercise:
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
};



// Nested Loops

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// Exercise:
const bobsFollowers = ['Bill', 'Ted', 'Dave', 'Mike'];
const tinasFollowers = ['Bill', 'Ted', 'Johnny'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};



// While Loops

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// Exercise:

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



// Do...While statements

// eg.1
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);


// eg.2
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};


// Exercise
const cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);


// The Break keyword

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
// prints:
Banana.
Banana.
Banana.
Orange you glad I broke out the loop!


// Exercise
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");


// REVIEW

- Loops perform repetitive actions so we don’t have to code that process manually every time.

- How to write for loops with an iterator variable that increments or decrements

- How to use a for loop to iterate through an array

- A nested for loop is a loop inside another loop

- while loops allow for different types of stopping conditions

- Stopping conditions are crucial for avoiding infinite loops.

- do...while loops run code at least once— only checking the stopping condition after the first execution

- The break keyword allows programs to leave a loop during the execution of its block
