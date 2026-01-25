//Login
const usuario = 'vale@gmail.com';
const contraseña = 'vale';

const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const botonInicio = document.getElementById('botonInicio');

if (inputEmail && inputPassword && botonInicio) {
    botonInicio.addEventListener("click", () => {
        if (usuario === inputEmail.value && contraseña === inputPassword.value) {

            sessionStorage.setItem("session", "yes")

            Swal.fire({
                title: "Credenciales correctas",
                text: "Bienvenido",
                icon: "success",
                confirmButtonText: "Cool",
            })
            
            setTimeout(() => {
                window.location = "./index.html";
            }, 1000);

        } else {
            Swal.fire({
                title: "Error!",
                text: "Revisa bien tus credenciales",
                icon: "error",
                confirmButtonText: "Cool",
            });
        }

    });
}


//Tema (Dark or Light)

const themeSelect = document.getElementById('theme');
const html = document.documentElement;

if (themeSelect) {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
        html.setAttribute("data-bs-theme", savedTheme)
        themeSelect.value = savedTheme
    }

    themeSelect.addEventListener("change", () => {
        const theme = themeSelect.value;

        if (theme) {
            html.setAttribute("data-bs-theme", theme);
            localStorage.setItem("theme", theme)
        }
    })
}

