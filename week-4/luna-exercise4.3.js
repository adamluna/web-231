/*
============================================
; Title:  luna-exercise4.3.js
; Author: Professor Krasso
; Date:   15 November 2020
; Modified By: Adam Luna
; Description: Filtering
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 4.3"));

// begin program

// create a string array of 5 vehicles
let vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// create a function called getValue with two parameters
function getValue(arr, str) {
  // iterate over the parameterized array
  for (let i = 0; i <arr.length; i++) {
    // test if the string value matches the current value in the loop
    if (arr[i] === str) {
      console.log(arr[i]);
    }
  }
}

// displaying array items
console.log("-- DISPLAYING ARRAY ITEMS --");
for (let k = 0; k < vehicles.length; k++) {
  console.log(vehicles[k]);
}

// create line
console.log("");

// select Motorcycle value
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// create line
console.log("");

// select Bus value
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");

// end program
