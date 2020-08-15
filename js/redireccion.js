var log = sessionStorage.getItem("estaLogueado");

function exist(){
    if (typeof(log) == "object") {
        logueado = false;
        sessionStorage.setItem("estaLogueado", logueado);
    }
}

function redireccion(){
    if (log != "true") {
        logueado = "true";
        window.location.href = 'login.html';
    } else if (logeado == "true"){
        return false;
    }
}

exist();
redireccion();