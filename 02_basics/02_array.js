const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

//push
 marvel_heroes.push(dc_heroes);
 console.log(marvel_heroes);
 console.log(marvel_heroes[3][1]);

 //concat
 const newHeros = marvel_heroes.concat(dc_heroes);// concat returns new array
 console.log(newHeros);

//spread operator
const allHeros = [...marvel_heroes,...dc_heroes]; // spreads all array into one
console.log(allHeros);

//flat
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usableArr = anotherArr.flat(Infinity);//converts into one single array -> infinity is the depth
console.log(usableArr);

//isArray
console.log(Array.isArray("Khushboo")); //asks if this is array or not

//from
console.log(Array.from("Khushboo")); //converts to an array
console.log(Array.from({name:"Khushboo"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

//of
console.log(Array.of(score1,score2,score3));//creates an array from set of elements


