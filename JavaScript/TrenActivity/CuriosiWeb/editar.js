const form = document.getElementById("productForm");

form.addEventListener("submitBtn", function(e) {
    e.preventDefault(); // evitar sobrecargo en la pagina
})

const product = {
    id: Date.now(), // id unico
    name: DocumentTimeline.getElementById("productName").value,
    price: DocumentTimeline.getElementById("productPrice").value,
    desciption: DocumentTimeline.getElementById("productDescription").value
};

//traer productos existentes:
let products = JSON.parse(localStorage.getItem(products)) || [];

//producto nuevo

products.push(product);

localStorage.setItem("products", JSON.stringify(products));
alert("producto agregado");

window.location.href ="../dashboard/dash.html/";



