let a = prompt("Hey Whats your age?");
a = Number.parseInt(a)
if(a<0){
    alert("This is an invalid age")
}
else if(a<9){
    alert("You cannot Driving")
}
else{
    alert("This is a valid age:")
}