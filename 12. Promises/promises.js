// PROMISES



// 1. Constructing a Promise Object
// eg.1
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);


// eg.2 Executor function in a Promise constructor:
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!');
  }
}
const myFirstPromise = new Promise(executorFunction);


// ex.
const inventory = {
  sunglasses: 1600,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {resolve('Sunglasses order processed.')} else {reject('That item is sold out.')}
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);
// Execute in terminal 'node app.js'



// 2. The Node setTimeout() Function

// eg.1 setTimeout() has two parameters: a callback function and a delay in milliseconds.

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);


// eg.2 Let's look at how we'll be using setTimeout() to construct asynchronous promises:

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();
// In the example code, we invoked returnPromiseFunction() which returned a promise. We assigned that promise to the variable prom. Similar to the asynchronous promises you may encounter in production, prom will initially have a status of pending.


// ex.
console.log("This is the first line code in app.js.");


const usingSTO = () => {
  console.log("Hello world");
};

setTimeout(usingSTO, 1000);

console.log("This is the last line of code in app.js.");
// Displays "This is First line..." & "This is last line...". Then displays Hello world 1.5s after.



// 3. The onFulfilled and onRejected Functions

// eg.1
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'


// eg.2
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);


// Ex.
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolved) => {
  console.log(resolved);
};

const handleFailure = (rejected) => {
  console.log(rejected);
};

checkInventory(order).then(handleSuccess, handleFailure);



// 4. Using catch() with Promises

// eg.1
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });

// eg.2
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

  // Ex.
  const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolved) => {
  console.log(resolved);
};

const handleFailure = (rejected) => {
  console.log(rejected);
};

checkInventory(order)
 .then(handleSuccess)
  .catch(handleFailure);



// 5. Chaining Multiple Promises

// eg.1
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});

// ex.
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});



// 6. Avoiding Common Mistakes

Mistake 1: Nesting promises instead of chaining them. Instead of having a clean chain of promises, we've nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!
Mistake 2: Forgetting to return a promise. Since forgetting to return our promise won't throw an error, this can be a really tricky thing to debug!

// ex.
// Incorrect version:
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });


// Correct version:
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
.then((resolvedValueArray) => {
return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
console.log(successMessage);
});



// 7. Using Promise.all()
// eg.
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });



  // REVIEW
You've learned a ton about asynchronous JavaScript and promises. Let's review:

-Promises are JavaScript objects that represent the eventual result of an asynchronous operation.

-Promises can be in one of three states: pending, resolved, or rejected.

-A promise is settled if it is either resolved or rejected.

-We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.

-setTimeout() is a Node function which delays the execution of a callback function using the event-loop.

-We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.

-We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.

-Promise composition enables us to write complex, asynchronous code that's still readable. We do this by chaining multiple .then()'s and .catch()'s.

-To use promise composition correctly, we have to remember to return promises constructed within a .then().

-We should chain multiple promises rather than nesting them.

-To take advantage of concurrency, we can use Promise.all().
