//ch-2 problem-1
/*
let age=prompt("Whit is your age:")
if(age>10 && age<20){
    alert("Your age lies b/t 10 and 20")
}
else{
    alert("Your age does not lies b/t 10 and 20")  
}
 */   
//Problem-2
/*
let age=prompt("Whit is your age:")
switch(age){
    case 12:
        alert("Your age is 12")
        break
    case 13:
        alert("Your age is 13")
        break
    case 14:
        alert("Your age is 14")
        break
    case 15:
        alert("Your age is 15")
        break
    default:
        alert("Your age is not special")              
}
 */
//Problem-3
/*
let num=prompt("Enter the number:")
num=Number.parseInt(age)
if(num%2==0 && num%3==0 ){
    alert("Your number is divisible bt 2 and 3")
}else{
    alert("your number is not divisible by 2 and 3")
}
    */
//problem-4-using ternary operation
let age=12
let a=age>18?"You can drive":"You cannot drive"
console.log(a)
