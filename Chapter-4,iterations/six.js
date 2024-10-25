// const coading=["js","rb","java","python","cpp"]
// const values=coading.forEach((item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter( (num) =>num > 4 )
//console.log(newNums);

// const newNums=myNums.filter((num) => {
//     return num>4
// })

const newNums=[]

myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
        
    }
})
console.log(newNums);

//Example

const Book=[
    {title:"Book One",genre:"Fiction",publish:1981,edition:2004},
    {title:"Book Two",genre:"Non-Fiction",publish:1982,edition:2004},
    {title:"Book Three",genre:"Science",publish:1999,edition:2008},
    {title:"Book Four",genre:"Non-Fiction",publish:1980,edition:1991},
    {title:"Book Five",genre:"Science",publish:2000,edition:1900},
    {title:"Book Six",genre:"History",publish:1988,edition:2000},
    {title:"Book Seven",genre:"Fiction",publish:1900,edition:2002},
    {title:"Book Eight",genre:"History",publish:1991,edition:1999},
    {title:"Book Nine",genre:"Non-Fiction",publish:2000,edition:2002},
   
];

let userBooks=Book.filter((bk)=>bk.genre==="History")
userBooks=Book.filter((bk)=>{ 
    return bk.publish >=1981 && bk.genre==="History"})
console.log(userBooks);
