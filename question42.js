"use strict";
let magicians = ['Amjad', 'Furqan', 'Hayyan'];
let add = 'Great Magician : ';
function make_Great(add, magicians) {
    return magicians.map((element => add + element));
}
let dispResult = make_Great(add, magicians);
console.log(dispResult);
