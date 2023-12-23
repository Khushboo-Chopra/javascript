//iife -> Immediately Invoked Function Expressions
//(defination)(declaration)

(function chai(){
    //named iife
    console.log("Database Connected");
})();

((name)=>{
    console.log(`${name} : Database Connected`);
})("khushboo")