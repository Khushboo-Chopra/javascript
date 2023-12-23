//js arrays are resizable
//array copy opeartions create shallow copies -> have same reference

const myArray = [0,1,2,3,4,5];
const myHeroes = ["shaktiman","spiderman"];

const myArr2 = new Array(1,2,3,4);
console.log(myArray[1]);
console.log(myArr2);

//array methods
myArray.push(6); //adds the value inside array
myArray.pop(); // removes last value
myArray.unshift(1); //adds new value at first
myArray.shift(); //removes first element
console.log(myArray);
console.log(myArray.includes(5));
console.log(myArray.indexOf(5));
const newArr = myArray.join(); //adds all elements of an array to string
console.log(newArr);
console.log(typeof newArr);

//slice,splice
console.log("A ",myArray);
const myyArr = myArray.slice(1,3);
console.log(myyArr);
console.log("B ",myArray); // in slice the original array remains same

console.log("C ",myArray);
const myyArr2 = myArray.splice(1,3);
console.log(myyArr2);
console.log("D ",myArray); // in splice the original array get changed