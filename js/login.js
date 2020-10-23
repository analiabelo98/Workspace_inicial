//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/*document.addEventListener("DOMContentLoaded", function(e){

});*/

const form = document.getElementById("form");
const username = document.getElementById("inputUser");
const password = document.getElementById("inputPassword");

form.addEventListener("submit", function(event) {
    //Peviene que la pagina se reinicie
    event.preventDefault();
    let users = Array (
        {
            usuario: username.value,
            contraseña: password.value
        }
    );
    //LocalStorage y redirección

    location.href = 'home.html';
    var inputUser = document.getElementById("inputUser");
    localStorage.setItem("user", inputUser.value);
})

//X redireccion y localStorage
function submitEvent(evento) {
    event.preventDefault();
    sessionStorage.setItem('logged', true);
    localStorage.setItem("user", inputUsers.value);
    window.location.href = 'index.html';

}
form.addEventListener('submit', submitEvent);

//Cerrar sesion
function clearStorageSesion() {
    localStorage.removeItem("user");
    window.location.href = 'index.html';
  }