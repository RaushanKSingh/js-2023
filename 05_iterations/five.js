// const lang = ["c++","java","ruby","html"];

const myNum =[1,2,3,4,5,6,7,8,9,10];
// const newNums= myNum.filter((num) => num>4 ); //implicit return ie no scope({}) is used 
// console.log(newNums);

// const newNums= myNum.filter((num) => { return num>4 }); 
// //explicit return is required bcz of {} scope
// console.log(newNums);

// const newNums= myNum.map((item)=>item*10 );  // .map return the value while foreach didnt return value.
// const newNums= myNum.map((item)=>item*10 ).map((item)=> item+1);  
// console.log(newNums);
const newNums= myNum.map((item)=>item*10 ).map((item)=> item+1).filter((item => item>=40));  
console.log(newNums);
