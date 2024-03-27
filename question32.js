"use strict";
let current_users = ['Amjad', 'Afzal', 'Ahmed', 'Furqan', 'Hayyan'];
let new_users = ['Haider', 'ALI', 'AFZAL', 'FURQAN', 'Imdad'];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
