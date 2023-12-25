# Project related to DOM
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1

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