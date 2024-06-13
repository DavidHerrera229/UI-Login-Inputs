let attempt=3;

function validate(){
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;
        if (username == "david" && password == "1234") {
            alert ("Login Successful");
            return false;
        }
        else {
            attempt --;
            alert("You have left "+attempt+" attempt;");
        }
}