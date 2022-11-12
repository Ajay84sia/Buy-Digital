let payment = localStorage.getItem("finalAmount");

let amountls = document.querySelector("#lsAmount");
amountls.innerText = "Payable Amount :"+" ₹"+payment+"/-";


// document.querySelector("#payForm").addEventListener("submit",function(event){

//         event.preventDefault();

//         let holderName = document.querySelector("#holdName").value;
//         console.log(holderName)
//         let cardNum = document.querySelector("#CardNumber").value;
    
        
//         let cvvCode = document.querySelector("#cvv").value;
    
//         if(cardNum =="1234567812345678" && cvvCode == "321"){
//             alert("Wohoo, Payment Successful!")
//         }

//         if(cardNum !="1234567812345678" || cvvCode != '321'){
//             alert("Wrong Credentials, Please Check again!")
//         }
     

// });