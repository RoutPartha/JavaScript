
function saymyname(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    console.log("A");
    
}
saymyname()

function addTwoNumber(number1,number2){   
    console.log(number1+number2);    
}
addTwoNumber(3,4)

function addTwoNumber(number1,number2){   
    // let result= number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumber(3,4)
console.log("Result=",result);

function loginUserMessage(username){//(username="sam") that means by default user value is sam
    if (!username){ //username===undefined is same as !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

function calculateCarPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCarPrice(200,400,500,2000));
////////////////////////////////////////////
const user={
    username:"Partha",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)

handleObject({
    username:"Sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray));


