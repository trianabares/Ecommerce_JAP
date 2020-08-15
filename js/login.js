var email = document.getElementById("inputEmail");
var pass = document.getElementById("inputPass");
var formLogin = document.getElementById("loginForm");
var error = document.getElementById("error");

function enviarForm(){
    let merror = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    error.innerHTML = ""

    if(!regexEmail.test(email.value)){
        merror += `El email no es valido <br>`
        entrar = true
        return false; 
    }

    if(pass.value.length == 0){
        merror += `La contraseña no es valida <br>`
        entrar = true
        return false; 
    }

    if(entrar){
        error.innerHTML = merror
        return false; 
    } else{
        window.location.replace("./index.html");
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});