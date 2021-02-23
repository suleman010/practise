"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var index1 = 0;
showOrderNo();

function showOrderNo() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/order", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {};

  xhr.onload = function () {
    var arr2 = JSON.parse(this.response);
    index1 = Math.max.apply(Math, _toConsumableArray(arr2.map(function (o) {
      return o.id;
    }))); // ------- show fake order numberr -------------

    for (var i = 0; i < arr2.length; i++) {
      if (i == index1 - 1) {
        s = s + "<li>\n            <h6>order no</h6>\n            <p>".concat(arr2[i].fakeOrderNumber, "</p>\n        </li>");
      }
    }

    document.getElementById('orderNo').innerHTML = s;
    orderDetails();
  };

  xhr.send();
}

function orderDetails() {
  console.log(index1);
  var sa = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/order/" + index1, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {};

  xhr.onload = function () {
    var arr2 = JSON.parse(this.response);
    console.log(arr2);

    for (var i = 0; i < arr2.products.length; i++) {
      sa = sa + "        <tr>\n            <td class=\"td-title-1\">".concat(arr2.products[i].productName, " x ").concat(arr2.products[i].quantity, "</td>\n            <td class=\"td-title-2\">$").concat(arr2.products[i].productPrice, "</td>\n        </tr>\n        ");
      console.log("lop test " + i);
    }

    sa = sa + "\n\n        <tr>\n            <td class=\"td-title-1\">Cart Subtotal</td>\n            <td class=\"td-title-2\">$".concat(arr2.orderCost - 15, "</td>\n        </tr>\n        <tr>\n            <td class=\"td-title-1\">Shipping and Handing</td>\n            <td class=\"td-title-2\">$15.00</td>\n        </tr>\n        <tr>\n            <td class=\"td-title-1\">Vat</td>\n            <td class=\"td-title-2\">$00.00</td>\n        </tr>\n        <tr>\n            <td class=\"order-total\">Order Total</td>\n            <td class=\"order-total-price\">$").concat(arr2.orderCost, "\n        </td>");
    document.getElementById('orderDetails').innerHTML = sa;
  };

  xhr.send();
}