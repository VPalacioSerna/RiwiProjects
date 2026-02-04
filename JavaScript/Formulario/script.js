const btnAdd = document.getElementById("btn");
const tableBody = document.getElementById("tableBody");

const txt_name = document.getElementById("txt_name");
const txt_lastName = document.getElementById("txt_last_name");
const txt_email = document.getElementById("email");

const modalEl = document.getElementById("miModal");
const miModal = new bootstrap.Modal(modalEl);
//se crea un elemento para controlar cuando se abre el modal
//se hace para controlar cuando tengo una logica para cargar antes de que se deba abrir el modal

const modalTitle = document.getElementById("miModalLabel");
const modal_id = document.getElementById("modal_id");
const modal_name = document.getElementById("modal_name");
const modal_lastname = document.getElementById("modal_lastname");
const modal_email = document.getElementById("modal_email");
const btnModalSave = document.getElementById("btnModalSave");

const STORAGE_KEY = "people";

let people = loadPeople();
 
render();     

//Obtner los datos de la persona del localStorage
function loadPeople() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; //short circuit validation  |  ademas no se necesitaria inicializar una lista
                                                              // falsy: null, undefined, "", 0,  |  truty: 
}


//Guardar los datos de la persona en el localStorage 
function savePeople() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
}


//Dar el proximo id
function nextId() {
  // si esta vacio (en este caso si es cero que es lo mismo de falsy)
  return people.length ? Math.max(...people.map((p) => p.id)) + 1 : 1;
}

//Limpiar los campos de los inputs
function clearForm(){
  txt_name.value == "";
  txt_lastName.value == "";
  txt_email.value == "";
}

//Validar formulario con datos
function validateForm() {
  const ok = txt_name.value.trim() !== "" && txt_lastName.value.trim() !== "" && txt_email.value.trim() !== "";

  //togle -> Si el elemento tiene la clase, se la quita; si no la tiene, se la pone.
  // En este caso funciona como: si esta en vacio entonces pone el "is-invalid" pero si esta en "is-invalid" lo pone en blanco
  txt_name.classList.toggle("is-invalid", txt_name.value.trim() === "");
  txt_lastName.classList.toggle("is-invalid", txt_lastName.value.trim() === "");
  txt_email.classList.toggle("is-invalid", txt_email.value.trim() === "")

  return ok
}

function getPersonById(id) {
  return people.find((p) => p.id === id);
}

// Renderizado de la tabla en html
function render() {
  // people crea los elementos que ya hay en el LS o los empieza a crear
  // map() permite recorrer (foreach) cada elemento del array y modificarlo (añadir info en este caso)  | sintaxis -> (array.map(iterador))
  tableBody.innerHTML = people.map((p) => 
    `
    <tr>
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.lastname}</td>
      <td>${p.email}</td>
      <td>
        <button type="button" class="btn btn-sm btn-info btn-details" data-id="${p.id}">Detalles</button>
        <button type="button" class="btn btn-sm btn-warning btn-edit" data-id="${p.id}">Editar</button>
        <button type="button" class="btn btn-sm btn-danger btn-delete" data-id="${p.id}">Eliminar</button>

      </td>
    </tr>
    
    `
  )
  .join(""); //se usa esto para decirle a la lista que el devuelve que lo devuelva en un string
}


// Evento boton agregar
btnAdd.addEventListener("click", () =>{
  if(!validateForm()){
    Swal.fire({ title: "Incorrecto", text: "Completa los campos", icon: "error" });
    return; //se pone el return porque en las arrow function debe de retornar algo
  }

  const newPerson = {
    id: nextId(),
    name: txt_name.value.trim(),
    lastname: txt_lastName.value.trim(),
    email: txt_email.value.trim()
  }

  people.push(newPerson);
  savePeople();
  render();
  clearForm();

  Swal.fire({ title: "Correcto", text: "Registro agregado", icon: "success" });

});

// LOGICA BOTONES DETAILS - EDITAR - ELIMINAR

// Delegacioncita
tableBody.addEventListener("click", (e) => {
  const btnDetails = e.target.closest(".btn-details");
  const btnEdit = e.target.closest(".btn-edit");
  const btnDelete = e.target.closest(".btn-delete");

  if (btnDetails) {
    const id = Number(btnDetails.dataset.id);
    openDetailsModal(id);
    return;
  }

  if (btnEdit) {
    const id = Number(btnEdit.dataset.id);
    openEditModal(id);
    return;
  }

  if (btnDelete) {
    const id = Number(btnDelete.dataset.id);
    deletePerson(id);
    return;
  }
});

// Modales

// solo lectura
function openDetailsModal(id) {
  const person = getPersonById(id);
  if (!person) return;

  modalTitle.textContent = `Detalles persona id#${person.id}`;
  modal_id.value = person.id;

  modal_name.value = person.name;
  modal_lastname.value = person.lastname;
  modal_email.value = person.email;

  // Desactivo los inputs del modal
  modal_name.disabled = true;
  modal_lastname.disabled = true;
  modal_email.disabled = true;

  // Desactivo boton de guardar
  btnModalSave.classList.add("d-none");

  //Muestro el modal xd
  miModal.show();
}

// Editar: modal editable y botonsave
function openEditModal(id) {
  const person = getPersonById(id);
  if (!person) return;

  modalTitle.textContent = `Editar persona id#${person.id}`;
  modal_id.value = person.id;

  modal_name.value = person.name;
  modal_lastname.value = person.lastname;
  modal_email.value = person.email;

  // Editable
  modal_name.disabled = false;
  modal_lastname.disabled = false;
  modal_email.disabled = false;

  btnModalSave.classList.remove("d-none");

  miModal.show();
}

// Listener del boton guardar cambios modal editar
btnModalSave.addEventListener("click", () => {
  const id = Number(modal_id.value);
  const person = getPersonById(id);
  if (!person) return;

  const name = modal_name.value.trim();
  const lastname = modal_lastname.value.trim();
  const email = modal_email.value.trim();

  if (name === "" || lastname === "" || email === "") {
    Swal.fire({ title: "Incorrecto", text: "Completa los campos del modal", icon: "error" });
    return;
  }

  // Actualizar objeto en el rray
  person.name = name;
  person.lastname = lastname;
  person.email = email;

  savePeople();
  render();
  miModal.hide();

  Swal.fire({ title: "Correcto", text: "Registro actualizado", icon: "success" });
});

// Eliminaichon
function deletePerson(id) {
  Swal.fire({
    title: "¿Eliminar?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (!result.isConfirmed) return;

    people = people.filter((p) => p.id !== id);
    savePeople();
    render();

    Swal.fire({ title: "Eliminado", text: "Registro eliminado", icon: "success" });
  });
}