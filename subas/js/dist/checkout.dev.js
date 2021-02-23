"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var arr2 = [];
var currentOrderNumber = 0;
ourOrder();

function ourOrder() {
  var s = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/order/", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {};

  xhr.onload = function () {
    arr2 = JSON.parse(this.response);
    currentOrderNumber = Math.max.apply(Math, _toConsumableArray(arr2.map(function (o) {
      return o.id;
    })));
    s = "\n\n    <tr>\n        <td class=\"td-title-1\">Total Cost</td>\n        <td class=\"td-title-2\">$ ".concat(arr2[currentOrderNumber - 1].orderCost - 15, "</td>\n    </tr>\n    <tr>\n        <td class=\"td-title-1\">Shipping and Handing</td>\n        <td class=\"td-title-2\">$15.00</td>\n    </tr>\n    <tr>\n        <td class=\"td-title-1\">Vat</td>\n        <td class=\"td-title-2\">$00.00</td>\n    </tr>\n    <tr>\n        <td class=\"order-total\">Order Total</td>\n        <td class=\"order-total-price\">$").concat(arr2[currentOrderNumber - 1].orderCost, "</td>\n    </tr>");
    document.getElementById("OurOrder").innerHTML = s;
  };

  xhr.send();
} // ----------- genrating order number and deleting cart  --------------------


function placeOrder() {
  orderCurrent = JSON.stringify(arr2[currentOrderNumber - 1].id);
  price = JSON.stringify(arr2[currentOrderNumber - 1].orderCost - 100);
  var FakeOrderNumber = price.concat(JSON.stringify(Math.floor(Math.random() * 1001)), orderCurrent);
  console.log(FakeOrderNumber);
  var data11 = {
    fakeOrderNumber: FakeOrderNumber
  };
  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", "http://localhost:3000/order/" + orderCurrent, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {};

  xhr.onload = function () {
    deleteFullCart(orderCurrent);
    setInterval(function () {
      var url = "order.html";
      window.location = url;
    }, 2000);
  };

  xhr.send(JSON.stringify(data11));
}

function deleteFullCart() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/cart", true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onload = function () {
    var arr2 = JSON.parse(this.response);

    for (var i = 0; i < arr2.length; i++) {
      var _xhr = new XMLHttpRequest();

      _xhr.open("DELETE", "http://localhost:3000/cart/" + arr2[i].id, true);

      _xhr.setRequestHeader('content-type', 'application/json');

      _xhr.onload = function () {};

      _xhr.send();
    }

    cartShow();
    smallCartShow();
  };

  xhr.send();
}