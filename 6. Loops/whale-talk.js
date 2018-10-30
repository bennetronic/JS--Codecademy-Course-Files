let input = 'A whale of a deal';
input = input.toLowerCase();

console.log("LENGTH OF STRING", input.length);

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log('inputIndex is ' + inputIndex);

  for (vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    // console.log('vowelIndex is ' + vowelIndex);

    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }

  if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
    }

   if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
    }
}

console.log(resultArray.join('').toUpperCase());
