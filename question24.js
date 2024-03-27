"use strict";
//string test
let string1 = "Amjad";
let string2 = "amjad";
console.log(string1 != string2); //it returns "True"
console.log(string1 == string2); //it returns "False"
//string test with the use of toLowerCase()
let myName = "AMJAD";
let myName1 = myName.toLowerCase();
console.log(myName != myName1); //it returns "True"
console.log(myName == myName1); //it returns "False"
//numerical equalit & inequality tests
console.log(10 == 10); //it returns "True"
console.log(10 != 10); //it returns "False"
//numerical greater than and less than tests
console.log(10 > 8); //it returns "True"
console.log(10 < 8); //it returns "False"
//greater than or equal to and lesser than or equal to
console.log(10 >= 10); //it returns "True"
console.log(10 <= 10); //it returns "True"
// && or | 
console.log(2 > 3 && 2 < 1); //it returns "False"
console.log(20 > 18 || 20 < 21); //it returns "False"
// checking the existence of an item in an array
let myArr = [2, 3, 4];
console.log(myArr.includes(2));
console.log(!myArr.includes(2));
