// object singleton

//object litrals

const sym =Symbol("sym1");
// console.log(sym);
// console.log(typeof sym);
const myObj = {
    name:"raushan",
    age:28,
    email:"raushan@google.com",
    "full_name":"Raushan Kumar",
    [sym]:"love",
};

// console.log(myObj.name);
// console.log(myObj.age);
// console.log(myObj["full_name"]);
// console.log(typeof myObj[sym]);
// console.log(myObj[sym]);
// console.log(myObj);
// console.log(typeof myObj[sym]);


myObj.email ="hotstar@gmaill.com";
// Object.freeze(myObj);
// myObj.email ="great@gmaill.com"; // no change after object freeze 
// console.log(myObj);

myObj.greetings = function(){
    console.log("hello myObj")
};
// console.log(myObj)
console.log(myObj.greetings);
console.log(myObj.greetings());