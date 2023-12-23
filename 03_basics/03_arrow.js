const user = {
    username:"khushboo",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this); // this represents current context
    }
}
// user.welcomeMessage();
// user.username = "Lavya";
// user.welcomeMessage();
//console.log(this); -> gives an empty object {}

//function chai(){
    //let username = "khushi"
    //console.log(this);
   // console.log(this.username); -> shows undefined
//}
const chai = ()=>{
let username = "khushboo";
console.log(this.username);
}

chai()

//const addTwo = (num1,num2)=>num1+num2;
const addTwo = (num1,num2)=>(num1+num2);
//const addTwo = (num1,num2)=>({name:"Khushi"}); -> returns an object

console.log(addTwo(5,6));