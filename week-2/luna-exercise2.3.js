/*
============================================
; Title:  luna-exercise2.3.js
; Author: Professor Krasso
; Date:   1 November 2020
; Modified By: Adam Luna
; Description: Defining and calling functions
;===========================================
*/
/*
  Expected output:
  FirstName LastName
  Exercise 2.3
  Today's Date
  Hello FirstName LastName!
  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/


// require reads luna-header.js file and executes it
const header = require('./luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 2.3"));

// create function property
myName.adam = "Adam Luna";

// create function and return function property
function myName() {
  return myName.adam
}

// function output
console.log("Hello " + myName() +"!");
