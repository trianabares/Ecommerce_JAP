var articles = {};

function showCartList(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let article = array[i];

        htmlContentToAppend += `
            <div class="row">
                <div class="col-3">
                    <img src="` + article.articles[i].src + `" alt="` + article.articles[i].name + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <small class="text-muted">` + article.articles[i].count + ` artículos</small>
                    </div>
                    <h5 class="mb-1">` + article.articles[i].currency + article.articles[i].unitCost + `</h5>
                </div>
            </div>
        `

        document.getElementById("cartProducts-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            article = resultObj.data;

            showCartList(article);
        }
    });
});