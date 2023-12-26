# Project related to DOM
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1 - Color Changer

```javascript
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function(button){
console.log(button)
button.addEventListener('click',function(e){
console.log(e);
console.log(e.target);
if(e.target.id === 'grey'){
  //body.style.backgroundColor = 'grey'
  body.style.backgroundColor = e.target.id;
}
else if(e.target.id === 'white'){
body.style.backgroundColor = 'white'
}
else if(e.target.id === 'blue'){
  body.style.backgroundColor = 'blue'
  }
  else if(e.target.id === 'yellow'){
    body.style.backgroundColor = 'yellow'
    }
})
})

```

## Project 2 - BMI Calculator

```javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
e.preventDefault();
//input value will be in string, so needs to convert to int
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height ==='' || height < 0 || isNaN(height)){
  results.innerHTML = `please give a valid height ${height}`
}
else if(weight ===''|| weight < 0 || isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`
}
else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2)
  //show the result
  results.innerHTML = `<span> ${bmi} </span>`
}
})

```

## Project 3 - Digital Clock

```javascript
//const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

},1000)
```

## Project 4 - Guess The Number

```javascript
const randomNum = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validateGuess(guess);
  })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert('please enter a valid number');
}else if(guess<1){
  alert('please enter a number more than 1');
}else if(guess>100){
  alert('please enter a number less than 100');
}else{
  prevGuess.push(guess);
  //check if this is the last attempt
  if(numGuess === 11){
    displayGuess(guess);
    displayMessage(`Game Over. Random Number was ${randomNum}`);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
}

function checkGuess(guess){
  if(guess===randomNum){
    displayMessage(`You guessed it right`);
    endGame();
  }else if(guess<randomNum){
    displayMessage(`Number is TOOO low`);
  }else if(guess>randomNum){
    displayMessage(`Number is TOOO high`);
  }
}

function displayGuess(guess){
userInput.value = '';
guessSlot.innerHTML += `${guess} ,`;
numGuess++;
remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
  randomNum = parseInt(Math.random()*100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true;
})
}



```