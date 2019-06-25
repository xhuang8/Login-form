function validateEmail(email_id, email) {
    var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    var address =   document.forms[email_id].elements[email].value;

    if (reg.test(address) == false)
    {
        
    }
}