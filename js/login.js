var email = document.getElementById("inputEmail");
var pass = document.getElementById("inputPass");
var form = document.getElementById("loginForm");
var error = document.getElementById("error");
form.addEventListener("submit", e=>{
    e.preventDefault();
    let mensajeError = ""
    let ingresar = false
    let expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let expPass = /^$|\s/
    error.innerHTML = ""

    if(!expEmail.test(email.value)){
        mensajeError += `El email no es válido <br>`
        ingresar = true 
    }

    if(expPass.test(pass.value)){
        mensajeError += `La contraseña no es válida <br>`
        ingresar = true
    }

    if(ingresar){
        error.innerHTML = mensajeError
    } else{
        window.location.replace("./index.html");
        localStorage.setItem("estaLogueado", "true");
        localStorage.setItem("email", email.value);
    }
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});