let button = document.getElementById("btn")
let tableBody = document.getElementById('tableBody')
let cont = 0;


button.addEventListener('click', () => {

    let txt_name = document.getElementById("txt_name");
    let txt_lastName = document.getElementById("txt_last_name"); 
    let tableBody = document.getElementById("tableBody");
    let email = document.getElementById('email'); 
    
    if(txt_name.value != "" && txt_lastName.value != "" && email.value != ""){
        txt_name.classList.add('is-valid');
        txt_lastName.classList.add('is-valid');
        email.classList.add('is-valid');
        txt_name.classList.remove('is-invalid');
        txt_lastName.classList.remove('is-invalid');
        email.classList.remove('is-invalid');        

        Swal.fire({
            title: "Correcto",
            text: "You clicked the button!",
            icon: "success"
        });   
       
        cont++;
        tableBody.innerHTML += `<tr>
                    <td>${cont}</td>
                    <td>${txt_name.value}</td>
                    <td>${txt_lastName.value}</td>
                    <td>${email.value}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-info btn-details" 
                            data-id = "${cont}" 
                            data-name = "${txt_name.value}" 
                            data-lastname = "${txt_lastName.value}" 
                            data-email = "${email.value}" 
                            data-bs-toggle="modal">
                                Detalles
                        </button>
                        <button type="button" class="btn btn-sm btn-warning btn-edit" 
                            data-id = "${cont}" 
                            data-name = "${txt_name.value}" 
                            data-lastname = "${txt_lastName.value}" 
                            data-email = "${email.value}">
                                Editar
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-delete" 
                            data-id = "${cont}" 
                            data-name = "${txt_name.value}" 
                            data-lastname = "${txt_lastName.value}" 
                            data-email = "${email.value}" >
                                Eliminar
                        </button>
                    </td>
                </tr>`;

        txt_name.value = "";
        txt_lastName.value = "";
        email.value = "";

    }else {
        txt_name.classList.add('is-invalid');
        txt_lastName.classList.add('is-invalid');
        email.classList.add('is-invalid'); 
        txt_name.classList.remove('is-valid');
        txt_lastName.classList.remove('is-valid');
        email.classList.remove('is-valid');       

        Swal.fire({
            title: "Incorrecto",
            text: "You clicked the button!",
            icon: "error"
        });        
    }
});

tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-details')) {
        details(event.target);
    } else if (event.target.classList.contains('btn-delete')) {
        eliminar(event.target);
    }
});

function details(button) {
    const {id, name, lastname, email} = button.dataset;

    let modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <p><span class="">Id: </span>${id}</p>
        <p><span class="">Nombres: </span>${name}</p>
        <p><span class="">Apellidos: </span>${lastname}</p>
        <p><span class="">Email: </span>${email}</p>`;

    openModalDetalles() 
}

function openModalDetalles() {
    const modal = new bootstrap.Modal(
        document.getElementById('modalDetalles')
    );
    modal.show();
}

function eliminar(button) {
    const fila = button.closest('tr');

    if (fila) {
        fila.remove();
    }

}

function edit(button) {
    
}


