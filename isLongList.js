const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
let length = userArray.length
let bool = true
let bool2 = false

if (length >= 10){
    console.log("The array length is at least 10?: " + bool)
}
else if (length < 10){
    console.log("The array length is at least 10?: " + bool2)
}
else {console.log("Error.")};