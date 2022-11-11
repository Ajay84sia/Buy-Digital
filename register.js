document.querySelector("#form").addEventListener("submit",submitData);


function submitData(event){

    let dataArr = JSON.parse(localStorage.getItem("userData")) || [];

    event.preventDefault();
    let firstName = document.querySelector("#fname").value
    let lastName = document.querySelector("#lname").value
    let eMail =document.querySelector("#email").value
    let mobNum =document.querySelector("#number").value
    let passWord =document.querySelector("#password").value


    let dataObj = {
        firstName,
        lastName,
        eMail,
        mobNum,
        passWord
    }

    if(dataObj.firstName==""||dataObj.lastName==""||dataObj.eMail==""||dataObj.mobNum==""||dataObj.passWord==""){
        alert("Please fill all the details!");
    }else{
        dataArr.push(dataObj)
        localStorage.setItem("userData",JSON.stringify(dataArr))
        alert("Successfully Registered!")
        location.href = "./login2.html";
    }
    
    

    



}