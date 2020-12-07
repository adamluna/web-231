/*
============================================
; Title:  luna-exercise7.2.js
; Author: Professor Krasso
; Date:   06 December 2020
; Modified By: Adam Luna
; Description: Constructor Functions
;===========================================
*/
// require reads luna-header.js file and executes it
const header = require("../luna-header.js");
// display function output
console.log(header.display("Adam", "Luna", "Exercise 7.2"));
// create a blank line between header and output
console.log("");

// Begin program

//Create an employee constructor object with four parameters/fields
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Populate an array with five employee objects
let employees = [
  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikola", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst"),
];

// Loop over the array and output the results
let index = 1;
for (let i = 0; i < employees.length; i++) {
  console.log(
    index +
      " " +
      employees[i].firstName +
      " " +
      employees[i].lastName +
      " " +
      employees[i].title
  );
  index++;
}

// End program
