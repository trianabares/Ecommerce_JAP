let logueado = sessionStorage.getItem("estaLogueado");

function exist(){
    if (typeof(logueado) == "object") {
        logueado = false;
        sessionStorage.setItem("estaLogueado", logueado);
    }
}

function redireccion(){
    if (logeado != "true") {
        window.location.replace("./login.html");
    }
}

exist();
redireccion();