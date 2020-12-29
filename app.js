var inputAge = document.querySelector("#Age");
var eligibility = document.querySelector("#eligibility");
var btn = document.querySelector("#btn-primary");

btn.addEventListener('click' , EligibilityMessage);

function EligibilityMessage(){

    var inputTxt = inputAge.value;
    
    if(inputTxt >= 18){
        eligibility.innerText = "You are Eligible";
    }
    else{
        eligibility.innerText = "You are not Eligible";
    }   
}





