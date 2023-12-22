const name = "khushboo";
const repoCount = 50;
console.log(name+repoCount+"value");

const gameName = new String('khushboo');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   khushi     ";
console.log(newStringOne.trim());

console.log(newStringOne.replace('h','u'));
console.log(newStringOne.includes('abhi'));

const a = "honesty-is-the-best-policy";
console.log(a.split('-'));