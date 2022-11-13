let payment = localStorage.getItem("finalAmount");

let amountls = document.querySelector("#lsAmount");
amountls.innerText = "Payable Amount :"+" ₹"+payment+"/-";


document.querySelector("#payForm").addEventListener("click",handlePayment);

function handlePayment(event){
    event.preventDefault();
    let holderName = document.querySelector("#holdName").value;
    console.log(holderName)
    let cardNum = document.querySelector("#CardNumber").value;
    console.log(cardNum)
    
    
    let cvvCode = document.querySelector("#cvv").value;
    console.log(cvvCode)

        if(holderName=="" || cardNum=="" || cvvCode==""){
            alert("Please Fill all details!")
        }else if(cardNum =="1234567812345678" && cvvCode == "321"){
            alert("Wohoo, Payment Successful!")
            location.href = "./order.html";
        }else if(cardNum !="1234567812345678" || cvvCode != '321'){
            alert("Wrong Credentials, Please Check again!")
        }
}

