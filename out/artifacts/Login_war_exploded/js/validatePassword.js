//validations for the password.
//the password should have 8 characters, one uppercase, one lowercase, one number.
var passwordInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

//show the messages when user click the password field.
passwordInput.onfocus = function ()
{
    document.getElementById("passwordMessages").style.display = "block";
}

//hide the message when user click outside of the password field.
passwordInput.onblur = function ()
{
    document.getElementById("passwordMessages").style.display = "none";
}

//type something
passwordInput.onkeyup = function () {
    //validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters))
    {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters))
    {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //validate numbers
    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers))
    {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else
    {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //validate length
    if(passwordInput.value.length >= 8)
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else
    {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}


