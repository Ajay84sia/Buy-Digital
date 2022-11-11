

let btn = document.querySelector("#proceedbtn")
btn.addEventListener("click",checkData);

function checkData(){

    let enterMail = document.querySelector("#eMail").value;
    let enterPass = document.querySelector("#pass").value;

    var getData = JSON.parse(localStorage.getItem("userData"))
    var flag = false;
    for(let i=0; i<getData.length; i++){

                
        if(enterMail == getData[i].eMail && enterPass == getData[i].passWord){
            flag = true;
            alert("Login Successful! "+" Welcome, "+getData[i].firstName)
            location.href = "./product.html";
            break;            
        }
      
    }

    if(enterMail== "" || enterPass == ""){
        alert("Please, enter all the details");
    }else if(flag==false){
        alert("Wrong Credentials!")
    }
}