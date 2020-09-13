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
        <a href="category-info.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ comment.user +`</h4>
                    <p>`+ score +`</p>
                    <p>`+ comment.dateTime +`</p>
                </div>
                <p class="mb-1">` + comment.description + `</p>
            </div>
        </div>
        </a>
        `

        document.getElementById("productComments").innerHTML = htmlContentToAppend;
    }
}


document.getElementById("postComment").addEventListener("click", postNewComment);

function postNewComment(){
    var cname = localStorage.getItem("email");
    var cscore = document.getElementById("scoreForm").value
    var cdesc = document.getElementById("comentario").value
    var cdate = fechaYHora;

    addComment(cname, cscore, cdesc, cdate);
}

function addComment(cname, cscore, cdesc, cdate){
    var newComment = {
        user : cname,
        score : cscore,
        description : cdesc,
        dateTime : cdate
    }; 

    newComments.push[newComment];

    var lista = newComments;

    for(var i = 0; i < lista.length; i++){
        let newComment = array[i];
        var score = "";

        for(let i = 1; i <= newComment.score; i++){
            score += `<span class="fa fa-star checked"></span>`
        }
        for(let i = newComment.score + 1; i <= 5; i++){
            score += `<span class="fa fa-star"></span>`
        }

        htmlContentToAppend += `
        <a href="category-info.html" class="list-group-item list-group-item-action">
        <div class="row">
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">`+ newComment.user +`</h4>
                <p>`+ score +`</p>
                <p>`+ newComment.dateTime +`</p>
            </div>
            <p class="mb-1">` + newComment.description + `</p>
        </div>
        </div>
        </a>
        `

        document.getElementById("comentariosNuevos").innerHTML = htmlContentToAppend;
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