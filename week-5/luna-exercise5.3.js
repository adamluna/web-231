/*
============================================
; Title:  luna-exercise5.3.js
; Author: Professor Krasso
; Date:   22 November 2020
; Modified By: Adam Luna
; Description: Object Collections
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Exercise 5.3"));

// create a blank line between header and output
console.log("");

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// begin program

// Create an array of five (5) composer objects
let composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 5
  },
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10,
  },
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: 9,
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6,
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5,
  },
];

// Using JavaScripts built-in forEach() function, iterate over the composer objects and output the results
composers.forEach(function(composer) {
  console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
});

// end program
