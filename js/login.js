//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/**/

const form = document.getElementById("form");
const username = document.getElementById("inputUser");
const password = document.getElementById("inputPassword");

document.addEventListener("DOMContentLoaded", function(e){


        form.addEventListener("submit", function(event) {
            //Peviene que la pagina se reinicie
            event.preventDefault();
            //LocalStorage y redirección
            var inputUser = document.getElementById("inputUser");
            sessionStorage.setItem("user", inputUser.value);
            sessionStorage.setItem('logged', true);
            
            location.href = 'home.html';
            
            //Guarda usuario en HTML
            
            document.getElementById("usuario").innerHTML = sessionStorage.getItem("user");
        });

      
});


//Cerrar sesion
function clearStorageSesion() {
    sessionStorage.removeItem("user");
    window.location.href = 'index.html';
  }