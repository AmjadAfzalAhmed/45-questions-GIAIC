"use strict";
let invitees = ['Adeel', 'Amjad', 'Kashif', 'Imdad', 'Arshad', 'Riaz']; //actual list
// console.log(invitees);
let firstremoval = invitees.pop();
console.log(`Mr. ${firstremoval} , sorry the dinner is cancelled`);
let secondremoval = invitees.pop();
console.log(`Mr. ${secondremoval} , sorry the dinner is cancelled`);
let thirdremoval = invitees.pop();
console.log(`Mr. ${thirdremoval} , sorry the dinner is cancelled`);
let fourthremoval = invitees.pop();
console.log(`Mr. ${fourthremoval} , sorry the dinner is cancelled`);
console.log("");
invitees.forEach(invited => {
    console.log(`Mr. ${invited} ,even though the dinner is limited, but you are still invited. `);
}); //iterates invitation message to shortlisted guests
invitees = []; // this will make the array empty
console.log(invitees); //here the empty array will be printed
