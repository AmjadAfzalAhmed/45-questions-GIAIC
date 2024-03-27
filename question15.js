"use strict";
let guests = ["Rashid", "Imdad", "Arshad"];
console.log(guests);
console.log(`\n"Mr. ${guests[0]} , is unable to attend the party"\n`);
guests.shift();
console.log(`\nMr. Amjad is the new guest added'\n`);
let newGuest = "Amjad";
guests.unshift(newGuest);
console.log(guests);
for (let guest of guests) {
    console.log(`Dear ${guest},\nI would like to invite you to dinner. It would be an honor to have you join us.
    `);
}
;
