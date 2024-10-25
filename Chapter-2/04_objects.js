//const tinderuser=new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="Partha"
tinderuser.isLoggedin=false
console.log(tinderuser);

const regularuser={
    email:"partha@google.com",
    fullname: {
        userfullname:{
            firstname:"Partha",
            lastname:"Rout"

        }

    }
}
console.log(regularuser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
//method-1 for join
//const obj3=Object.assign({},obj1,obj2)
//method-2 for join using spread method
const obj3={...obj1,...obj2}//spread method
console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedin'));

//Destructur
const course={
    coursename:"js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
const{courseInstructor: instructor}=course
console.log(instructor);

//node js not for now
// const navbar= ({company}) =>{
// }
// navbar(company="ParthaEng")

