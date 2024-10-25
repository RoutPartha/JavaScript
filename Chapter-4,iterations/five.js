const coading=["js","rb","java","python","cpp"]
//Type-1
// coading.forEach( function (item) { //it is a callback function that's why it has no name
//     console.log(item);
    
// })

//Type-2,This is Arrow Function
// coading.forEach((item)=> {
//     console.log(item);
    
// })

// type-3
// function printMe(item){
//     console.log(item);
    
// }
// coading.forEach(printMe)

// coading.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoading=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoading.forEach((item) =>{
    console.log(item.languageName);
    
})


