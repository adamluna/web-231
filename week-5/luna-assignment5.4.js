/*
============================================
; Title:  luna-assignment5.4.js
; Author: Professor Krasso
; Date:   22 November 2020
; Modified By: Adam Luna
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require('../luna-header.js');

// display function output
console.log(header.display("Adam", "Luna", "Assignment 5.4"));

// create a blank line between header and output
console.log("");

// begin program

// Using JavaScripts built-in map() function, create a filtered array of composers by rating (review the starter code for output expectations).
let composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8,
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

// title
console.log("-- COMPOSER BY RATING --");

// Using JavaScripts built-in map() function, create a filtered array of composers by rating (review the starter code for output expectations).
let ratingMap = composers.map(function (composer) {
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});

// Using JavaScripts built-in forEach() function, iterate over each array and output the results.
ratingMap.forEach(function (composer) {
  console.log(composer + "\n");
});

// title
console.log("-- COMPOSER BY GENRE--");

// Using JavaScripts built-in map() function, create a filtered array of composers by genre (review the starter code for output expectations).
let genreMap = composers.map(function (composer) {
  return "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName;
});

// Using JavaScripts built-in forEach() function, iterate over each array and output the results.
genreMap.forEach(function (composer) {
  console.log(composer + "\n");
});
