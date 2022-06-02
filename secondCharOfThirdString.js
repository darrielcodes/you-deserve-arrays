const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let secondChar = userArray[2];

if (typeof userArray[2] === "string"){
    console.log("The second character in the third item is: " + secondChar[1])}
    else {console.log("Error.")};