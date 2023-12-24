//reduce -> for finding factorial 1+2+3
const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0); // this is accumulator value

// const myTotal = myNums.reduce((acc,currVal)=>(acc+currVal),0)
 const myTotal = myNums.reduce((acc,currVal)=>acc+currVal,0)

console.log(myTotal);
