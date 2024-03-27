function makeGreat(magicians: string[]): string[] {
     let greatMagicians: string[] = [...magicians];

    return greatMagicians.map(magician => `${magician} the Great`);
}

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
let magicians: string[] = ['Amjad','Furqan','Hayyan'];
let greatMagicians: string[] = makeGreat([...magicians]); 

showMagicians(magicians);
showMagicians(greatMagicians);