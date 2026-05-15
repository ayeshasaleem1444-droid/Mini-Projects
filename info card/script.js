let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let container = document.querySelector("#container")
form.addEventListener("submit" , function(dets){
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let h4 = document.createElement("h4");
    h4.textContent = inputs[0].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[2].value;

    let pic = document.createElement("div");
    pic.classList.add("pic");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[3].value);

    

    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(p);

    pic.appendChild(img);
    card.appendChild(pic);

    container.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit" ){
            inp.value = "";
        }
        
        
    })

    
});
