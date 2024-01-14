const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}

for (const key in myObj) {
//    console.log(key);
//    console.log(myObj[key]);
//    console.log(`${key} shortcut for ${myObj[key]}`);

        
    }
    let arr =[1,2,"three",4,5,6,'Seven',8,9,10];
    // for (const key in arr) {
    //     // console.log(key);
    //     // console.log(arr[key]);
    //     console.log(`${key} shortcut for ${arr[key]}`);
    // }

let myMap = new Map();
myMap.set("IN","India")
myMap.set("BH","Bihar")
myMap.set("TN","Tamilnadu")

for (const key in myMap) {
    console.log(key);
 
}

// For MAP use ForOf mathod and for Object use ForIn method
// forOf method directily gives value of Array, 
// where forin gives the key.
// forof on map gives key,value pair.
