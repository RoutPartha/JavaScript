const myNums=[1,2,3]

//Type-1
// const myTotal=myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and curval:${currval}`);
    
//     return acc+currval
// },0)


//Type-2,Arrow function,with Return
// const myTotal=myNums.reduce((acc,curval)=>{return acc+curval} ,0)
// console.log(myTotal);

//Type-3,Arrow function,without Return
const myTotal=myNums.reduce((acc,curval)=> acc+curval ,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemname:"js course",
        price:299
    },
    {
        itemname:"Python",
        price:999
    },
    {
        itemname:"Mobile Dev",
        price:5999
    },
    {
        itemname:"Data Science",
        price:9999
    }
]
const PricetoPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PricetoPay);
