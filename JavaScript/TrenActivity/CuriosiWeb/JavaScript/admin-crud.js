// Obtenemos lo que haya en LocalStorage (viene como texto)
const storedUsers = localStorage.getItem('userList');

// Si storedUsers tiene algo (no es null), lo convertimos a objeto con JSON.parse
// Si es null, inicializamos como array vacío []
let userList = storedUsers ? JSON.parse(storedUsers) : [];

 // Al momento de buscar el usuario para editar, en esta variable se guarda el Index de ese usuario dentro de la lista
let editIndex = null;

//capturo los elementos de el boton para agregar usuario y la talba donde se van a mostrar
const addUserBtn = document.getElementById('addUserBtn');
const tableBody = document.getElementById('tableBody');

//agrego el evento que al hacer click en el boton se ejecute la accion de guardar
addUserBtn.addEventListener('click', function () {
    //Obtenemos el valor que se escribe en cada Imput
    const nameValue = document.getElementById('userName').value;
    const lastNameValue = document.getElementById('userLastName').value;
    const nickValue = document.getElementById('userNickName').value;
    const passValue = document.getElementById('userPass').value;

    //VALIDACION DE LOS ESPACIOS EN BLANCO
    if (nameValue.trim() === '' || lastNameValue.trim() === '' || nickValue.trim() === '' || passValue.trim() === '') {
        alert("Por favor, completa todos los campos.");
        return; // Este "return" hace que la función se detenga aquí y no agregue nada
    }

    //CREAMOS AL USUARIO CON LOS VALORES DEL IMPUT
    //Por ahora no le puse ID porque no lo veo necesario, pero lo podemos revisar
    const userData = {
        'name': nameValue,
        'lastName': lastNameValue,
        'nickName': nickValue,
        'password': passValue,
    };
    
    // CONDICION PARA ESCOGER SI SE VA A AGREGAR O SE VA A EDITAR UN ADMIN
    if (editIndex === null) {
        // AGREGA: Si editIndex es null, el usuario es nuevo
        userList.push(userData);
    } else {
        // EDITA: Si tiene un número, reemplazamos el usuario en esa posición
        userList[editIndex] = userData;
        
        // Como al editar se cambia el boton, aca se regresa el botón a su estado original cuando termine de editar
        editIndex = null;
        addUserBtn.innerText = "Agregar usuario";
        addUserBtn.classList.remove('btn-success');
        addUserBtn.classList.add('btn-primary');
    }

    renderUser();
    // limpiar el formulario despues de agregar un usuario
    document.querySelector('form').reset();

    localStorage.setItem('users', JSON.stringify(userList));

    Swal.fire({
        title: "Perfecto!",
        text: "Nuevo administrador agregado",
        icon: "success",
        theme: 'dark'
    });

});

// FUNCION PARA MOSTRAR LOS USUARIOS QUE VAMOS REGISTRANDO EN LA LISTA
function renderUser() {
    tableBody.innerHTML = "";

    // Agregamos 'index' como segundo parámetro del forEach
    userList.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.lastName}</td>
            <td>${user.nickName}</td>
            <td>${user.password}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Eliminar</button>
            </td>
        `;
        //Agregamos un elemento hijo con el contenido de "row" dentro de tableBody
        tableBody.appendChild(row);
        
    });
}

// FUNCION PARA ELIMINAR UN USUARIO DE LA LISTA
function deleteUser(index) {
    // Confirmar si el usuario de verdad quiere borrarlo
    const deletQuest = confirm("¿Estás seguro de que deseas eliminar este administrador?");

    if (deletQuest) {
        // Eliminamos 1 elemento en la posición 'index'
        userList.splice(index, 1);

        // Volvemos a dibujar la tabla para que se vea el cambio
        renderUser();

        localStorage.setItem('users', JSON.stringify(userList));

        Swal.fire({
        title: "Usuario Eliminado!",
        icon: "warning",
        theme: 'dark'
    });
    }
}

// FUNCION PARA EDITAR UN USUARIO
function editUser(index) {
    // Guardamos el índice en nuestra variable global que se declara al inicio
    editIndex = index;

    // Obtenemos el usuario de la lista usando ese índice
    const user = userList[index];

    //Con Duvan hablamos de no usar modales entonces se ponen los datos de ese usuario de vuelta en los inputs
    //Como es esta editando con el indice, se edita y vuelve a la misma posicion en que estaba en la lista
    document.getElementById('userName').value = user.name;
    document.getElementById('userLastName').value = user.lastName;
    document.getElementById('userNickName').value = user.nickName;
    document.getElementById('userPass').value = user.password;

    // Cambiamos el color y texto del botón para avisar que estamos editando
    addUserBtn.innerText = "Actualizar usuario";
    addUserBtn.classList.remove('btn-primary');
    addUserBtn.classList.add('btn-warning');

    Swal.fire({
        title: "Modo Edición!",
        text: "Agrega la nueva informacion en el formulario",
        icon: "info",
        theme: 'dark'
    });
}

// Llamamos a la función para que imprima los datos que recuperamos del localStorage
renderUser();