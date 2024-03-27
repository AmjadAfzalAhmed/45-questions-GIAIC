let users:string[] = ['admin','amjad','afzal','ahmed'];

users.forEach(greets =>{
    if (greets === "admin"){
        console.log(`Hello ${users[0]} , would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${greets} , thank you for logging in again`);
    }
});
