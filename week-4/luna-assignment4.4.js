/*
============================================
; Title:  luna-assignment4.4.js
; Author: Professor Krasso
; Date:   15 November 2020
; Modified By: Adam Luna
; Description: Predicates
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Assignment 4.4"));

// begin program

// create a string array of 5 states
let states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// create a function called getState with two string parameters
function getState(str1, str2) {
  if (str1 === str2) {
    return true;
  }
}

// display original array
console.log("-- ORIGINAL ARRAY --");
for (let i = 0; i < states.length; i++) {
  console.log(states[i]);
}

// sort and display the contents of the updated array
console.log("-- SORTED ARRAY --");
for (let i = 0; i < states.length; i++) {
  console.log(states.sort()[i]);
}

// use filter function and call the getState function
let filteredStates = states.filter(function (statesArray) {
  return getState(statesArray, "Iowa");
});

// display selected value
console.log("-- SELECTED VALUE --");
filteredStates.forEach(function (statesArray) {
  console.log(statesArray);
}
);

// display selected value
console.log("-- SELECTED VALUE --");
filteredStates.forEach(function (statesArray) {
  console.log(statesArray);
}
);

// end program
