HIGHER-ORDER FUNCTIONS


// Functions As Data

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};


const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!



// Exercise:

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2(); // Invokes checkThatTwo...

console.log(is2p2.name); // Calls original name



// Function As Parameters

const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

//

timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});


// Exercise:

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    	return firstTry;
  } else {
    return 'This function returned inconsistent results';
  }
};

checkConsistentOutput(addTwo, 5);



// REVIEW

Abstraction allows us to write complicated code in a way that's easy to reuse, debug, and understand for human readers

We can work with functions the same way we would any other type of data including reassigning them to new variables

JavaScript functions are first-class objects, so they have properties and methods like any object

Functions can be passed into other functions as parameters

A higher-order function is a function that either accepts functions as parameters, returns a function, or both
