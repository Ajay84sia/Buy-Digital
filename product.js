
let bag = [];
let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];

fetch("./data.json")
.then((res) => res.json())
.then(data => 
  { bag = data; 
    displayprod(data);
});




// search functionality

function handleSearch(){

  let inp = document.querySelector("#search").value;
  console.log(inp)
  let newData = bag.filter(function(elem){
    return elem.title.toLowerCase().includes(inp.toLowerCase())
  })
  displayprod(newData)
}

 // sort price functionality

function handlePrice(){
   
    let selected =  document.querySelector("#priceSort").value;

      if(selected == "LTH"){
        bag.sort((a,b) => a.offerPrice - b.offerPrice);
      }
      if(selected == "HTL"){
        bag.sort((a,b) => b.offerPrice - a.offerPrice);
      }
      if(selected == ""){
        bag.sort((a,b) => a.id - b.id);
      }
      
    displayprod(bag)
    
  }
  


  // sort category functionality

  function handleCat(){

    
    let selectCat =  document.querySelector("#catSort").value;

      if(selectCat == "audio"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("audio")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "tv"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("tv")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "tv"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("tv")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "phone"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("phone")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "computer"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("computer")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "laptop"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("laptop")
          
        }) 
        displayprod(newData);       
      }
      
      if(selectCat == ""){
        bag.sort((a,b) => a.id - b.id);
        displayprod(bag)
      }
       
    
  }


  // display functionality

  function displayprod(data){

    document.querySelector("#productarea").innerHTML ="";


      data.forEach(function (elem){

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
          mrp.style.textDecoration = "line-through";
          
          
          let saving = document.createElement("p")
          saving.innerText = "You Save: "+elem.save;

          let btn = document.createElement("button")
          btn.innerText = "Add To Cart";
          btn.addEventListener("click", function () {
            let x = cartItems.filter(data => data.title == elem.title);
            if(x.length == 0){
                cartItems.push({...elem , count:1});
                console.log("inside if")
                alert("product added in the cart")
              }else{
                console.log(x[0].count++, "inside else")
                alert("product quantity increased")
            }
            localStorage.setItem("cartProducts",JSON.stringify(cartItems))            
          })
          
          span1.append(titlePrice,dealPrice);

          div1.append(imageDis,tiTle,span1,mrp,saving,btn);

          document.querySelector("#productarea").append(div1);
        
       })
      
  }


