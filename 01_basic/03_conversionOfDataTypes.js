/*
//conversion of string to number

//Variable declaration
let str1 = "143";
let str2 = "143abc";
let str3 = "abc";

//Conversion
let Isnumber1 = Number(str1); //number
let Isnumber2 = Number(str2); //NaN
let Isnumber3 = Number(str3); //NaN

//Print
console.log(Isnumber1); //143
console.log(typeof Isnumber1); // Number
console.log(Isnumber2); //NaN
console.log(typeof IIsnumber2); //undefined
console.log(Isnumber3); //NaN
console.log(typeof Isnumber3); //number
*/

//Conversion of Number & string to Boolean

let num1;
let num2 = 143;

let isBoolean1 = Boolean (num1);
let isBoolean2 = Boolean (num2);

console.log(isBoolean1); //false
console.log(typeof isBoolean1); //boolean

console.log(isBoolean2); //true
console.log(typeof isBoolean2); //boolean


let str4;
let str5 ="";
let str6 = "love";

let isBoolean3 = Boolean (str4);
let isBoolean4 = Boolean (str5);
let isBoolean5 = Boolean (str6);


console.log(isBoolean3);  //false
console.log(typeof isBoolean3); //boolean

console.log(isBoolean4); //false
console.log(typeof isBoolean4); //boolean

console.log(isBoolean5); //true
console.log(typeof isBoolean5); //boolean