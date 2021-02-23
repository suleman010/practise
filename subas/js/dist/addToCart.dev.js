"use strict";

var addTocartArr = [];

function addToCart(productid) {
  // console.log("asd")
  var xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "http://localhost:3000/products/" + productid, true);
  xhr1.setRequestHeader('content-type', 'application/json');

  xhr1.onprogress = function () {};

  xhr1.onload = function () {
    postAddToCart(this.response);
  };

  xhr1.send();
  console.log("array = ", addTocartArr);
}

function postAddToCart(data) {
  var xhr1 = new XMLHttpRequest();
  xhr1.open("POST", "http://localhost:3000/cart/", true);
  xhr1.setRequestHeader('content-type', 'application/json');

  xhr1.onprogress = function () {};

  xhr1.onload = function () {
    console.log(data);
  };

  xhr1.send(data);
}

function getAddToCart() {
  var xhr1 = new XMLHttpRequest();
  xhr1.open("GET", "http://localhost:3000/cart", true);
  xhr1.setRequestHeader('content-type', 'application/json');

  xhr1.onprogress = function () {};

  xhr1.onload = function () {
    var arr2 = JSON.parse(this.response);
  };

  xhr1.send();
  console.log("array = ", addTocartArr);
}

function deletFromCart() {
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", "http://localhost:3000/data/" + index, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onload = function () {
    console.log(index);
    getData();
  };

  xhr.send();
}