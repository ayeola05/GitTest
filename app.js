document.querySelector("#btn").addEventListener("click", function(){
    document.querySelector("h1").textContent = "Kenny Changed this text to green";
    document.querySelector("h1").style["color"] = "green";
    setTimeout(()=>{
        document.querySelector("p").textContent = "Please Wait.....";
    }, 1000);
    setTimeout(()=>{
        document.querySelector("p").textContent = "Loading.....";
    }, 2000);
    setTimeout(()=>{
        document.querySelector("p").textContent = "Done.";
    }, 4000);
    setTimeout(()=>{
        document.querySelector("h2").textContent = "Kenny Changed this text to yellow";
        document.querySelector("h2").style["color"] = "yellow";
        document.querySelector("p").textContent = "";
    }, 5000);
})