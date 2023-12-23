//constructor method -> singleton object
const tinderUser = new Object();
//const tinderUser = {}; -> both are same
tinderUser.id = "123abc";
tinderUser.name = "Khushboo";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularuser = {
  email: "",
  fullname: {
    userFullName: {
      firstName: "Khushboo",
      lastName: "Chopra",
    },
  },
};

//console.log(regularuser.fullname.userFullName.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//merge to objects

//const obj3 = {obj1,obj2};
//const obj3 = Object.assign(obj1,obj2);
//const obj3 = Object.assign({},obj1,obj2);

//spread operator
const obj3 = {...obj1,...obj2};

console.log(obj3);

const users = [
    {
        id:1,
        email:"k@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    }
];

console.log(users[1].email);
console.log(Object.keys(tinderUser)); // returns an array
console.log(Object.values(tinderUser)); // returns an array
console.log(Object.entries(tinderUser)); // returns an array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object destructuring and json api
const course = {
  coursename:"js in hindi",
  price:"999",
  courseInstructor : "hitesh"
}

//course.courseInstructor;

const {courseInstructor:teacher} = course; // destructuring of an object
console.log(teacher);