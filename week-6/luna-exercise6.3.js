/*
============================================
; Title:  luna-exercise6.3.js
; Author: Professor Krasso
; Date:   29 November 2020
; Modified By: Adam Luna
; Description: Object Literals
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 6.3"));

// create a blank line between header and output
console.log("");

// start program
// Create an object literal for a ticketing system with three fields.
let ticketInfo = {
  id: "101",
  name: "Help Desk Support",
  requestor: "Bob Jones"
};
// Output results of the Object Literal
console.log("{id: "+ ticketInfo.id +", name: "+ ticketInfo.name +", requestor: "+ ticketInfo.requestor +"}");
// end program
