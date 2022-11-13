let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];

displayprod(cartItems)

var amount = 0;

function displayprod(data){

    document.querySelector("#productarea").innerHTML ="";


      data.forEach(function (elem,index){

          let div1 = document.createElement("div");

          let imageDis = document.createElement("img")
          imageDis.setAttribute("src",elem.image);

          let tiTle = document.createElement("p")
          tiTle.innerText = elem.title;

          let span1 = document.createElement("span");
          
          
          let titlePrice = document.createElement("p")
          titlePrice.innerText =  "Deal Price:";

          let dealPrice = document.createElement("h5")
          dealPrice.innerText =elem.offerPrice+".00";
          
          let mrp = document.createElement("p")
          mrp.innerText = "M.R.P: "+elem.price+".00";
          mrp.style.textincoration = "line-through";
          
          
          let saving = document.createElement("p")
          saving.innerText = "You Save: "+elem.save;

          let quant = document.createElement("p")
          quant.innerText = "Quantity: "+" "+elem.count;

          let proTotal = elem.offerPrice * elem.count;

          let total = document.createElement("h2");
          total.innerText = "Total: "+" "+proTotal;

          let removebtn = document.createElement("button");
          removebtn.innerText = "Remove"
          removebtn.addEventListener("click",function(){

            amount-=(elem.offerPrice *elem.count);
            deleteData(cartItems,index);
            
          })
                   
          span1.append(titlePrice,dealPrice);

          div1.append(imageDis,tiTle,span1,mrp,saving,quant,total,removebtn);

          document.querySelector("#productarea").append(div1);
        
       })

            
  }



  for(let i=0; i<cartItems.length; i++){
      amount+=cartItems[i].offerPrice * cartItems[i].count;
  }

  let cartdiv = document.querySelector("#cartTop");

  let totalCart = document.createElement("h2");
  totalCart.innerText = "Cart Total : "+" ";


  let totalCartValue = document.createElement("h2");
  totalCartValue.innerText = amount;

  cartdiv.append(totalCart,totalCartValue);

  var promoTag = document.querySelector("#afterPromo");
  promoTag.innerText = amount;



  document.querySelector("#btnApply").addEventListener("click",function(){

    let promoInput = document.querySelector("#proInput").value.toLowerCase();

    if(promoInput=="masai20"){
        document.querySelector("#afterPromo").innerText = "";

        let disCount = amount*0.2;
        var disCountApplied = amount-disCount;

        
        promoTag.innerText = disCountApplied;
        alert("Promo Code Applied Successfully!");

    }
    if(promoInput!="masai20"){
        promoTag.innerText = amount;
        alert("Invalid! Promo Code");

    }

})



document.querySelector("#btnCheckout").addEventListener("click",function(){
    
    let final = document.querySelector("#afterPromo").innerText;
   
    localStorage.setItem("finalAmount", final);

    location.href = "./payment.html";
})


function deleteData(data,index){
    data.splice(index,1)
    localStorage.setItem("cartProducts", JSON.stringify(data));
    displayprod(cartItems);
    totalCartValue.innerText = amount;
    promoTag.innerText = amount;
}


