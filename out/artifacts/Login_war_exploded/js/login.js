//validations for email and password;
var attemp  = 3;//this is for count number of attempts;
//login function when users click;
function validation() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //invalid email setting.
    var emailReg = "#" || "@" || "!" || "~" || "$" || "%" || "^" || "&" || "*"
        || "/" || ">" || "<" || "(" || ")" || "{" || "}" || "[" || "]" || ";" || ":" || "'" || "." ||
        "," || "-" || "_" || "+" || "=";

    //the email should match the test one, then it is successful.
    if(email == "xxx123456@gmail.com" && password == "123456hhh")
    {
        alert("Login Successfully......");
        window.location  = "success.html";
        return false;
    }

    //when user enter the empty email or password, then show alert.
    else if(email === '' ||  password === '')
    {
        alert("Please fill out this fields.");
        return false;
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

    //
    else if(!(email).match(emailReg))
    {
        alert("Invalid email.");
        return false;
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
    else {
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}