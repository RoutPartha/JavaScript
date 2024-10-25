//Dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//object

let mycreatedDate =new Date(2024,7,28)
console.log(mycreatedDate.toDateString());


let anotherDate=new Date("09-18-2014")
console.log(anotherDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long"
    
})









