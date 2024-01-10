


let score = JSON.parse(localStorage.getItem('myscore'))||{
  win: 0,
  draw: 0,
  lose: 0
};
let allTimeScore = JSON.parse(localStorage.getItem('allTimeScore')) || {
  win : 0,
  draw : 0,
  lose : 0
};

function playGame(playermove){
  if (score.win < 20 && score.lose < 20 && score.draw < 20){
    
  const computerPick = pickComputerMove();

// compare computer and player move to generate result
  let result = '';
  if (playermove === 'scissors'){

    if (computerPick === 'rock'){
    result = 'you lose';
    } else if (computerPick === 'paper'){
    result = 'you win';
    } else if (computerPick === 'scissors'){
    result = 'you tie';
    };

  }else if (playermove === 'paper'){
    if (computerPick === 'rock'){
    result = 'you win';
    } else if (computerPick === 'paper'){
    result = 'you tie';
    } else if (computerPick === 'scissors'){
    result = 'you lose';
    };

  } else if (playermove === 'rock'){
    if (computerPick === 'rock'){
    result = 'you tie';
  } else if (computerPick === 'paper'){
    result = 'you lose';
  } else if (computerPick === 'scissors'){
    result = 'you win';
  };
  }

  // checking to determine score

  if (result === 'you win'){
      score.win++;
  }else if (result === 'you lose'){
      score.lose++;
  }else if (result === 'you tie'){
      score.draw++;
  }

  localStorage.setItem('myscore',JSON.stringify(score));
  
  showScore();
  document.querySelector('h1').innerHTML = result;
  if (score.lose <= 20 && score.win <= 20 && score.draw <= 20){
    resultStyling(result);

    //this code shows player and computer moves
    moves = gameMoves();
    moves.innerHTML = `
    <span class="player">You</span>
    <img src="icons/${playermove}-emoji.png" alt="" class="moves-img player-move">
    <img src="icons/${computerPick}-emoji.png" alt="" class="moves-img">
    Computer`;
  };

  
// function to generate computer move
  function pickComputerMove(){
  let computerPick = '';
  const randomNunber = Math.random();
  if (randomNunber >= 0 && randomNunber <= 1 / 3) {
    computerPick = 'rock';
  } else if (randomNunber >= 1 / 3 &&
  randomNunber < 2 / 3){
    computerPick = 'paper';
  } else if ( randomNunber >= 2 / 3 &&
  randomNunber < 1){
    computerPick = 'scissors';
  }
  return computerPick;
  
};

gameResult(result);
overallScore();
displayOverallScore();
localStorage.setItem('allTimeScore', JSON.stringify(allTimeScore))
  }
  playAgain()
}

// function to add styling to the result displayed
function resultStyling(result) {
  if (result === 'you win'){
    document.querySelector('h1').style.color = 'green';
  }else if (result == 'you tie'){
    document.querySelector('h1').style.color = 'yellow';
  }else{
    document.querySelector('h1').style.color = 'red';
  }
}

// function to display the outcomes of the game
function gameResult(result) {
  score.win === 20 ? document.querySelector('h1').innerHTML =`Congratulations,You won the game.`:
   score.lose === 20 ?document.querySelector('h1').innerHTML = 'You lose the game' :
    score.draw === 20 ? document.querySelector('h1').innerHTML = 'You draw the game' :
      document.querySelector('h1').innerHTML = result;

};

function playAgain() {
  if(score.win === 20 || score.lose === 20 || score.draw === 20) {
    document.querySelector('.play-again-message').innerHTML = 'Click reset score to play again';
    document.querySelector('.direction').innerHTML = '';

  }
}

// function to reset the score
 function resetScore(){
  score.win = 0;
  score.lose = 0;
  score.draw = 0;
  moves = gameMoves();
  moves.innerHTML = '';
  document.querySelector('h1').innerHTML = '';
  document.querySelector('.play-again-message').innerHTML = '';
  document.querySelector('.direction').innerHTML = 'Pick a move';
  showScore();
  localStorage.removeItem('myscore');
}

// function to display game score
function showScore(){
  document.querySelector('.score-w').innerHTML = score.win;
  document.querySelector('.score-l').innerHTML = score.lose;
  document.querySelector('.score-d').innerHTML = score.draw;
}


function gameMoves(){
  let moves = document.querySelector('.game-moves') ;
  return moves
}
//function to determine overall score
function overallScore(){
  if (score.win === 20){
    allTimeScore.win++;
  }else if (score.draw === 20){
    allTimeScore.draw++;
  }else if(score.lose === 20){
    allTimeScore.lose++;
  };
}
//code to display overall score on the web page
function displayOverallScore(){
  document.querySelector('.overall-wins').innerHTML = allTimeScore.win;
  document.querySelector('.overall-draws').innerHTML = allTimeScore.draw;
  document.querySelector('.overall-loses').innerHTML = allTimeScore.lose;
};


/* Coin flip game scripts*/


let gameScore = JSON.parse(localStorage.getItem('mycoinGame')) || {
  wins : 0,
  loses : 0,
}  

function playCoinFlip(guess){
  let result = '';
  let computerFlip = guessComputer();
  function guessComputer(){
  let computerFlip = '';
  const flip = Math.random();
  computerFlip = flip < 0.5 ? 'Head' : 'Tail' ;

  return computerFlip;
}
result = guess === computerFlip ? gameScore.wins++ : gameScore.loses ++ ;
document.querySelector('p').innerHTML = `wins: ${gameScore.wins}, loses: ${gameScore.loses}`;
document.querySelector('h2').innerHTML = computerFlip;
guess === computerFlip ? document.querySelector('h2').style.color = 'green' : document.querySelector('h2').style.color = 'red' ;
localStorage.setItem('mycoinGame',JSON.stringify(gameScore));
if (gameScore.wins === 20){
  document.querySelector('.outcome').innerHTML = 'YOU WIN!!';
  removeCoinGameScore();
}else if (gameScore.loses === 20){
  document.querySelector('.outcome').innerHTML = 'YOU LOSE!!';
  removeCoinGameScore();
};
};

function removeCoinGameScore(){
  localStorage.removeItem('mycoinGame');
    gameScore.wins =  0,
    gameScore.loses = 0
  document.querySelector('p').innerHTML = `wins : ${gameScore.wins}, loses: ${gameScore.loses}`;
};

function clearOutcome(){
  document.querySelector('.outcome').innerHTML = '';
}





