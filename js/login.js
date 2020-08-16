let login = document.getElementById("submitLogin");

login.addEventListener("click", () =>{
    let email = document.getElementById("inputEmail").value;
    let pass = document.getElementById("inputPass").value;
    let error = document.getElementById("error");

    if (email == !"" && pass == !""){
        sessionStorage.stItem("logueado");
        window.location.href = "./index.html";
    } 
});


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});