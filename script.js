let randomNumber = Math.floor(Math.random() * 101);
let guessCount = 1;

const form = document.querySelector('.guessingForm');
const pGuess = document.querySelector('.pGuess');
const result = document.querySelector('.result');
const txtField = document.querySelector('#numGuess');

form.addEventListener('submit', e => {
    e.preventDefault();
    let userGuess = Number(numGuess.value);
    
    if(userGuess > randomNumber){
        result.innerText = 'WRONG, that guess was too BIG!';
        result.setAttribute('class', 'tooBig');      
    } else{
        userGuess < randomNumber
        result.innerText = 'WRONG, that guess was too small';
        result.setAttribute('class', 'tooSmall');       
    } 
    
    if(userGuess === randomNumber){
        result.innerText = 'Congratulations!! You got it right!';
        result.setAttribute('class', 'justRight');       
        gameOver();
    } else if(guessCount === 10){
        result.innerText = '!!! TOO MANY ATTEMPTS, GAME OVER !!!';
        result.setAttribute('class', 'tooMany')
        gameOver();
    };

 
    guessCount ++;
    console.log(guessCount);
    if(guessCount === 1){
        pGuess.textContent = 'Previous guesses:  ' + userGuess;
    }else{
        pGuess.textContent += `  ${userGuess}`
    }

    numGuess.value = '';
});

const resetButton = document.getElementById('resetButton');

function gameOver(){
    txtField.disabled = true;
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.fontSize = "x-large";
    resetButton.addEventListener('click', resetGame);
    document.body.appendChild(resetButton);
    resetButton.focus();
};


function resetGame() {
    let resetButton = document.querySelector('button');
    resetButton.parentNode.removeChild(resetButton);
    count = 1;
    pGuess.innerText = '';
    result.innerText = '';
    txtField.disabled = false;
    document.getElementById('numGuess').value = "";
    result.classList.remove("justRight", "tooMany", "tooBig", "tooSmall");
    document.getElementById('numGuess').focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }