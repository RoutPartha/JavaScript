//7 types of Premitive Data types
//nn ss bb u
let a=null;
let b=345;
let c=true;//can also be false
let d=BigInt("567")+BigInt("3")
let e="Partha"
let f=Symbol("That is a nice symbol")
let g=undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)


//Non Premitive Data Type or Objects in JS
const item={
    "Partha":true,
    "Sudeep":false,
    "Dinesh":36,
    "Rohan":undefined
}
console.log(item["Partha"])

const accountId=12234
let accountEmail="Partha@microsoft.com"
var accountPassword="1234"
accountcity="BBSR"

accountEmail="Partha@google.com"
accountPassword="22343553"
accountcity="Bengalur"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountcity])