// Variables Globales
const addListproducts = document.querySelector("#list");
const addProductButton = document.querySelector(".add");
const updateButton = document.querySelector(".update");
const deleteButton = document.querySelector(".delete");

// list prueva

// let products = [
//   {
//     id: 2,
//     image: "./img/icons/icon-tenis.png",
//     name: "zapato",
//     description: "zapato de cuero",
//     price: 550442,
//     stock: 5,
//     viewStatus: "publicado",
//   },
//   {
//     id: 3,
//     image: "./img/icons/icon-tenis.png",
//     name: "zapato",
//     description: "zapato de cuero",
//     price: 550442,
//     stock: 5,
//     viewStatus: "Notpublicado",
//   },
// ];

// Guardo datos en localStorage
// localStorage.setItem("products", JSON.stringify(products));

// Traer datos del localStorage
const data = localStorage.getItem("products");
let productsList = data ? JSON.parse(data) : [];

// Para mostrar los productos
function renderProducts() {
  addListproducts.innerHTML = "";
  productsList.forEach((product) => {
    const row = `
            <tr>
                <td>${product.id}</td>
                <td><img src="${product.image}" alt="${product.name}" width="50"></td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.status}</td>
                <td>
                    <button class="btn btn-sm btn-warning update">Edit</button>
                    <button class="btn btn-sm btn-danger delete">Delete</button>
                    <button class="btn btn-sm btn-success public">Publicar</button>
                    <button class="btn btn-sm btn-secondary notPublic">Ocultar</button>
                </td>
            </tr>
        `;
    document.getElementById("list").innerHTML += row;
  });
}


// Detetor de Eventos
document.addEventListener("click", function (event) {
  // Add
  if (event.target.classList.contains("add")) {
    window.location = "./addProduct.html";
  }
  // Traer id al ser click
  let fila = event.target.closest("tr");
  let id = fila.children[0].textContent.trim();
  //   console.log(id);
  //   Update
  if (event.target.classList.contains("update")) {
    // window.open("./addProduct.html", "_self");
    window.location = "./addProduct.html";
  }
  //   Delete
  if (event.target.classList.contains("delete")) {
    // Filtrar para eliminar el producto
    productsList = productsList.filter((e) => e.id != id);
    // Actualizar localStorage con la nueva lista
    localStorage.setItem("products", JSON.stringify(productsList));

    // Volver a renderizar la tabla actualizada
    renderProducts();
  }
  // Publicar
  if (event.target.classList.contains("public")) {
    productsList = productsList.map((e) =>
      e.id == id ? { ...e, status: "public" } : e,
    );
    localStorage.setItem("products", JSON.stringify(productsList));
    // Volver a renderizar la tabla actualizada
    renderProducts();
  }
  // No Publicar
  if (event.target.classList.contains("notPublic")) {
    productsList = productsList.map((e) =>
      e.id == id ? { ...e, status: "no publicado" } : e,
    );
    localStorage.setItem("products", JSON.stringify(productsList));
    // Volver a renderizar la tabla actualizada
    renderProducts();
  }
});

// Renderizar productos al cargar la página
renderProducts();
