/*
============================================
; Title:  luna-exercise3.2.js
; Author: Professor Krasso
; Date:   08 November 2020
; Modified By: Adam Luna
; Description: Pattern matching functions
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 3.2"));

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

// Create six local test variables
let firstVar = "Truck";
let secondVar = "Car";
let thirdVar = "Bike";
let fourthVar = "Bike";
let fifthVar = "Four";
let sixthVar = "Three";

// Add a blank line between after the header and before the output
console.log("\n");

// Test the match function.
console.log(match("A", "B"));
console.log(match(4, 4));

// Testing first pair of variables
if (match(firstVar, secondVar)) {
  logMatch(firstVar, secondVar);
} else {
  logMismatch(firstVar, secondVar);
}

// Testing second pair of variables
if (match(thirdVar, fourthVar)) {
  logMatch(thirdVar, fourthVar);
} else {
  logMismatch(thirdVar, fourthVar);
}

// Testing third pair of variables
if (match(fifthVar, sixthVar)) {
  logMatch(fifthVar, sixthVar);
} else {
  logMismatch(fifthVar, sixthVar);
}
