function redireccion(){
    if (!sessionStorage.getItem("Logueado")){
        window.location.href = "login.html";
        sessionStorage.setItem("logueado");
    } else {
        return false;
    }
}

redireccion();
