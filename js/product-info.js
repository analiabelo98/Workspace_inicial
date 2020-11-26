var category = {};
var commentaryArray = []; 
var productRelatedArray = [];

function showImagesGallery(array){

    let htmlContentToAppend = "";
    let carruselHtml= "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];
        if(i==0){
          carruselHtml+=`
          <div class="carousel-item active">
                <img  src="`+imageSrc+`" class="d-block" alt="">
           </div>`
        }else {
          carruselHtml+= `
          <div class="carousel-item">
             <img  src="`+imageSrc+`" class="d-block " alt="">
          </div>
             `
        }
      
      }

        htmlContentToAppend += `
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
           `+ carruselHtml +`
           </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
        `
    
     document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
}

//Mostrar productos relacionados
function showRelatedProducts(array){
    let htmlContentToAppend = "";

    for(let i=0; i < array.length; i++){
        let prodRelated = array[i];

        if(i==1 || i==3){
            htmlContentToAppend +=`
        <div class="card-group col-6 " >
           <div class="card bg-light" >
            <img class="card-img-top" style="height: 15rem;"src="` + prodRelated.imgSrc + `"  alt="Card image">
              <div class="card-body">
                <h4 class="card-title">` + prodRelated.name + `</h4>
                <p class="card-text">` + prodRelated.description+ `</p>
                <a href="product-info.html" class="btn" style="background-color:rgb(212, 19, 154); color: white;">Ver</a>
             </div>
           </div>
         </div>
        `

        document.getElementById("ProductsRelated").innerHTML = htmlContentToAppend;
        }
    }
}

//Función comentarios 

function showCommentary(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        // Score
        let comment = array[i];
        let score= "";
          for(let i=1; i<=comment.score;i++){
              score+=`<span class="fa fa-star checked"></span>`
          }
          for (let i=comment.score+1; i<=5; i++){
            score+=`<span class=" fa fa-star"></span>`
          }
          //Muestro comentarios y score en HTML
                    htmlContentToAppend += `
            <div class="card">
                 <div class="card-header">` +comment.user+`  `+ score +`</div>
            
              <div class="card-body">
                <p class="card-text">` +comment.description +`</p>
                <p class="card-text"><small class="text-muted">` +comment.dateTime +`</small></p>
              </div> 
            </div>
                `

        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
    }
}


/*Función que se ejecuta una vez que se haya lanzado el evento de
que el documento se encuentra cargado*/
document.addEventListener("DOMContentLoaded", function(e){
  
 
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCategoryHTML = document.getElementById("productCategory");
            
            
            
        
            productNameHTML.innerHTML = category.name;
            productDescriptionHTML.innerHTML = category.description;
            productCostHTML.innerHTML = category.currency + category.cost;
            productCategoryHTML.innerHTML = category.category;
           

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            commentaryArray=resultObj.data;

        }
        //Muestro los comentarios 
        showCommentary(commentaryArray);
    });
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productRelatedArray =resultObj.data;

        }
        //Muestro los productos relacionados
        showRelatedProducts(productRelatedArray);
    });
  
});
    
