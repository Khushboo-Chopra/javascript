//we can create an object by 2 types -> literals and constructor. constructor -> singleton

//Object.create(); //constructor method

const mySym = Symbol("key1"); // defined a symbol

//object literals
const jsUsers = {
  name: "Khushboo",
  "full name": "Khushboo Chopra",
  [mySym]: "key1",
  age: 18,
  location: "haryana",
  email: "khushi@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUsers);
console.log(jsUsers.email);
console.log(jsUsers["email"]);
console.log(jsUsers["full name"]);
console.log(typeof jsUsers[mySym]);// right way to access the symbol

jsUsers.age = 23; // change the value
//freeze -> helps to freeze the value, will unable to change this
//Object.freeze(jsUsers);
jsUsers.age = 19;
console.log(jsUsers.age); // age will not get change due to freeze

jsUsers.greeting = function() {
    console.log("hello js user");
}

console.log(jsUsers.greeting); //[Function(anonymous)]
console.log(jsUsers.greeting());

jsUsers.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUsers.greeting2());
