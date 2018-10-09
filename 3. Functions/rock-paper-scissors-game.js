const getUserChoice = userInput => {/*'rock', 'paper', 'scissors', 'bomb';*/ 
	userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }                                     
};
/* Test:
*console.log(getUserChoice('Paper'));
*console.log(getUserChoice('fork'));
*/

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  	}
};

/*Test
*console.log(getComputerChoice());
*/

function determineWinner(userChoice, computerChoice) {
  if(userChoice === 'bomb'){
    return 'You win regardless!';
  }
  
  if(userChoice === computerChoice){
    return 'The game is a tie.';
  }
  
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer wins.';
    } else {
        return 'You win.';
      }
  };
  
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors'){
    	return 'Computer wins.';
    } else {
        return 'You win.';
      }
  };
  
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer wins.'; 
    } else {
      return 'You win.';
    }
  }
/* Test  
console.log(determineWinner('paper', 'scissors')); 
console.log(determineWinner('paper','paper')); */
};

const playGame = () => {
  	let userChoice = getUserChoice('scissors');
  	const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();








