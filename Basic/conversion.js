let score = "Manthan" // here we have to check the value of the variable 
console.log(typeof score);
let convert = Number(score) // convert string value into number data type
console.log(typeof convert);
console.log(convert);  // string can not be convert into number it gives "NaN"

let sc = true // here we have to check the value of the variable 
console.log(typeof sc);
let bc = Number(sc) // convert boolean value into number data type
console.log(typeof bc);
console.log(bc);   // in this senerio the true return the value 1 


let oh = null // here we have to check the value of the variable 
console.log(typeof oh);
let con = Number(oh) // convert null value into number data type
console.log(typeof con);
console.log(con);  // in this case the null value gives 0 in return


let re = "Manthan" // here we have to check the value of the variable 
console.log(typeof re);
let tre = Boolean(re) // convert integer value into boolean data type
console.log(typeof tre);
console.log(tre);    

/* 
in this case the int 1 -> true , 0-> false 
empty string gives -> false 
and string "Manthan" gievs -> true
*/


let num = 31 // here we have to check the value of the variable 
console.log(typeof num);
let str = String(num) // convert number value into string data type
console.log(typeof str);
console.log(str);   // converted into string and retunr the value 31

