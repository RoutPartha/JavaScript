//Immediately Invoked Function Expression(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);    
// }
// chai()
//Or
(function chai(){
    //named IIFE    
    console.log(`DB CONNECTED`);    
})(); //we use this tric(IIFE) to avoid polution of Global Scope

//UNNAMED IIFE ,PARAMETER IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);    
}) ("Partha");

// ((name)=>{
//     console.log(`DB CONNECTED THREE ${name}`);
    
// })("Partha")