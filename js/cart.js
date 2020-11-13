let comissionPercentage = 0.15;
var currentCartArray = [];
let productCost = 0;
let SUCCESS_MSG = "¡Se ha realizado la compra con éxito! :)";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

function showCartProducts(currentCartArray){
    

    let htmlContentToAppend = "";
    let htmlContentToAppendII = "";
    let total =0;
    for (let i=0; i < currentCartArray.length; i++){
        
        let cartProduct = currentCartArray[i];
        let subTotal = cartProduct.unitCost*cartProduct.count;
              if(cartProduct.currency =="USD"){
                  total= total+subTotal*40;
              }else{
                  total = total+subTotal;
              }
                
    //Tabla con producto
            htmlContentToAppendII +=`
                <tr class="mb-4 mt-4">
                    
                       <td> <img src="` + cartProduct.src + `" class="img-thumbnail mb-4 mt-4" width="150px"></td>
                       <th></th>
                       <td>` + cartProduct.name + `</td>
                       <th ></th>
                       <td>` + cartProduct.currency + cartProduct.unitCost +`</td>
                       <th ></th>
                       <td><input class="cartClass form-control bfh-number" style="width:90px;" value="` + cartProduct.count + `" type="number" min="0" max="1000" step="1"/></td>
                       <th ></th>
                       <td>` + cartProduct.currency + subTotal + `</td> 
                </tr>
                `
    }  //Tabla con productos y tabla con costos
        htmlContentToAppend += `<table class="col-12">
        <thead  >
        
          <tr style="border-bottom: 1px solid #000; class="mb-4 mt-4">
          <th ></th>
          <th ></th>
            <th scope="col">Nombre</th>
            <th ></th>
            <th scope="col">Costo</th>
            <th ></th>
            
            <th scope="col">Cantidad</th>
            <th ></th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        
        <tbody  >`+ htmlContentToAppendII+` </tbody>
        </table>   
        
       
                <hr>
                
              </form>
              <div class="container col-6">
              <h4>Costos</h4>
              <div id="costosId"></div>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Precio</h6>
                    <small class="text-muted">Unitario del producto</small>
                  </div>
                  <span class="text-muted" id="productCostText">`+total+`</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Porcentaje</h6>
                    <small class="text-muted">Según el tipo de envío</small>
                  </div>
                  <span class="text-muted" id="comissionText">15%</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total ($)</span>
                  <strong id="totalCostText"></strong>
                </li>
              </ul>
              </div>
       
        `
        document.getElementById("ProductCart").innerHTML = htmlContentToAppend;
        console.log(comissionPercentage)
        //muestro Total + porcentaje
        document.getElementById("totalCostText").innerHTML = "$" + (Math.round(total * comissionPercentage) + total);
        //mustro porcentaje
        document.getElementById("comissionText").innerHTML = Math.round(comissionPercentage * 100) + "%";

      }

//MODAL
$("#Seleccionar").click(function(){
    $("#modalSeleccionar").appendTo("body").modal('show'); 
       
   });

//Función para los porcentajes de envio
/*function updatePercentage(){
  let comissionCostHTML = document.getElementById("comissionText").innerHTML = Math.round(comissionPercentage * 100) + "%";

  let comissionToShow = Math.round(comissionPercentage * 100) + "%";

  comissionCostHTML.innerHTML = comissionToShow; 
}*/

//función que modifica la cantidad de productos
function cantCart(){
    var cantidad = document.getElementsByClassName("cartClass");
    for(let i=0; i<currentCartArray.length; i++){
        let product = currentCartArray[i];
        product.count=cantidad[i].value;
    }
    
    showCartProducts(currentCartArray);
}

//funciones para selección de forma de pago
function tarjeta(){
  document.getElementById("formaDePago").innerHTML = "Tarjeta de crédito";
  }
  function Banco(){
    document.getElementById("formaDePago").innerHTML = "Transferencia bancaria";
  }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("input", function(event){
    cantCart();
}, false);

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFOII_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCartArray =resultObj.data.articles;
        
       //Muestro los productos
        showCartProducts(currentCartArray);
        
        }
     
    document.getElementById("premiumradio").addEventListener("click", function(){
        comissionPercentage = 0.15;
        //updatePercentage();
        showCartProducts(currentCartArray);
    });
    
    document.getElementById("expressradio").addEventListener("click", function(){
        comissionPercentage = 0.07;
        //updatePercentage();
        showCartProducts(currentCartArray);
        
    });

    document.getElementById("standardradio").addEventListener("click", function(){
        comissionPercentage = 0.05;
        //updatePercentage();
        showCartProducts(currentCartArray);
  
    });
  });
   
});
//Verificación
var buyForm = document.getElementById("buyInfo");

//Se agrega una escucha en el evento 'submit' que será
//lanzado por el formulario cuando se seleccione 'Finalizar compra'.
buyForm.addEventListener("submit", function(e){

    let calleInput = document.getElementById("calle");
    let numeroInput = document.getElementById("numero");
    let esquinaInput = document.getElementById("esquina");
    let infoMissing = false;

    //Quito las clases que marcan como inválidos
    calleInput.classList.remove('is-invalid');
    numeroInput.classList.remove('is-invalid');
    esquinaInput.classList.remove('is-invalid');

    
    //Se controla que los campos esten completos.
    
    if (calleInput.value === "")
    {
        calleInput.classList.add('is-invalid');
        infoMissing = true;
    }
    
    
    if (numeroInput.value === "")
    {
        numeroInput.classList.add('is-invalid');
        infoMissing = true;
    }

  
    if (esquinaInput.value == "")
    {
        esquinaInput.classList.add('is-invalid');
        infoMissing = true;
    }
    
    if(!infoMissing)
    {
        //Aquí ingresa si pasó los controles, irá a enviar
        //la solicitud para crear la publicación.

        getJSONData(PUBLISH_PRODUCT_URL).then(function(resultObj){
            let msgToShowHTML = document.getElementById("resultSpan");
            let msgToShow = "";

            //Si la publicación fue exitosa, devolverá mensaje de éxito,
            //de lo contrario, devolverá mensaje de error.
            if (resultObj.status === 'ok')
            {
                msgToShow = resultObj.data.msg;
                document.getElementById("alertResult").classList.add('alert-success');
            }
            else if (resultObj.status === 'error')
            {
                msgToShow = ERROR_MSG;
                document.getElementById("alertResult").classList.add('alert-danger');
            }

            msgToShowHTML.innerHTML = msgToShow;
            document.getElementById("alertResult").classList.add("show");
        });
        console.log(buyForm);
    }

    //Esto se debe realizar para prevenir que el formulario se envíe (comportamiento por defecto del navegador)
    if (e.preventDefault) e.preventDefault();
        return false;
});

