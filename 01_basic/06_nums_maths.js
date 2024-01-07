// const score =400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNum= 123.25678
// console.log(otherNum.toPrecision(4));

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

/*******************MATHS*********************/

console.log(Math);

// console.log(Math.max(4,5,3,8,));
// console.log(Math.min(4,3,8,6));
// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));

// to print number between 10-20
const min=10;
const max=20;

for(let i=1; i<=10;i++){
    console.log(`the ${i} th number is:`)
    console.log(Math.floor((Math.random()*(max-min+1))+min));
}