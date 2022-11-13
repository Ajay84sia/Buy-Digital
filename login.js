document.querySelector("#proceedbtn").addEventListener("click", checkUser);



function checkUser(){

    let obj={
        eMail:"abc@ymail.com",
        firstName:"zzz",
        lastName:"xxx",
        mobNum:"0000000000",
        passWord:"9898989898"
    }

    let arrObj = [obj];

    
    var mobileNum = document.querySelector("#mob").value

    var getData = JSON.parse(localStorage.getItem("userData")) || arrObj;
     
    var flag = false;


    if(getData.length == null){
        alert("Please click on SIGN UP for registration")
    }

    


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