// false value 
// false,0,BigInt 0n,"", null,NaN,undefined

// truthy value
// "0","false"," ",[].{},function(){}

// const userName ="raushan";
// const userName ="";
const userName =[];


// if(userName){
//     console.log("got the user name");
// }else{
//     console.log("didnt find username");
// }
// if(userName.length!=0){
//     console.log("got the user name");
// }else{
//     console.log("didnt find username");
// }

// use .lenght property for array and object .
// Object.key(username).lenght


//  Nullish Coalescing operator(??)

// const val = 5 ?? 10
// const val = null ?? 10
const val = undefined ?? 10

console.log(val);

// Terniary Operator   Condition ?true:false

const score =101;

score >= 100 ? console.log("Greater than 100"):console.log("More than 100");

