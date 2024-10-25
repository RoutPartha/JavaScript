//generate a random color
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]

    }
    return color;
};
console.log(randomColor());


//console.log(Math.floor(Math.random()*16));//we use 16 because it is a Hex number

let intervalid;//Here we make it Global
const startChangingColor=function(){
    if(!intervalid){
        intervalid= setInterval(changeBgColor,1000)
        //we dont have to use let here because 
        //if we use then clearInterval will not working due to local scope 
        //so we have to make it Global
    }
//we use if because of the corner case
   function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
   }

};

const stopChangingColor=function(){
    clearInterval(intervalid);
    intervalid=null;//because of the corner case 
};
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
