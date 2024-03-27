"use strict";
let invited = ['Amjad', 'Adeel', 'Furqan', 'Hayyan', 'Ali Mustafa', 'Haider']; //guest list defined
let guestNumber = invited.length; //describing the length of guest list
invited.forEach(guest => {
    console.log('Mr.', guest, 'I have invited a total', guestNumber, 'number of guests');
}); // the loop to display message to guests informing a toatl number of guests
