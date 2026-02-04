// Main Landing

// Contenedor
const container = document.getElementById("list-shoes");
if (!container) {
  console.error("No se encontró el contenedor list-shoes");
}

// Productos iniciales
const products = [
  {
    id: 1,
    name: "AeroPro Strike G5",
    description: "Tenis adidas Performance Galaxy 7 Azul",
    brand: "Nike",
    price: 249.0,
    img: "./img/shoes/img-tenis-man (1).jpg",
    status: "public",
    stock: 5,
  },
  {
    id: 2,
    name: "SwiftCourt Elite X",
    description: "Tenis adidas Performance Galaxy 7 Azul",
    brand: "Adida",
    price: 129.99,
    img: "./img/shoes/img-tenis-man (2).jpg",
    status: "public",
    stock: 5,
  },
  {
    id: 3,
    name: "ProTour 12-Pack Bag",
    description: "Tenis adidas Performance Galaxy 7 Azul",
    brand: "Puma",
    price: 85.5,
    img: "./img/shoes/img-tenis-woman (1).jpg",
    status: "public",
    stock: 5,
  },
  {
    id: 4,
    name: "Championship Extra Duty",
    description: "Tenis adidas Performance Galaxy 7 Azul",
    brand: "Vans",
    price: 14.0,
    img: "./img/shoes/img-tenis-woman (2).jpg",
    status: "public",
    stock: 5,
  },
];

// Cargar datos SOLO si no existen
function cargarDatos() {
  const data = localStorage.getItem("products");
  if (!data) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

// Renderizar productos
function renderProducts() {
  const data = localStorage.getItem("products");
  const shoes = data ? JSON.parse(data) : [];

  // Limpiar contenedor (CLAVE)
  container.innerHTML = "";

  shoes.forEach((p) => {
    if (p.status === "public") {
      container.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border rounded-2 position-relative" >
                <button class="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle" style="width: 35px; height: 35px; padding: 0;" padding: 0;">
                    <i class="bi bi-heart"></i>
                </button>
                <img src="${p.img}" class="card-img-top" alt="${p.name}" object-fit: contain;">
                <div class="card-body">
                    <small class="text-success fw-bold">${p.brand}</small>
                    <h6 class="fw-bold mt-1">${p.name}</h6>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fw-bold fs-5">$${p.price}</span>
                        <a href="" class="btn btn-outline-dark btn-sm rounded-pill px-3 btn-moreInfo" data-id="${p.id}">View Info </a>
                    </div>
                </div>
            </div>
          </div>
        </div>`;
    }
  });
}

// Ejecutar al cargar

// WhatsApp
function abrirWpp(coleccion) {
  const tel = "57300000000";
  const msg = `Hola! Estoy interesado en ver la nueva colección de ${coleccion}.`;
  window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, "_blank");
}

// Ejecutar
cargarDatos();

renderProducts();

// Capturar el boton de mas info
document.addEventListener('click', function (event) {
    const btnMoreInfo = event.target.closest('.btn-moreInfo');

    if (btnMoreInfo) {
        event.preventDefault(); //para no cargar la pagina antes de cargar el local
        const id = Number(btnMoreInfo.dataset.id);  //Obtener el id por medio del data

        const productoSeleccionado = products.find(p => p.id == id);
        localStorage.setItem('detalleProducto', JSON.stringify(productoSeleccionado));

        window.location =  './landingInformation.html';
    }

})





