/*
============================================
; Title:  luna-assignment3.4.js
; Author: Professor Krasso
; Date:   08 November 2020
; Modified By: Adam Luna
; Description: Loops
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Assignment 3.4"));

// Add a blank line for spacing
console.log("\n");

// start program

// Display game header/title
console.log("-- DO THE NUMBERS MATCH GAME --");

// Create a variable and assign it a value between 1 and 10
let var1 = 4;

// This program will compare the two parameters using the equality operation
function match(arg1, arg2) {
  if (arg1 === arg2)
    return true;
   else
    return false;
  }

// This program will display a string message if the two parameters do not match
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!")
}

// This program will display a string message if the two parameters do match
function logMatch(arg1,arg2) {
  console.log(arg1 + " and " + arg2 + " do match!")
}

// Create a for loop with 10 iterations with an if/else statement
for (let z = 0; z < 10; z++) {
  let localVar = randomNumber();
  if (match(var1, localVar)) {
    logMatch(var1, localVar);
  } else {
    logMismatch(var1, localVar);
  }
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// end program
