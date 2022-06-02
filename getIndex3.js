const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

if (userArray.length >= 4){
    console.log("The third item in your array is: " + userArray[2])}
    else if (userArray.length < 4) {
         console.log("The value of the last index is: " + userArray[userArray.length-1])
  }
  else {console.log("Error.")}; 