// Variables Globales
const addListproducts = document.querySelector("#productsTable");
const addProductButton = document.querySelector(".add");
const updateButton = document.querySelector(".update");
const deleteButton = document.querySelector(".delete");

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
                <td><img src="${product.img}" alt="${product.name}" width="50"></td>
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
    document.getElementById("productsTable").innerHTML += row;
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

//En el boton de log out sale y va al login para iniciar sesion o ir a la landing
document.addEventListener('click', (event) => {
  const boton = event.target.closest('#btnLogOut');
  if (boton) {
    sessionStorage.removeItem('session');
    window.location = './login.html';
  }
})
