let a=10
const b=20
var c=30



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="Partha"

    function two(){
        const website="Youtube"
        console.log(username);
        
    } 
   // console.log(website);
    two()
    
}
one()

if(true){
    const username="Partha"
    if(username=="Partha"){
        const website="Youtube"
        console.log(username+website);
        
    }
    //console.log(website); gives error becoz it has no scope
    
}
//console.log(username); gives error becoz it has no scope

// + + + + + + + + +interesting + + + + + + + + + +

//addone(5) it will not give error because of declaration
console.log(addone(5))
function addone(num){
    return num+1
}


addTwo(5)//it will ot exicute because of declaration style
const addTwo=function(num){
    return num+2
}

