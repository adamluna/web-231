/*
============================================
; Title:  luna-exercise4.2.js
; Author: Professor Krasso
; Date:   15 November 2020
; Modified By: Adam Luna
; Description: Arrays
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 4.2"));

// begin program

// create a string array of 5 fruit items
let fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// create a function called getFruit with one parameter
function getFruit(arr) {
    // iterate over the parameterized array and output the results
    for(let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}

// Call the getFruit function and pass-in the array created in step 1 to test the results
getFruit(fruit);

// end program
