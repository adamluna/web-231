/*
============================================
; Title:  luna-assignment6.4.js
; Author: Professor Krasso
; Date:   29 November 2020
; Modified By: Adam Luna
; Description: Nested Object Literals
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Assignment 6.4"));

// create a blank line between header and output
console.log("");

// start program
// Create an object literal ticket with a nested object literal person
let ticket = {
  id: 105,
  name: "Example Ticket",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "Medium",

  person: {
    id: 1,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
};

// Output of Nested Object Literal
console.log("Ticket "+ ticket.id +" was created on "+ ticket.dateCreated +" and assigned to employee "+ ticket.person.firstName +(" ")+ ticket.person.lastName +" ("+ ticket.person.jobTitle +").");
// end program
