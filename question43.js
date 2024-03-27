"use strict";
function makeGreat(magicians) {
    let greatMagicians = [...magicians];
    return greatMagicians.map(magician => `${magician} the Great`);
}
function showMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
let magicians = ['Amjad', 'Furqan', 'Hayyan'];
let greatMagicians = makeGreat([...magicians]);
showMagicians(magicians);
showMagicians(greatMagicians);
