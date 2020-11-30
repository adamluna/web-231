/*
============================================
; Title:  luna-exercise6.2.js
; Author: Professor Krasso
; Date:   29 November 2020
; Modified By: Adam Luna
; Description: Exception Handling
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 6.2"));

// create a blank line between header and output
console.log("");

// begin program
// The total of x and y must be greater than 10 or an error is thrown
try {
  let x = 6;
  let y = 1;
  var total = x + y;
if (total < 10) throw "Number must not be less than 10.";
  console.log(total);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached...");
}
// end program
