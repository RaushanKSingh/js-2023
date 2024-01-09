// const tinderUser = new Object(); //singleton object
const tinderUser= {};

tinderUser.id="love";
tinderUser.name="shivani"
tinderUser.isLoggedIn= false;

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Raushan",
            lastName:"Kumar",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {
    name1:"raushan",
    home1:"bihar",
}
const obj2 = {
    name2:"arun",
    home2:"bihar",
}
const obj3 = {
    name3:"anand",
    home3:"bihar",
}

// const obj4 =Object.assign(obj1,obj2,obj3);
// console.log(obj1);
// console.log(obj4);

// const obj4 =Object.assign({},obj1,obj2,obj3);
// console.log(obj1);
// console.log(obj4);

const obj4={...obj1,...obj2,...obj3};
// console.log(obj4);
// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

// console.log(obj1.hasOwnProperty("name1"));

const course ={
    name:"Js Hindi",
    courseInstructor:"Raushan",
    courseFee:"999",
}

console.log(course.courseInstructor)

// const {courseInstructor:instructor} = course;
// console.log(instructor);

// const instructor = course.courseInstructor;
// console.log(instructor);

