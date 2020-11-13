//Función que borra los datos al cambiar de usuario
function clearStorageSesion() {
    localStorage.removeItem("user");
    window.location.href = 'index.html';
    
    localStorage.removeItem("Nombre1");
    localStorage.removeItem("Nombre2");
    localStorage.removeItem("Apellido1");
    localStorage.removeItem("Apellido2");
    localStorage.removeItem("Email");
    localStorage.removeItem("Tel");
  }

function ShowData(){
        //Obtener datos almacenados
        var nombre = localStorage.getItem("Nombre1");
        var nombre2 = localStorage.getItem("Nombre2");
        var apellido = localStorage.getItem("Apellido1");
        var apellido2 = localStorage.getItem("Apellido2");
        var email = localStorage.getItem("Email");
        var Tel = localStorage.getItem("Tel");

        
        //Mostrar datos almacenados     
        document.getElementById("pNombre1").innerHTML = nombre; 
        document.getElementById("pNombre2").innerHTML = nombre2;
        document.getElementById("pApellido").innerHTML = apellido; 
        document.getElementById("pApellido2").innerHTML = apellido2; 
        document.getElementById("pEmail").innerHTML = email; 
        document.getElementById("pTel").innerHTML = Tel; 

 }
 //MODAL
$("#CambiarDatos").click(function(){
    $("#modalCambiarDatos").appendTo("body").modal('show'); 
       
   });

document.addEventListener("DOMContentLoaded", function (e) {
   //Función que captura los datos
    document.getElementById("GuardarCambios").addEventListener("click", function(){
        event.preventDefault();
        //Captura de datos escrito en los inputs        
        var nom = document.getElementById("Nombre1").value;
        var nom2 = document.getElementById("Nombre2").value;
        var apell1 = document.getElementById("Apellido1").value;
        var apell2 = document.getElementById("Apellido2").value;
        var email = document.getElementById("Email").value;
        var tel = document.getElementById("InfoTel").value;

        document.getElementById("CambiarDatos").innerHTML = ' <button type="submit" class="btn btn-primary" id="CambiarDatos" data-toggle="modal">Cambiar Datos</button>';
        

          //Guardando los datos en el LocalStorage
        if (nom != "")
        {
            localStorage.setItem("Nombre1", nom);
        }
        if (nom2 != "")
        {
            localStorage.setItem("Nombre2", nom2);
        }
        if (apell1 != "")
        {
            localStorage.setItem("Apellido1", apell1);
        }
        if (apell2 != "")
        {
            localStorage.setItem("Apellido2", apell2);
        }
        if (email != "")
        {
            localStorage.setItem("Email", email);
        }
        if (tel != "")
        {
            localStorage.setItem("Tel", tel);
        }
     
        
        ShowData();
    });  
    ShowData(); 
});

