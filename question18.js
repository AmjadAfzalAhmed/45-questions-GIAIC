"use strict";
let visitPlace = ['Makkah', 'Karbala', 'Iran', 'Madina', 'Syria'];
console.log("Actual List:", visitPlace); //original array
console.log("Alphabetical Order:", [...visitPlace].sort()); //here we have used variable with rest parameter and sort method for ascending order
console.log("Actual List : ", visitPlace); //original array
console.log("Reverse Alphabetical Order: ", visitPlace.reverse()); //descending
console.log("Actual List : ", visitPlace.reverse()); //original array
let visitPlaceChanged = ['Syria', 'Makkah', 'Madina', 'Karbala', 'Iran']; //reversesd the array order
console.log("The Order has been reverted", visitPlaceChanged); //
console.log("Back to original order of array:", visitPlace);
console.log("Alphabetical order:", visitPlace.sort());
console.log("Reverse Alphabetical order:", visitPlace.reverse());
