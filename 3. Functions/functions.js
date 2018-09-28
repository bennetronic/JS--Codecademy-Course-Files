// Functions

const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60


// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;



// Function Declarations

function getReminder() {
  console.log('Water the plants.')
}

function greetInSpanish() {
  console.log('Buenas Tardes')
}



// Calling a function

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.')
}

sayThanks();
sayThanks();
sayThanks();



// Parameters and Arguments

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');



// Default Parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}



// Return

function rectangleArea(width, height) {
  let area = width * height 
}
console.log(rectangleArea(5, 7)) // Prints undefined




function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}



function monitorCount(rows, columns){
  return(rows * columns);
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);



// Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return(monitorCount(rows, columns) * 200);
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

















