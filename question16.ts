let guestlist:string[] = [ 'Amjad', 'Imdad', 'Arshad' ];

// console.log(guestlist);

console.log(`\n The dinner table is bigger now so adding more guests\n`);

let newguest:string[] = ['Adeel','Kashif','Riaz'];//three more guest    

guestlist.unshift(newguest[0]);//added new guest to existing list at the position 0
console.log(guestlist);
let middleguest:number = Math.floor(guestlist.length / 2);//made two equal pieces of list to get middle position of the array
guestlist.splice(middleguest,0,newguest[1]);//inserted new guest to middle position 
console.log(guestlist);
guestlist.push(newguest[2]);//inserted guest at the end position
console.log(guestlist);

for (let i = 0; i < guestlist.length; i++) {
    console.log(`Mr. ${guestlist[i]}, you are cordially invited to the dinner party.`);
}






