let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input" , function(){
    let leftc = 10 - inp.value.length;
    if(leftc < 0){
        span.textContent = leftc;
        span.style.color = "red";
    }
    else {
        span.textContent = leftc;
        span.style.color = "black";
    }
});