const menu = document.getElementById("menu");
const checked = document.getElementById("checkbox3");

function menuHandler(){
    console.log("hello");
    if(!checked.checked){
        menu.classList.remove("active"); 
    }
    else{
        menu.classList.add("active");
    }
    // menu.classList.remove("visible");
    
}


