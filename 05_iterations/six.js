const myArr=[1,2,3];

// const myTotal = myArr.reduce( function (accu,curVal){
//     return accu+curVal;
// },0)
// console.log(myTotal);
// const myTotal = myArr.reduce( (accu,curVal)=> accu+curVal,0)
// console.log(myTotal);

const myShoppingKart =[
    {
    vegitable:"carrot",
    price:10
    },
    {
    vegitable:"potato",
    price:20
    },
    {
    vegitable:"tomato",
    price:30
    },
    {
    vegitable:"radish",
    price:40
    },
]

const MyKartToatal = myShoppingKart.reduce((acc,item)=>(acc+item.price),0)
console.log(MyKartToatal);