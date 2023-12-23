//for of loop

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
    console.log(greet);
}

//maps
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
map.set('IN',"India"); //can't set same value again,known for uniqueness


//console.log(map);

for (const [key,value] of map) { //destructuring of an array
  console.log(key,':- ',value);  
}

//for-in loop doesn't work on map, bcoz maps are not iterable
