function addToCart(productid){
    // console.log("asd")
    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "http://localhost:3000/products/"+productid, true)
    xhr1.setRequestHeader('content-type', 'application/json')
    xhr1.onprogress = function () {
    
    }
    xhr1.onload = function () {
        product=JSON.parse(this.response)
        product.quantity="1";
        console.log(product)
        postAddToCart(JSON.stringify(product));
    }
    xhr1.send()
}

function postAddToCart(data){
    let xhr2 = new XMLHttpRequest();
    xhr2.open("POST", "http://localhost:3000/cart", true)
    xhr2.setRequestHeader('content-type', 'application/json')
    xhr2.onprogress = function () {
    }
    xhr2.onload = function () {
    }
    xhr2.send(data)
}

function getAddToCart(){
    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "http://localhost:3000/cart", true)
    xhr1.setRequestHeader('content-type', 'application/json')
    xhr1.onprogress = function () {
    
    }
    xhr1.onload = function () {
        var arr2=JSON.parse(this.response)
    }
    xhr1.send()
    console.log("array = " , addTocartArr)
}


function deleteFromCart(index){
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:3000/cart/"+index, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload=function(){
    cartShow(); 
    smallCartShow(); 

    }
    xhr.send()
  
}


