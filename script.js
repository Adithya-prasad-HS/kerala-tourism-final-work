function validatefirstname(){
    var fname=document.getElementById("firsname");
    if(fname.value.length==0){
        fname.style.border="2px solid red";
        return false;
    }
    else{
        fname.style.border="2px solid green";
        return true;
    }
}
function validatelastname(){
    var lname=document.getElementById("lname");
    if(lname.value.length==0){
        lname.style.border="2px solid red";
        return false;
    }
    else{
        lname.style.border="2px solid green";
        return true;
    }
}
function validateemail(){
    var email=document.getElementById("email");
    if(email.value.length==0){
        email.style.border="2px solid red";
        return false;
    }
    else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.border="2px solid red";
        return false;
    }
    else{
        email.style.border="2px solid green";
        return true;
    }
}

const btn = document.querySelector(".btn");
        

        btn.addEventListener("click",()=>{
       
            document.body.classList.toggle("active")
        })
        
function validatepass(){
            var pass=document.getElementById("pass");
            if(pass.value.length==0){
                pass.style.border="2px solid red";
                return false;
            }
            else if(!pass.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
                pass.style.border="2px solid red";
                return false;
            }
            else{
                pass.style.border="2px solid green";
                return true;
            }
        }
