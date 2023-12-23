let a = 100;
const b = 20;
var c = 30; //->global scope

if(true){ // block scope
    let a = 10
    const b = 20;
    console.log("inner: ",a);
}

console.log(a);

//closure -> nested functions ->  child can access parent properties but vice-versa is not possible
function one(){
    const username = "khushboo"
    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

    two();
}

one();

// +++++++++++++++++++++ interesting +++++++++++++++++++++++++++
addone(5); // -> hoisting


function addone(num){
return num+1;
}

//addone(5);
//addTwo(); -> can't access this one before initialisation

const addTwo = function(num){
    return num+2;
}

addTwo();