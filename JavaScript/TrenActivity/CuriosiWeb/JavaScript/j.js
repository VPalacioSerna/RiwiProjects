// Variables Globales
const addShoes = document.querySelector(".list-shoes");

const listShoes = [
  {
    img: "./img/icons/icon-tenis.png",
    name: "adidas Performance",
    description: "Tenis adidas Performance Galaxy 7 Azul",
    price: 223900,
  },
  {
    img: "./img/icons/icon-tenis.png",
    name: "adidas Performance",
    description: "Tenis adidas Performance Galaxy 7 Azul",
    price: 223900,
  },
];
// Guardar Data Local en el localstorage

localStorage.setItem("shoes", JSON.stringify(listShoes));

// Funcion Render

function render() {
  // Trae los datos del localStorage
  const data = localStorage.getItem("shoes");
  const shoes = data ? JSON.parse(data) : [];

  console.log(shoes);
  // Recore la data que esta en el localStorage y la muestra en el landing
  shoes.forEach((shoes) => {
    html = `
            <div class="col-md-3">
              <div class="card shadow-sm rounded-4 p-3">
                <!-- Header -->
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 class="mb-0 fw-bold">${shoes.name}</h5>
                  </div>
                  <span class="text-danger fs-4">❤</span>
                </div>
                <!-- Imagen -->
                <div class="text-center my-3">
                  <img src="${shoes.img}" class="img-fluid" alt="Car" />
                </div>

                <!-- Info -->
                <div
                  class="d-flex justify-content-between text-muted small mb-3"
                >
                  <p>${shoes.description}</p>
                </div>
                <!-- Footer -->
                <div class="d-flex justify-content-between align-items-center">
                  <div>$ ${shoes.price}</div>
                  <a href="#" class="btn btn-primary rounded-3"
                    >Whatsapp Info</a
                  >
                </div>
              </div>
            </div>
  `;
    // Inserta el HTML en el landing
    addShoes.innerHTML += html;
  });
}

// Muestra los Shoes en landing
render();
