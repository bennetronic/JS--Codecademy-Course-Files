let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;

let runnerAge = 18;

if (runnerAge > 18 && earlyRegister) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log(`You will race at 9.30am. Your race number is ${raceNumber}.`);
} 
else if (runnerAge > 18 && !earlyRegister) {
  console.log(`You will race at 11am. Your race number is ${raceNumber}.`);
} 
else if (runnerAge < 18) {
  console.log(`You will race at 12.30pm. Your race number is ${raceNumber}.`);
} 
else {
  console.log('See the registration desk.');
}