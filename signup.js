
document.getElementById("submitBtn").disabled=true;
document.getElementById("submitBtn").addEventListener("click", submitForm);


let isFullNameValid = false;
let isEmailValid = false;
let isPhoneNumberValid = false;
let isAddressValid = false;
let isDOBValid = false;


function validateFullName() {

    let fullName = document.getElementById("fullName").value;
    if (fullName.length == 0) {
        document.getElementById("fullNameError").innerHTML="This should not be left blank";
        return false;
    }
     else if (fullName.length <= 5 || fullName.length > 20) {
        document.getElementById("fullNameError").innerHTML="Full Name should be between 5 and 20 characters";
        return false;
        
    } else {
        document.getElementById("fullNameError").innerHTML = "";
        isFullNameValid = true;
    }
    enableSubmitBtn();
    return isFullNameValid; 

   
}


function validateEmail() {
    let email = document.getElementById("email").value;
  if (email.length==0) {
        document.getElementById("emailError").innerHTML="This should not be left blank";
       
  return false;
    } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML= "Invalid Email";
        return false;
    } else {
        document.getElementById("emailError").innerHTML= "";

        isEmailValid=true;
    }
        enableSubmitBtn();
        return isEmailValid;
    }
    }
   

function validatePhoneNumber() {
    let phoneNumber = document.getElementById("phoneNumber").value;

    if (!phoneNumber) {
        
        document.getElementById("phoneNumberError").innerHTML="This should not be left blank"; 
         return false;
        
    }  else if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById("phoneNumberError").innerHTML= "Phone Number should be 10 digits(only numeric values)";
    return false;
    }else{
        document.getElementById("phoneNumberError").innerHTML="";
      isPhoneNumberValid = true;
    }
      enableSubmitBtn();
      return isPhoneNumberValid;
    }

   

function validateAddress() {
    let address = document.getElementById("address").value;

    if (address.length < 5 || address.length > 100) {
        document.getElementById("addressError").innerHTML= "Address should be between 5 and 100 characters";
      
        return false;
    } else {
        document.getElementById("addressError").innerHTML="";
        isAddressValid = true;
    }

        enableSubmitBtn();
        return isAddressValids;
    

 
}

function validateDOB() {
    let dob = document.getElementById("dob").value;

if(dob==""){
    document.getElementById("dobError").innerHTML="This Can not be left blank";
}else{
        isDOBValid= true;
}
        enableSubmitBtn();
        return isDOBValid;
    
    }
   

function enableSubmitBtn(){
   
    if (isFullNameValid  && isEmailValid && isPhoneNumberValid  && isDOBValid) 
    {
     
      document.getElementById("submitBtn").disabled=false;
      
    
    } else {
      
        document.getElementById("submitBtn").disabled=true;
    }



}

function submitForm(event) {
    event.preventDefault()
    let isFormValid = isFullNameValid  && isEmailValid && isPhoneNumberValid  && isDOBValid; 
    if (isFormValid== true) {
       
        alert("Form Submitted");
        return true;
    }
}















































