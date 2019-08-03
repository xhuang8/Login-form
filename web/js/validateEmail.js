var emailInput = document.getElementById("email");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

//show the messages when user click the email field.
emailInput.onfocus = function ()
{
    document.getElementById("emailMessages").style.display = "block";
}

//hide the message when user click outside of the email field.
emailInput.onblur = function ()
{
    document.getElementById("emailMessages").style.display = "none";
}

emailInput.onkeyup = function () {
    //validate before @
    var beforeC = /[A-Z0-9._%+-]/g;
    if(emailInput.value.match(beforeC))
    {
        one.classList.remove("invalid");
        one.classList.add("valid");
    }
    else
    {
        one.classList.remove("valid");
        one.classList.add("invalid");
    }

    //validate after @
    var afterC = /@[A-Z0-9.-]/g;
    if(emailInput.value.match(afterC))
    {
        two.classList.remove("invalid");
        two.classList.add("valid");
    }
    else
    {
        two.classList.remove("valid");
        two.classList.add("invalid");
    }

    //validate .
    var dotP = /.[A-Z]{2,}/g;
    if(emailInput.value.match(dotP))
    {
        three.classList.remove("invalid");
        three.classList.add("valid");
    }
    else
    {
        three.classList.remove("valid");
        three.classList.add("invalid");
    }
}

/*function validateEmail() {
    //var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
    var x = document.myform.email.value;
    var atPosition = x.indexOf("@");
    var dotPosition = x.lastIndexOf(".");
    //var address =   document.forms[email_id].elements[email].value;

    if(atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= x.length) {
        alert("Please enter a valid email address \n atPostion:"+atPosition+"\n dotPosition:"+dotPosition);
        return false;
    }
    else {
        alert("You have valid email address");
    }
}
*/