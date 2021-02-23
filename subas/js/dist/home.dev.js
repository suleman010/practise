"use strict";

newProducts();

function newProducts() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    var arr2 = JSON.parse(this.response);
    s = "<div class=\"row active-featured-product slick-arrow-2\" >";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].id > arr2.length - 4) {
        s = s + "<!-- product-item start -->\n            <div class=\"col\">\n                <div class=\"product-item product-item-2\">\n                    <div class=\"product-img\">\n                        <a href=\"single-product.html\">\n                            <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                        </a>\n                    </div>\n                    <div class=\"product-info\">\n                        <h6 class=\"product-title\">\n                            <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                        </h6>\n                        <h6 class=\"brand-name\"></h6>\n                        <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                    </div>\n                    <ul class=\"action-button\">\n                        <li>\n                            <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                        </li> \n                        <li>\n                            <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                        </li>\n                        <li>\n                            <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\"><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <!-- product-item end -->\n            \n            ");
      }
    }

    document.getElementById('newProducts').innerHTML = s;
  };

  xhr.send();
}

function brandNameFinder(i) {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/" + i, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    console.log(this.response.name);
    return this.response.name;
  };

  xhr.send();
}