const email = document.getElementById("inputEmail");
const pass = document.getElementById("inputPass");
const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let mensajeError = ""
    let ingresar = false
    let expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    error.innerHTML = ""

    if(!expEmail.test(email.value)){
        mensajeError += `El email no es valido <br>`
        ingresar = true 
    }

    if(pass.value.length == 0){
        mensajeError += `La cotrasema no es valida <br>`
        ingresar = true 
    }

    if(ingresar){
        error.innerHTML = mensajeError
    } else{
        logueado == "true"
        window.location.replace("./index.html");
    }
});



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});