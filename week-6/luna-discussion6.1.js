/*
============================================
; Title:  luna-discussion6.1.js
; Author: Adam Luna
; Date:   24 November 2020
; Description: Create a simple JavaScript program using object properties with at least (2) errors
;===========================================
*/

// start program

/* Expected Output:
-- Dallas Stars! --

My favorite hockey team is the Dallas Stars.

The Dallas Stars play in the National Hockey League.

The Dallas Stars are located in Dallas, Texas.
*/

// Create an object called hockey that has information about the Dallas Stars
var hockey = {
  team : "Dallas Stars",
  league : "National Hockey League",
  city = "Dallas",
  state : "Texas";
  };

// Display output
console.log("-- Dallas Stars! --" + "\n");
console.log("My favorite hockey team is the " + hockey.team + ".");
console.log("The " + hockey.team + " play in the " + hockey.league + "." + "\n");
console.log("The " + hockey.team + " are located in " + hockey.city + ", " + hockey.state + ".");

// end program
