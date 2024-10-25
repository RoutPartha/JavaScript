const user={
    username:"Partha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//this code give undefined
// function chai(){
//     let username="Partha"
//     console.log(this.username);
// }
// chai()

//this code give undefined
// const chai=function(){
//     let username="Partha"
//       console.log(this.username);

// }
// chai()

const chai=() =>{
    let username="Partha"
         console.log(this.username);

}
chai()

//explicit return
// const addTwo=(num1,num2)=> {
// return num1+num2
// }
//implicit return

//if we use {} then we need return keyword but if we use () no need to use return statement
console.log(addTwo(3,4));

//const addTwo=(num1,num2)=>(num1+num2)

//return object
// const addTwo=(num1,num2)=>({username:"Partha"})
// console.log(addTwo(3,4));

const myArray=[2,4,5,6,7,8]
myArray.forEach()