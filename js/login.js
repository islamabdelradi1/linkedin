
function logn(){
var email=document.getElementById("email").value;
var emaill=document.getElementById("email");
var pass=document.getElementById("password").value;
var passs=document.getElementById("password");
var erroremail=document.getElementById("erroremail");
var errorpass=document.getElementById("errorpass");
var ors=document.getElementById("ors");

    if (email.indexOf("@") == -1 || email.length < 7) {
        emaill.style.border="1px solid brown";
        erroremail.style.display="block";
        ors.style.top= "618px";
        return false;
    }
    else if(pass.length < 5){
        passs.style.border="1px solid brown";
        errorpass.style.display="block";
        ors.style.top="658px";
        return false;
    }
}
