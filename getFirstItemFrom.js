const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));
console.log("The first item in your array is: " + userArray[0]);