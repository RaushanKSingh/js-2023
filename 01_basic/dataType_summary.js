//primitive type ===7 nos

// String , number, boolean, Null , undefined, Symbol, BigInt

/*
Referance/non-primitive type
 #Array, Objects, Functions
*/

const id =Symbol("123");
const otherId =Symbol("123"); 

console.log(id);
console.log(otherId==id);

//#Array, Objects, Functions

const heros =["hfg","sdgvf","ufhiahf"];
let myObj ={
    name: "raushan",
    age: 30
};

const myFunction =function(x){
    return x*x;
}
  


console.log(myFunction(2));
console.log(myObj.name);

//MEMORIES.............

// Stack type memory ( for primitive variable)
// Heap Type memory (for Non-Primitive variable)

let myYouTubeName= "RaushanSingh";
let myOtherYoutubeName= myYouTubeName;

myOtherYoutubeName = "Shivani"; // myYouTubeName variable is not changed.

console.log(myYouTubeName);
console.log(myOtherYoutubeName);



let userOne={
    name: "Ganesh",
    email: "ganesh@love.com"
};
 let userTwo =userOne;

 userTwo.name="Shiva"; // userOne name got changed as userTwo refers the same memory as userOne

 console.log(userOne.name);
 console.log(userTwo.name);

