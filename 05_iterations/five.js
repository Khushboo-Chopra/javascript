const coding = ["js", "ruby", "java", "python", "cpp"];

//high order function
// coding.forEach(  function (item){
// console.log(item);
// } )

// coding.forEach((item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,idx,arr)=>{
//     console.log(item,idx,arr);
// })

const myCoding = [
  {
    langName: "Javascript",
    langFileName: "JS",
  },
  {
    langName: "Java",
    langFileName: "Java",
  },
  {
    langName: "Python",
    langFileName: "PY",
  },
];

myCoding.forEach((item)=>{
    console.log(item.langFileName);
})