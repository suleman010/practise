"use strict";

cartShow();
orderArray = [];
totalBill = 0;
orderCost = 0;

function cartShow() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/cart", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    var arr2 = JSON.parse(this.response);

    for (var i = 0; i < arr2.length; i++) {
      s = s + "\n          <tr>\n              <td class=\"product-thumbnail\">\n                  <div class=\"pro-thumbnail-img\">\n                      <img src=\"img/cart/1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"pro-thumbnail-info text-left\">\n                      <h6 class=\"product-title-2\">\n                          <a >".concat(arr2[i].productName, "</a>\n                      </h6>\n                      <p>Brand: Brand Name</p>\n                      <p>Model: ").concat(arr2[i].productModel, "</p>\n                      <p> Color: Black, White</p>\n                  </div>\n              </td>\n              <td class=\"product-price\">$ ").concat(arr2[i].productPrice, "</td>\n              <td class=\"product-quantity\">\n                    <div class=\"cart-plus-minus f-left\"><div class=\"dec qtybutton\"><button onclick=\"quantitySub(").concat(arr2[i].id, ",").concat(arr2[i].quantity, ");return false\">-</button></div>\n                        <input type=\"text\" value=\"").concat(arr2[i].quantity, "\" name=\"qtybutton\" class=\"cart-plus-minus-box\">\n                    <div class=\"inc qtybutton\"><button onclick=\"quantityAdd(").concat(arr2[i].id, ",").concat(arr2[i].quantity, ");return false \">+</button></div></div> \n                </td>\n              <td class=\"product-subtotal\">$ ").concat(arr2[i].productPrice * arr2[i].quantity, "</td>\n              <td class=\"product-remove\">\n                  <button onclick=\"deleteFromCart(").concat(arr2[i].id, ");return false\" ><i class=\"zmdi zmdi-close\"></i></button>\n              </td>\n          </tr>\n          ");
    }

    document.getElementById('cartPrint').innerHTML = s;
    totalBillShow();
  };

  xhr.send();
}

function quantityAdd() {
  index1 = arguments[0];
  q = arguments[1] + 1;
  var data11 = {
    quantity: q
  };
  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", "http://localhost:3000/cart/" + index1, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {};

  xhr.onload = function () {
    cartShow();
  };

  xhr.send(JSON.stringify(data11));
}

function quantitySub() {
  index1 = arguments[0];
  q = arguments[1] - 1;

  if (q < 1) {} else {
    var data11 = {
      quantity: q
    };
    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:3000/cart/" + index1, true);
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onprogress = function () {};

    xhr.onload = function () {
      cartShow();
    };

    xhr.send(JSON.stringify(data11));
  }
} // ---------------------total bill show----------------


function totalBillShow() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/cart", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    var arr2 = JSON.parse(this.response);
    var totalBill1 = 0;

    for (var i = 0; i < arr2.length; i++) {
      totalBill1 = totalBill1 + arr2[i].productPrice * arr2[i].quantity;
    }

    totalBill = totalBill1;
    s = "<tr>\n            <td class=\"td-title-1\">Cart Subtotal</td>\n            <td class=\"td-title-2\">$ ".concat(totalBill, "</td>\n            </tr>\n            <tr>\n            <td class=\"td-title-1\">Shipping and Handing</td>\n            <td class=\"td-title-2\">$15.00</td>\n            </tr>\n            <tr>\n            <td class=\"td-title-1\">Vat</td>\n            <td class=\"td-title-2\">$00.00</td>\n            </tr>\n            <tr>\n            <td class=\"order-total\">Order Total</td>\n            <td class=\"order-total-price\">$ ").concat(totalBill + 15, "</td>\n            </tr>\n        ");
    document.getElementById('totalBillPrint').innerHTML = s;
  };

  xhr.send();
}

function createOrder() {
  orderCost = totalBill + 15;
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/cart", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    var Obj = {
      products: JSON.parse(this.response),
      orderCost: orderCost
    };
    console.log(Obj); // orderArray=[Obj]

    var sa = "";
    var xhra = new XMLHttpRequest();
    xhra.open("POST", "http://localhost:3000/order", true);
    xhra.setRequestHeader('content-type', 'application/json');

    xhra.onprogress = function () {};

    xhra.onload = function () {
      console.log("test");
      var url = "checkout.html";
      window.location = url;
    };

    xhra.send(JSON.stringify(Obj));
  };

  xhr.send();
}

function smallCartShow() {
  var total = 0;
  var xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "http://localhost:3000/cart", true);
  xhr1.setRequestHeader('content-type', 'application/json');

  xhr1.onprogress = function () {};

  xhr1.onload = function () {
    console.log("asdasdas");
    var arr2 = JSON.parse(this.response);
    var s = "";

    for (var i = 0; i < arr2.length; i++) {
      s = s + "<!-- single-cart -->\n                <div class=\"single-cart clearfix\">\n                    <div class=\"cart-img f-left\">\n                        <a href=\"#\">\n                            <img src=\"".concat(arr2[i].productCartImage, "\" alt=\"Cart Product\" />\n                        </a>\n                        <div class=\"del-icon\">\n                            <a onclick=\"deleteFromCart(").concat(arr2[i].id, ")\">\n                                <i class=\"zmdi zmdi-close\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"cart-info f-left\">\n                        <h6 class=\"text-capitalize\">\n                            <a href=\"#\">").concat(arr2[i].productName, "</a>\n                        </h6>\n                        <p>\n                            <span>Model <strong>:</strong></span>").concat(arr2[i].productModel, "\n                        </p>\n                        <p>\n                            <span>Color <strong>:</strong></span>Black, White\n                        </p>\n                    </div>\n                </div>\n                ");
      total = total + arr2[i].productPrice * arr2[i].quantity;
    }

    s = s + "</div>\n            </li>\n            <li>\n                <div class=\"top-cart-inner subtotal\">\n                    <h4 class=\"text-uppercase g-font-2\">\n                        Total  =  \n                        <span>".concat(total, "</span>\n                    </h4>\n                </div>\n            </li>\n            <li>\n                                                    <div class=\"top-cart-inner view-cart\">\n                                                        <h4 class=\"text-uppercase\">\n                                                            <a href=\"cart.html\">View cart</a>\n                                                        </h4>\n                                                    </div>\n                                                </li>\n                                                <li>\n                                                    <div class=\"top-cart-inner check-out\">\n                                                        <h4 class=\"text-uppercase\">\n                                                            <a href=\"checkout.html\">Check out</a>\n                                                        </h4>\n                                                    </div>\n                                                </li>\n                                            </ul>");
    document.getElementById('smallCartShow').innerHTML = s;
  };

  xhr1.send();
}

function quantitySmallCart() {// s=`<span class="cart-quantity" >${}</span>
  // `
}