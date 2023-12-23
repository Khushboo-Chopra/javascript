//for-in loop

const myObj = {
    js : "javascript",
    rb:"ruby",
    cpp:"c++",
    swift:"swift by apple"
}

for (const key in myObj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//for-of loop doesn't work on objects
//for-of and for-in both loops work on arrays