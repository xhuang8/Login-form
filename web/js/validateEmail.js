function validateEmail() {
    //var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    var x = document.myform.email.value;
    var atPosition = x.indexOf("@");
    var dotPosition = x.lastIndexOf(".");
    //var address =   document.forms[email_id].elements[email].value;

    if(atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= x.length) {
        alert("Please enter a valid email address \n");
    }
}