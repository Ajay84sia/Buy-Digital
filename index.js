

  fetch("./data.json")
    .then((res) => res.json())
    .then(data => 
        displayprod(data)
    );
  

    function displayprod(data){


        for(let i=0; i<5;i++){

            let div1 = document.createElement("div");

            let imageDis = document.createElement("img")
            imageDis.setAttribute("src",data[i].image);

            let tiTle = document.createElement("p")
            tiTle.innerText = data[i].title;

            let span1 = document.createElement("span");
            
            
            let titlePrice = document.createElement("p")
            titlePrice.innerText =  "Deal Price:";

            let dealPrice = document.createElement("h5")
            dealPrice.innerText =data[i].offerPrice+".00";
            
            let mrp = document.createElement("p")
            mrp.innerText = "M.R.P: "+data[i].price+".00";
            mrp.style.textDecoration = "line-through";
            
            
            let saving = document.createElement("p")
            saving.innerText = "You Save: "+data[i].save;

            let btn = document.createElement("button")
            btn.innerText = "OFFERS AVAILABLE";

            span1.append(titlePrice,dealPrice);

            div1.append(imageDis,tiTle,span1,mrp,saving,btn);

            document.querySelector("#audiofestinner").append(div1);
        }


        for(let i=10; i<15;i++){

            let div2 = document.createElement("div");

            let imageDis = document.createElement("img")
            imageDis.setAttribute("src",data[i].image);

            let tiTle = document.createElement("p")
            tiTle.innerText = data[i].title;

            let span1 = document.createElement("span");
            
            
            let titlePrice = document.createElement("p")
            titlePrice.innerText =  "Deal Price:";

            let dealPrice = document.createElement("h5")
            dealPrice.innerText =data[i].offerPrice+".00";
            
            let mrp = document.createElement("p")
            mrp.innerText = "M.R.P: "+data[i].price+".00";
            mrp.style.textDecoration = "line-through";
            
      
            let saving = document.createElement("p")
            saving.innerText = "You Save: "+data[i].save;

            let btn = document.createElement("button")
            btn.innerText = "OFFERS AVAILABLE";

            span1.append(titlePrice,dealPrice);

            div2.append(imageDis,tiTle,span1,mrp,saving,btn);

            document.querySelector("#besttvseller").append(div2);
        }


        for(let x=5; x<10;x++){

 
            let div3 = document.createElement("div");

            let imageDis = document.createElement("img")
            imageDis.setAttribute("src",data[x].image);

            let tiTle = document.createElement("p")
            tiTle.innerText = data[x].title;

            let span1 = document.createElement("span");
            
            
            let titlePrice = document.createElement("p")
            titlePrice.innerText =  "Deal Price:";

            let dealPrice = document.createElement("h5")
            dealPrice.innerText =data[x].offerPrice+".00";
            
            let mrp = document.createElement("p")
            mrp.innerText = "M.R.P: "+data[x].price+".00";
            mrp.style.textDecoration = "line-through";
            
      
            let saving = document.createElement("p")
            saving.innerText = "You Save: "+data[x].save;

            let btn = document.createElement("button")
            btn.innerText = "OFFERS AVAILABLE";

            span1.append(titlePrice,dealPrice);

            div3.append(imageDis,tiTle,span1,mrp,saving,btn);

            document.querySelector("#bestsellingaudio").append(div3);
        }







    }