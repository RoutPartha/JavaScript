const myArr=[0,1,2,3,4]
const Heroes=["shaktiman","ironman","Batman"]
console.log(myArr[1]);//myArr[indexno]

//array Methods
myArr.push(5)
console.log(myArr);

myArr.unshift(9)
console.log(myArr);//[9,0,1,2,3,4,5,6]
myArr.shift()
console.log(myArr);//[0,1,2,3,4,5,6]-->remove 9

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));//give index of respective array


//slice, splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)//splice manupulate the originale array
console.log("C",myArr);
console.log(myn2);


