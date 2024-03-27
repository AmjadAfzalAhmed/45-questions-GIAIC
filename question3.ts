let nam:string = "Amjad afzal ahmEd";
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());

let titleCase: string[]= nam.split(" ");
let titleCased: string = "";
for (let i = 0; i < titleCase.length; i++){
  titleCased += titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1).toLowerCase() + " "
}
console.log(titleCased);