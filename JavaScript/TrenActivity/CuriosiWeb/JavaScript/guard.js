const inicioSession = sessionStorage.getItem('session');

if (inicioSession != 'valido') {
    window.location = "./login.html"
}

