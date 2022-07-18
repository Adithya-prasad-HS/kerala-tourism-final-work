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