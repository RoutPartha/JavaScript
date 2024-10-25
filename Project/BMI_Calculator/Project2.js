const forms=document.querySelector('form')
//this usecase will give you empty
//const height=parseInt(document.querySelector('#height').value)

forms.addEventListener('submit',function (event) {
    event.preventDefault() //we use this becoz first stop the process no need to Submit immediately
    
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    if (height==='' || height <0 || isNaN(height)) {
        result.innerHTML=`Your input is ${height},so give a Valid Input`    
    }
    else if (weight==='' || weight <0 || isNaN(weight)) {
        result.innerHTML=`Your input is ${weight},so give a Valid Input`   
    }else{
       const bmi=(weight/((height*height)/10000).toFixed(2))
       //we used toFixed(2) becoz we need only 2 Decimal value
       //Show the Result
       result.innerHTML=`<span>BMI=${bmi}</span>`
       if (bmi<18.6) {
        result.innerHTML=`Under Weight and the BMI is ${bmi}`
       }else if(bmi>=18.6 && bmi<=24.9){
        result.innerHTML=`Normal Range and the BMI is ${bmi}`

       }else{
        result.innerHTML=`Greater than 24.9 and the BMI is ${bmi}`
       }
    }

})



