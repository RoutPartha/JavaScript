const randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const LowOrHi=document.querySelector('.LoOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')


let prevGuess=[]
let numGuess=1
let playGame=true
if (playGame) {
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        
        validateGuess(guess);
    });   
}

function validateGuess(guess){
//it check the value is exist btw 1 and 100
if (isNaN(guess)) {
    alert('Please enter a valid Number');
    
}else if (guess<1) {
    alert('Please enter a Number more than One');
    
}else if (guess>100) {
    alert('Please enter a Number less Than 100');
    
} else {
    prevGuess.push(guess)
    if (numGuess===11) {
        displayGuess(guess)
        displayMessage(`game Over.Random number was ${randomNumber}`)
        endGame()
        
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
//check high or low
if(guess===randomNumber){
    displayMessage(`You Guessed it Right`);
    endGame();
}else if(guess<randomNumber){
    displayMessage(`Number is Tooo Low`);
}else if(guess>randomNumber){
    displayMessage(`Number is Too High `);
}
}

function displayGuess(guess){
//it will clean value for input new value and ubdate Previous guess and Remaining
     userInput.value=''
     guessSlot.innerHTML+=`${guess}  `;
     numGuess++;
     remaining.innerHTML=`${11-numGuess}, `;

}

function displayMessage(message){
LowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){

}
