// Variables Globales
const name = document.querySelector(".name");
const brand = document.querySelector(".brand");
const description = document.querySelector(".description");
const price = document.querySelector(".price");
const stock = document.querySelector(".stock");
const status = document.querySelector(".status");




// Eventos

document.addEventListener("click", function(e){

    // Discard
    if(e.target.classList.contains("discard")){
        
        alert("discard")
    }
    // Save
    if(e.target.classList.contains("save")){
        // alert("save")
        // Traer datos del localStorage
        const data = localStorage.getItem("products");
        let productsList = data ? JSON.parse(data) : [];

        p
    }
})