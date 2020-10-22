function showCartList(cart){

    var cartJson = cart.articles;

    let htmlContentToAppend = "";

    for(let i = 0; i < cartJson.length; i++){
        let article = cartJson[i];

        htmlContentToAppend += `
            <table border="1" cellspacing="0" cellpadding="7">
                <tr>
                    <td width="100"> <img width="70px" src="` + article.src + `"> </td>
                    <td width="300"> <p>`+ article.name +`</p> </td>
                    <td width="200"> <p class="col-sm-4">` + article.currency + " " + article.unitCost + `</p> </td>
                    <td width="200"> ` + ` <input style="max-width: 71px;"  onkeyup="currentCost(` + i + `, ` + article.unitCost + `, ` + "`" + article.currency + "`" + `)"
                    onclick="currentCost(` + i + `, ` + article.unitCost + `, ` + "`" + article.currency + "`" + `)" id="cartCantidad` + i + `" type="number" value="` + article.count + `">` + ` </td>
                    <td width="200"><p id="subtotalHolder` + i + `"></p></td>
                </tr>
                </table>
            `;

        getJSONData(CART_PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                currentCost(i, article.unitCost, article.currency);
            }
        });
}

document.getElementById("cartProducts-container").innerHTML = htmlContentToAppend;
}

function currentCost(num, unitCost, currency)
{
  if (currency == "UYU")
  {
  var cartCantidad = document.getElementById("cartCantidad" + num).value;
  var subtotalHolder = document.getElementById("subtotalHolder" + num);
  var subtotal = cartCantidad*unitCost;
  var subtotalUYU = "UYU " + subtotal;
  subtotalHolder.innerHTML = subtotalUYU;

  newCost[num] = subtotal;

  }
  else
  {
    var cartCantidad = document.getElementById("cartCantidad" + num).value;
    var subtotalHolder = document.getElementById("subtotalHolder" + num);
    var subtotal = cartCantidad*unitCost*40;
    var subtotalUYU = "UYU " + subtotal;
    subtotalHolder.innerHTML = subtotalUYU;

    newCost[num] = subtotal;

  }
  var totalCost = newCost.reduce((a, b) => a + b, 0);
  currentTotalCost(totalCost);
}

function currentTotalCost(totalCost)
{
  var totalCostPlaceholder = document.getElementById("totalPrice");
  totalCostPlaceholder.innerHTML = "UYU " + totalCost;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cart = resultObj.data;

            showCartList(cart);

            newCost = [];
        }
    });
});