var emailField = document.getElementById("email-field");
var emailError = document.getElementById("error");

function validatemail(){

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email addresses should follow the format user@domain.com.";
        return false;
    }
    emailError.innerHTML = "";
}