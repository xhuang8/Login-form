function validateForm() {
    var el = document.myform.email.value;
    var pw = document.myform.psw.value;
    var email = "Enter Email";
    var password = "Enter Password";

    if(el === pw){
        alert("Welcome");
        window.location="sec.html";
        return false;
    }
    else {
        alert("Please Try again!");
        return false;
    }
}