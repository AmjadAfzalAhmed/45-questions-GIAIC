"use strict";
let magicians = ['Amjad', 'Furqan', 'Hayyan'];
// console.log(magicians);
function show_magicians(magic) {
    magic.forEach((element) => {
        console.log(`The Magician ${element}.`);
    });
}
show_magicians(magicians);
