// ASYNC AWAIT

// 1. The async Keyword ==================================

// eg.1
async function myFunc() {
  // Function body here
};

myFunc();

// eg.2
const myFunc = async () => {
  // Function body here
};

myFunc();

// ex.
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// Write your code below:
async function withAsync(num){
  if (num === 0){
    return ('zero');
  } else {
    return ('not zero');
  }
}

// Leave this commented out until step 3:

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})




// 2. The await Operator ==================================

// eg.
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!


// ex.
const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`);
  }

announceDinner();



// 3. Writing async Functions =============================

// eg.1
// We're going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

// Part 2: Now we'll write two async functions which invoke myPromise():

async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}



// Ex.
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();



// 4. Handling Dependent Promises =============================

// eg.
// With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:

function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}

// Here's how we'd write an async function to accomplish the same thing:

async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
}

// ex.
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans(){
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
};

makeBeans();



// 5. Handling Errors ====================================

// When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging.
// With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!
//eg.
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}

usingTryCatch();

// Remember, since async functions return promises we can still use native promise's .catch() with an async function

async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
This is sometimes used in the global scope to catch final errors in complex code.


// ex.
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!')
  };
};

hostDinnerParty();



// 6. Handling Independent Promises ============================

// eg.
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}

async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}

// In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.
// In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.


// ex.
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinner() {
 let vegetablePromise = steamBroccoli();
 let starchPromise = cookRice();
 let proteinPromise = bakeChicken();
 let sidePromise = cookBeans();
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner()



// 7. Await Promise.all() ========================================
// eg.
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]);
  }
};

// ex.
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}

serveDinnerAgain()




// Review

-async...await is syntactic sugar built on native JavaScript promises and generators.
-We declare an async function with the keyword async.
-Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
-await returns the resolved value of the awaited promise.
-We can write multiple await statements to produce code that reads like synchronous code.
-We use try...catch statements within our async functions for error handling.
-We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
