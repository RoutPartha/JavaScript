const user = {
    username: "Partha",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function () {
        console.log("Got user Details from Database");
    }
};

console.log(user.username);
console.log(user.getUserDetails());


function User(usrname, loginCount, isLoggedIn) {
    this.username = usrname;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // No need to return this
}

const userOne = new User("Partha", 12, true);
console.log(userOne);
console.log(userOne.username);