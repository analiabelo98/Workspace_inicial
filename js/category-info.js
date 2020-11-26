var category = {};

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
    console.log(htmlContentToAppend);
     document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CATEGORY_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.productCount;
            productCriteriaHTML.innerHTML = category.productCriteria;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
      
});