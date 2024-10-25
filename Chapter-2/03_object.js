//singleton
//Object.create


//object literals
const mySym=Symbol("key1")

const jsUser={
    name:"Partha",
    "fullname":"Partha Sarathi Rout",
    [mySym]:"mykey1",
    age:21,
    location:"Bbsr",
    email:"partha@google.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullname"]);
console.log(jsUser[mySym]);

jsUser.email="partha@chatgp.com"
//Object.freeze(jsUser)//it fix the values
//jsUser.email="partha@microsoft.com"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greeting());//hello js user
console.log(jsUser.greetingTwo());








