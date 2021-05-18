var isEmailCorrect=false;
var isEmailCO=false;

function validateForm() {
    /*empty email*/ 
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      let ele = document.getElementById('error_msg');
        ele.innerHTML = 'Email address is required';
      isEmailCorrect=false;
    }
    /*valid email */
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(x)==false){
        let ele = document.getElementById('error_msg');
        ele.innerHTML = 'Please provide a valid e-mail address';
        isEmailCorrect=false;
    }
    else{
        isEmailCorrect=true;
    }
    /*columbia emails */
    var slice = x.slice(-2);
    if(slice.includes("co")){ 
        let ele = document.getElementById('error_msg');
        ele.innerHTML = 'We are not accepting subscriptions from Colombia emails';
        isEmailCO=false;
    }
    else{
        isEmailCO=true;
    }
    isFormValid();
}
    /*checkbox*/
var isCheckboxCorrect=false;
function validateCheckbox(){
    
    if(!myForm.checkbox.checked) {
        let ele = document.getElementById('error_msg');
        ele.innerHTML = 'You must accept the terms and conditions';
        isCheckboxCorrect=false;
    }
    else{
        isCheckboxCorrect=true;
    }
    isFormValid();
    
}
function isFormValid(){
    if(isCheckboxCorrect==true && isEmailCorrect==true && isEmailCO==true){
        document.getElementById("arrow_button").style.display = "block";
        let ele = document.getElementById('error_msg');
        ele.innerHTML = '';
    }
    else{
        document.getElementById("arrow_button").style.display = "none";
    }
}
/*successfull email */
function success(){
    document.getElementById("tos").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("headings").style.display = "none";
    document.getElementById("headings_success").style.display = "block";
   
    return false;
    
}

