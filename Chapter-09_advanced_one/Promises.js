const promiseOne=new Promise(function(resolve,reject){
    //Do an asnc task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
},1000)
})
//Promise is created so now we consumed it

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task Two")
        resolve()
    },1000)
}).then(function(){
    console.log("Async Two resolved")
})


const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"partha@gmail.com"})
    },1000)

})
PromiseThree.then(function(user){
    console.log(user)
})


const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Partha",password:"123"})
        }else{
            reject('ERROR: Something went wrong')

        }
    },2000)
})
PromiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);

}).finally(()=>console.log("The Promise is Either resolved or rejected"))

const PromiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
        },1000)
});
async function consumePromiseFive() {
    try{
        const response= await PromiseFive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }   
};
consumePromiseFive()

// Type-1
// async function getAlluser(){
//    try{
//     const response =await fetch('https://api.github.com/user/RoutPartha')
//     const data=await response.json()
//     console.log(data);
//    }catch(error){
//     console.log("E:",error);
    
//    }

// }
// getAlluser()

fetch('https://api.github.com/user/RoutPartha')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))