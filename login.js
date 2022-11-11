document.querySelector("#proceedbtn").addEventListener("click", checkUser);



function checkUser(){

    
    var mobileNum = document.querySelector("#mob").value

    var getData = JSON.parse(localStorage.getItem("userData"))
     
    var flag = false;

    


    for(let i=0; i<getData.length; i++){
                
        if(mobileNum == getData[i].mobNum){
            flag = true;
            alert("User already registered")
            location.href = "./login2.html";
            break;            
        }
      
    }

    if(mobileNum == ""){
        alert("Enter Your Mobile Number");
    }else if(flag==false){
        alert("User not registered")
        location.href = "./register.html";
    }
        

    
}