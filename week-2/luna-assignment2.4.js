/*
============================================
; Title:  luna-assignment2.4.js
; Author: Professor Krasso
; Date:   1 November 2020
; Modified By: Adam Luna
; Description: Building and invoking functions.
;===========================================
*/

// Display the header at top of the program.
const header = require('./luna-header.js');

console.log(header.display("Adam", "Luna", "Assignment 2.4"));

// Create a function called fullName and return the firstName and lastName parameters as one string.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Create a function called dateWriter and return a new date using the parameters.
function dateWriter(year, month, day) {
  return new Date(year, month-1, day).toLocaleDateString();
}

// Create a function called formatNumber and return with the number of fixed positions.
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

// Create a function called convertToInt and return the value as an integer.
function convertToInt(myAge) {
  return parseInt(myAge);
}

// Create a function called convertToFloat and return the value as a float.
function convertToFloat(dollarAmount) {
  return parseFloat(dollarAmount);
}

// Create test variables to output.
let firstName = "Adam";
let lastName = "Luna";
let myAge = 31;
let dollarAmount = 60000.00;
let number = 32.1234;
let numOfFixedPositions = 1;

// Display output.
console.log("\n" + "Hello my name is " + firstName + " " + lastName + "!");
console.log("\n" + "Today's date is " + dateWriter(2020, 11, 01) + " and the current temperature is " + formatNumber(number, numOfFixedPositions) + " degrees" + ".");
console.log("\n" + "I am " + myAge + " years old and my savings account goal is " + dollarAmount + " dollars.");
