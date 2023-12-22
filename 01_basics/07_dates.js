let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23); //month starts from zero
console.log(myCreatedDate.toDateString());

let myCurrentDate = new Date(2023, 0, 23,5,3); //month starts from zero
console.log(myCurrentDate.toLocaleString());

//const today = new Date("2023-01-14");
const today = new Date("01-14-2023");
console.log(today.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCurrentDate.getTime());
console.log(Math.floor(Date.now()/1000)); // convert into seconds

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

