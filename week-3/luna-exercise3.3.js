/*
============================================
; Title:  luna-exercise3.3.js
; Author: Professor Krasso
; Date:   08 November 2020
; Modified By: Adam Luna
; Description: Control statements
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 3.3"));

// Add a blank line for spacing
console.log("\n");

// start program

let eventKeyCode = 13

// changed multiple if/else statements to a switch statement
switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed");
    break;
  case 42:
    console.log("Some other key was pressed");
    break;
  case 39:
    console.log("Definitely still not the enter key");
    break;
  case 2:
    console.log("Nope");
    break;
  default:
    console.log("What are you doing?");
    break;
}


// end program
