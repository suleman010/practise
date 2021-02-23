"use strict";

var s = "";
var arr2 = [];
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/products", true);
xhr.setRequestHeader('content-type', 'application/json');

xhr.onprogress = function () {
  console.log("on progress");
};

xhr.onload = function () {
  arr2 = JSON.parse(this.response);

  for (var i = 0; i < arr2.length; i++) {
    s = s + "\n          <!-- product-item start -->\n          <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product-item\">\n                  <div class=\"product-img\">\n                      <a href=\"single-product.html\">\n                          <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                      </a>\n                  </div>\n                  <div class=\"product-info\">\n                      <h6 class=\"product-title\">\n                          <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                      </h6>\n                      <div class=\"pro-rating\">\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                      </div>\n                      <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                      <ul class=\"action-button\">\n                          <li>\n                              <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                          </li>\n                          <li>\n                              <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                          </li>\n                          <li>\n                              <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                          </li>\n                          <li>\n                              \n                              <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                \n                              </li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <!-- product-item end -->\n      \n          \n          ");
  }

  document.getElementById('productsShow').innerHTML = s;
};

xhr.send(); // -----------------recent products ---------------------

recentProducts();

function recentProducts() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    arr2.sort(function (a, b) {
      return b.id - a.id;
    });
    s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].id > arr2.length - 3) {
        s = s + "    <!-- product-item start -->\n                <div class=\"product-item\">\n                    <div class=\"product-img\">\n                        <a href=\"single-product.html\">\n                            <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                        </a>\n                    </div>\n                    <div class=\"product-info\">\n                        <h6 class=\"product-title\">\n                            <a href=\"#\">").concat(arr2[i].productName, "</a>\n                        </h6>\n                        <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      }
    }

    document.getElementById('recentProducts').innerHTML = s;
  };

  xhr.send();
} // ----------------- Only show samsung tabs only ----------------


function samsungTab() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/1/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].categoryId == "2") {
        s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li> \n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      }

      if (arr2[i].categoryId != "2") {
        // console.log(arr2[i])
        arr2.splice(i, 1); // delete arr2[i]
      }
    }

    document.getElementById('productsShow').innerHTML = s;
    console.log(arr2);
  };

  xhr.send();
} // ----------------- Only show samsung smartphones only ----------------


function samsungSmartPhone() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/1/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].categoryId == "1") {
        s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      } else {
        // console.log(arr2[i])
        arr2.splice(i, 1); // delete arr2[i]
      }
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // ----------------- Only show samsung watches only ----------------


function samsungWatch() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/1/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].categoryId == "3") {
        s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      } else {
        // console.log(arr2[i])
        arr2.splice(i, 1); // delete arr2[i]
      }
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // ---------------APPLE PRODUCTS SHOW---------------
// ----------------- Only show apple tabs only ----------------


function appleTab() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/2/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].categoryId == "2") {
        s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      } else {
        // console.log(arr2[i])
        arr2.splice(i, 1); // delete arr2[i]
      }
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // ----------------- Only show apple smartphones only ----------------


function appleSmartPhone() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/2/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].categoryId == "1") {
        s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      } else {
        // console.log(arr2[i])
        arr2.splice(i, 1); // delete arr2[i]
      }
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // ----------------- Only show apple watches only ----------------


function appleWatch() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/brands/2/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].categoryId == "3") {
        s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
      } else {
        // console.log(arr2[i])
        arr2.splice(i, 1); // delete arr2[i]
      }
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // --------------- Show operating system-----------------


function android() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/operatingsystem/1/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // --------------- Show operating system IOS-----------------


function ios() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/operatingsystem/2/products", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      s = s + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
} // -------- price range slider -------------


function change1() {
  var miniPrice = parseInt($("#slider-range").slider("values", 0));
  var maxPrice = parseInt($("#slider-range").slider("values", 1));
  var sa = "";

  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i].productPrice <= maxPrice && arr2[i].productPrice >= miniPrice) {
      console.log(arr2[i].productPrice);
      sa = sa + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
    }

    document.getElementById('productsShow').innerHTML = sa;
  }
} // ------------COLOR SEARCH-----------------


function color(color1) {
  var sa = "";

  if (color1 == "white") {
    for (var i = 0; i < arr2.length; i++) {
      for (var j = 0; j < arr2[i].productColor.length; j++) {
        if (arr2[i].productColor[j] == "white") {
          sa = sa + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
        }
      }
    }
  } // ------------color = blue -------------------------------


  if (color1 == "blue") {
    for (var _i = 0; _i < arr2.length; _i++) {
      for (var _j = 0; _j < arr2[_i].productColor.length; _j++) {
        if (arr2[_i].productColor[_j] == "blue") {
          sa = sa + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[_i].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[_i].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[_i].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[_i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
        }
      }
    }
  } // ------------color = red -------------------------------


  if (color1 == "red") {
    for (var _i2 = 0; _i2 < arr2.length; _i2++) {
      for (var _j2 = 0; _j2 < arr2[_i2].productColor.length; _j2++) {
        if (arr2[_i2].productColor[_j2] == "red") {
          sa = sa + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[_i2].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[_i2].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[_i2].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[_i2].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
        }
      }
    }
  } // ------------color = Deep Sky Blue -------------------------------


  if (color1 == "Deep Sky Blue") {
    for (var _i3 = 0; _i3 < arr2.length; _i3++) {
      for (var _j3 = 0; _j3 < arr2[_i3].productColor.length; _j3++) {
        if (arr2[_i3].productColor[_j3] == "Deep Sky Blue") {
          sa = sa + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[_i3].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[_i3].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[_i3].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[_i3].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
        }
      }
    }
  } // ------------color = silver -------------------------------


  if (color1 == "silver") {
    for (var _i4 = 0; _i4 < arr2.length; _i4++) {
      for (var _j4 = 0; _j4 < arr2[_i4].productColor.length; _j4++) {
        if (arr2[_i4].productColor[_j4] == "silver") {
          sa = sa + "\n                <!-- product-item start -->\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"product-item\">\n                        <div class=\"product-img\">\n                            <a href=\"single-product.html\">\n                                <img src=\"".concat(arr2[_i4].productImage, "\" alt=\"\"/>\n                            </a>\n                        </div>\n                        <div class=\"product-info\">\n                            <h6 class=\"product-title\">\n                                <a href=\"single-product.html\">").concat(arr2[_i4].productName, "</a>\n                            </h6>\n                            <div class=\"pro-rating\">\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                                <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                            </div>\n                            <h3 class=\"pro-price\">$ ").concat(arr2[_i4].productPrice, "</h3>\n                            <ul class=\"action-button\">\n                                <li>\n                                    <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                                </li>\n                                <li>\n                                    \n                                    <a onclick=\"addToCart(").concat(arr2[_i4].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                      \n                                    </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <!-- product-item end -->\n                ");
        }
      }
    }
  }

  document.getElementById('productsShow').innerHTML = sa;
} // ------------newestitemfirst-----------------


function newestProductFirst() {
  console.log(arr2);
  var menu = document.getElementById("change_chart"); // console.log(menu.value)

  var s = ""; // let xhr = new XMLHttpRequest();
  // xhr.open("GET", "http://localhost:3000/products", true)
  // xhr.setRequestHeader('content-type', 'application/json')
  // xhr.onprogress = function () {
  //   console.log("on progress")
  // }
  // xhr.onload = function () {
  //    arr2 = JSON.parse(this.response)

  if (menu.value == 'newest') {
    arr2.sort(function (a, b) {
      return b.id - a.id;
    });
  }

  if (menu.value == 'hightolow') {
    arr2.sort(function (a, b) {
      return b.productPrice - a.productPrice;
    });
  }

  if (menu.value == 'lowtohigh') {
    //    console.log("asdaa")
    arr2.sort(function (a, b) {
      return a.productPrice - b.productPrice;
    });
  }

  for (var i = 0; i < arr2.length; i++) {
    s = s + "\n          <!-- product-item start -->\n          <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product-item\">\n                  <div class=\"product-img\">\n                      <a href=\"single-product.html\">\n                          <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                      </a>\n                  </div>\n                  <div class=\"product-info\">\n                      <h6 class=\"product-title\">\n                          <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                      </h6>\n                      <div class=\"pro-rating\">\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                      </div>\n                      <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                      <ul class=\"action-button\">\n                          <li>\n                              <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                          </li>\n                          <li>\n                              <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                          </li>\n                          <li>\n                              <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                          </li>\n                          <li>\n                              \n                              <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                \n                              </li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <!-- product-item end -->\n          ");
  }

  document.getElementById('productsShow').innerHTML = s;
} // }
// xhr.send()
// }
// ----------------------- search method ----------------


function search1() {
  var searchthis = document.getElementById("searchthis").value;
  console.log(searchthis);
  var cc = "http://localhost:3000/products?productName_like=";
  var s = "";
  var arr2 = [];
  var xhr = new XMLHttpRequest();
  xhr.open("GET", cc.concat(searchthis), true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    console.log(arr2);

    for (var i = 0; i < arr2.length; i++) {
      s = s + "\n          <!-- product-item start -->\n          <div class=\"col-lg-4 col-md-6\">\n              <div class=\"product-item\">\n                  <div class=\"product-img\">\n                      <a href=\"single-product.html\">\n                          <img src=\"".concat(arr2[i].productImage, "\" alt=\"\"/>\n                      </a>\n                  </div>\n                  <div class=\"product-info\">\n                      <h6 class=\"product-title\">\n                          <a href=\"single-product.html\">").concat(arr2[i].productName, "</a>\n                      </h6>\n                      <div class=\"pro-rating\">\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star-half\"></i></a>\n                          <a href=\"#\"><i class=\"zmdi zmdi-star-outline\"></i></a>\n                      </div>\n                      <h3 class=\"pro-price\">$ ").concat(arr2[i].productPrice, "</h3>\n                      <ul class=\"action-button\">\n                          <li>\n                              <a href=\"#\" title=\"Wishlist\"><i class=\"zmdi zmdi-favorite\"></i></a>\n                          </li>\n                          <li>\n                              <a href=\"#\" data-toggle=\"modal\"  data-target=\"#productModal\" title=\"Quickview\"><i class=\"zmdi zmdi-zoom-in\"></i></a>\n                          </li>\n                          <li>\n                              <a href=\"#\" title=\"Compare\"><i class=\"zmdi zmdi-refresh\"></i></a>\n                          </li>\n                          <li>\n                              \n                              <a onclick=\"addToCart(").concat(arr2[i].id, "); return false\" title=\"Add to cart\" ><i class=\"zmdi zmdi-shopping-cart-plus\"></i></a>\n                \n                              </li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <!-- product-item end -->\n      \n          \n          ");
    }

    document.getElementById('productsShow').innerHTML = s;
  };

  xhr.send();
}