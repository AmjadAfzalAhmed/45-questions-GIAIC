let magicians: string[] = ['Amjad','Furqan','Hayyan'];
let add:string = 'Great Magician : ';

function make_Great (add:string, magicians:string) {
    return magicians.map((element => add + element)); 
}
let dispResult = make_Great(add,magicians);
console.log(dispResult);