function login(){
  if (sessionStorage.getItem("logueado") === null) {
    window.location = "/login.html";
    sessionStorage.stItem("logueado");
} else {
  return false;
}
}

login();