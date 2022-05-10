function logn() {
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var emaill=document.getElementById("email");
    var passs=document.getElementById("password");
    if (email.indexOf("@") == -1 || email.length < 6){
        emaill.style.border="1px solid red";
        return false;
    }
    else if(pass.length < 4){
        passs.style.border="1px solid red";
        return false;

    }
}