//Seleccionar los id
const inputUser = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const botonInicio = document.querySelector('#botonInicio');
const btnVisible = document.querySelector('#btnVisible');

//limpiar form
function limpiarFormulario(params) {
    inputUser.value = "";
    inputPassword.value = "";

    inputUser.classList.remove('is-invalid');
    inputPassword.classList.remove('is-invalid');

    inputUser.focus();
}

//Validar inputs
function validarCampos(params) { 
    const adminUser = "curiosiweb";
    const adminPassword = "123";   
    if (inputUser.value == "") {
        inputUser.classList.add('is-invalid');
        inputUser.focus();
        return false;
    }    
    if (inputPassword.value == "") {
        inputPassword.classList.add('is-invalid');
        inputUser.focus();
        return false;
    }

    return inputUser.value == adminUser && inputPassword.value == adminPassword;
}

function loginExitoso() {
    Swal.fire({
        title: "Correcto",
        text: "You clicked the button!",
        icon: "success",
        timer: 1000
    }); 
    
    sessionStorage.setItem("session", "valido");

    setTimeout(() => {
        window.location = "./dash.html";
    }, 1000);
}

function loginFallido() {
    Swal.fire({
        title: "Incorrecto",
        text: "You clicked the button!",
        icon: "error",
        timer: 1000
    }); 
    limpiarFormulario();
}

function manejarLogin(e) {

    if (validarCampos()) {
        loginExitoso();
    } else {
        loginFallido();
    }
}

btnVisible.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        btnVisible.classList.add('bi-eye-slash');
        btnVisible.classList.remove('bi-eye');
    } else {
        inputPassword.type = 'password';
        btnVisible.classList.remove('bi-eye-slash');
        btnVisible.classList.add('bi-eye');
    }
})

botonInicio.addEventListener('click', manejarLogin);

