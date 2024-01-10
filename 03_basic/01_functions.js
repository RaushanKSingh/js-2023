// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(3,4);
// addTwoNumbers(3,'4');
// const result = addTwoNumbers(3,8);
// console.log('result: ',result);

function addTwoNumbers(num1,num2){
    return num1+num2;;
}

// const result = addTwoNumbers(3,8);
// console.log('result: ',result);
function loginUserMessage(username){
    if(!username){
        console.log('pls enter a usename')
         return;
    }
    
    return `${username} just logged in`;
    

    
}

// console.log(loginUserMessage('Raushan'));
// console.log(loginUserMessage());

function calculateCartPrice (...num1){
    let result = 0;
    for(let i =0;i<num1.length;i++){
        result =result + num1[i];
    }
    return result;
}

// console.log(calculateCartPrice(100,200,300,400,500));

const user = {
    username:"raushan",
    uniqueQuality: "honesty"
}

function handleObject (anyObj){
    console.log(`username is ${anyObj.username} and Unique Quality is ${anyObj.uniqueQuality}`)
}

// handleObject(user);

handleObject({
    username:"love",
    uniqueQuality:'fuck'
})

