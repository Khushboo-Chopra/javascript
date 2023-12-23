// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// //addTwoNumbers(3,4);
// const result = addTwoNumbers(3,4);
// //console.log(result); -> this shows undefined

function addTwoNumbers(number1, number2) {
  //let result = number1 + number2;
  //return result;
  return number1+number2;
}

const result = addTwoNumbers(3, 4);
console.log("Result: " ,result);

function loginUsername(username="sam"){ //default value
    if(username===undefined || !username){
        console.log("please enter username");
    }
    return `${username} just logged in...`
}
console.log(loginUsername());

//rest operator -> jitna bhi item h khule m mil rha h, isko bundle m pack kro aur de do -> convert to array
function calculateCartPrice (...num1){
return num1;
}

console.log(calculateCartPrice(200,300,400));

//paas object into a function
const user = {
    username:"khushi",
    price:999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

const myArr = [10,20,30,40];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myArr));