var product = {};
var newComments = [];
var hoy = new Date();
var fecha = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var fechaYHora = fecha + ' ' + hora;

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("ImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showComments(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];
        var score = "";

        for(let i = 1; i <= comment.score; i++){
            score += `<span class="fa fa-star checked"></span>`
        }
        for(let i = comment.score + 1; i <= 5; i++){
            score += `<span class="fa fa-star"></span>`
        }

        htmlContentToAppend += `
        <div>
            <div>
                <div>
                    <h4>`+ comment.user +`</h4>
                    <p>`+ score +`</p>
                    <p>`+ comment.dateTime +`</p>
                </div>
                <p >` + comment.description + `</p>
            </div>
        </div>
        `

        document.getElementById("productComments").innerHTML = htmlContentToAppend;
    }
}

function postNewComment(){
    var cuser = localStorage.getItem("email");
    var cscore = document.getElementById("scoreForm").value;
    var cdesc = document.getElementById("comentario").value;
    var cdate = fechaYHora;

    addComment(cuser, cscore, cdesc, cdate);
}

function addComment(cuser, cscore, cdesc, cdate){
    var newComment = {
        user : cuser,
        score : cscore,
        description : cdesc,
        dateTime : cdate
    }; 

    newComments.push[newComment];
    console.log(newComment);

    let htmlContentToAppend = "";

    for(let i = 0; i < newComments.length; i++){
        let newComment = array[i];
        var score = "";

        for(let i = 1; i <= newComment.score; i++){
            score += `<span class="fa fa-star checked"></span>`
        }
        for(let i = newComment.score + 1; i <= 5; i++){
            score += `<span class="fa fa-star"></span>`
        }

        htmlContentToAppend += `
        <div>
            <div>
                <div>
                    <h4>`+ newComment.user +`</h4>
                    <p>`+ score +`</p>
                    <p>`+ newComment.dateTime +`</p>
                </div>
                <p >` + newComment.description + `</p>
            </div>
        </div>
        `

        document.getElementById("productNewComments").innerHTML = htmlContentToAppend;
        
    }
}

function showRelatedProducts(array) {

    let htmlContentToAppend = "";
  
    for (let i = 0; i < array.length; i++) {
      let relatedProducts = array[i];
  
      htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 w-100">
            <a href="product-info.html"> <img class="img-fluid img-thumbnail" src="img/car` + relatedProducts + `.jpg" alt=""></a>
        </div>
    </div>`

    document.getElementById("productRelatedProducts").innerHTML = htmlContentToAppend;
  }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCategoryHTML = document.getElementById("productCategory");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + " " + product.cost;
            productCategoryHTML = product.category;

            showImagesGallery(product.images);
            showRelatedProducts(product.relatedProducts);
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comment = resultObj.data;

            showComments(comment);
        }
    });
});