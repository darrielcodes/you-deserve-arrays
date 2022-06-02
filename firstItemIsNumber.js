const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));


if (typeof userArray[1] === "number"){
    console.log("The first item in the array is a number.")
}
else if (typeof userArray[1] !== "number"){
    console.log("The first item in the array is NOT a number.")
}
else {console.log("Error.")};