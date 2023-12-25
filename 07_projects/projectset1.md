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