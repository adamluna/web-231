/*
============================================
; Title:  luna-exercise5.2.js
; Author: Professor Krasso
; Date:   22 November 2020
; Modified By: Adam Luna
; Description: ES5 Built-In Functions
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 5.2"));

// create a blank line between header and output
console.log("");

// begin program

/*
  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date
  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

// create a string array of five favorite types of food
let favoriteFood = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// Using JavaScripts built-in forEach() function, iterate over the array and output the results
favoriteFood.forEach(function (food) {
  console.log(food);
});

// end program
