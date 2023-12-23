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