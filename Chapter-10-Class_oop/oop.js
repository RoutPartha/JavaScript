const user={
    username:"Partha",
    loginCount:8,
    signedIn:true,
    

    getUserDetails: function(){
        console.log("Got user Details from Database")
    }
}

console.log(user.username)