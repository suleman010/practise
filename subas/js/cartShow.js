cartShow();
orderArray=[]
totalBill=0;
orderCost=0;

function cartShow() {
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/cart", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
        console.log("on progress")
    }
    xhr.onload = function () {
        let arr2 = JSON.parse(this.response)
        for (let i = 0; i < arr2.length; i++) {
            s = s + `
          <tr>
              <td class="product-thumbnail">
                  <div class="pro-thumbnail-img">
                      <img src="img/cart/1.jpg" alt="">
                  </div>
                  <div class="pro-thumbnail-info text-left">
                      <h6 class="product-title-2">
                          <a >${arr2[i].productName}</a>
                      </h6>
                      <p>Brand: Brand Name</p>
                      <p>Model: ${arr2[i].productModel}</p>
                      <p> Color: Black, White</p>
                  </div>
              </td>
              <td class="product-price">$ ${arr2[i].productPrice}</td>
              <td class="product-quantity">
                    <div class="cart-plus-minus f-left"><div class="dec qtybutton"><button onclick="quantitySub(${arr2[i].id},${arr2[i].quantity});return false">-</button></div>
                        <input type="text" value="${arr2[i].quantity}" name="qtybutton" class="cart-plus-minus-box">
                    <div class="inc qtybutton"><button onclick="quantityAdd(${arr2[i].id},${arr2[i].quantity});return false ">+</button></div></div> 
                </td>
              <td class="product-subtotal">$ ${arr2[i].productPrice*arr2[i].quantity}</td>
              <td class="product-remove">
                  <button onclick="deleteFromCart(${arr2[i].id});return false" ><i class="zmdi zmdi-close"></i></button>
              </td>
          </tr>
          `
        }
        document.getElementById('cartPrint').innerHTML = s;
        totalBillShow()
    }
    xhr.send()
}

function quantityAdd() {
    index1 = arguments[0]
    q = arguments[1] + 1
    var data11 = {
        quantity: q
    }
    let xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:3000/cart/" + index1, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {}
    xhr.onload = function () {
    cartShow()
    }
    xhr.send(JSON.stringify(data11))
}

function quantitySub() {
    index1 = arguments[0]
    q = arguments[1] - 1;
    if (q < 1) {
    } 
    else {
        var data11 = {
        quantity: q
        }
        let xhr = new XMLHttpRequest();
        xhr.open("PATCH", "http://localhost:3000/cart/" + index1, true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.onprogress = function () {}
        xhr.onload = function () {
        cartShow()
        }
        xhr.send(JSON.stringify(data11))
    }
}
// ---------------------total bill show----------------
function totalBillShow() {

    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/cart", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
        console.log("on progress")
    }
    xhr.onload = function () {
        let arr2 = JSON.parse(this.response)
        let totalBill1=0;
        for (let i = 0; i < arr2.length; i++) {
            totalBill1=totalBill1+(arr2[i].productPrice*arr2[i].quantity);    
        }
        totalBill=totalBill1    
        s = `<tr>
            <td class="td-title-1">Cart Subtotal</td>
            <td class="td-title-2">$ ${totalBill}</td>
            </tr>
            <tr>
            <td class="td-title-1">Shipping and Handing</td>
            <td class="td-title-2">$15.00</td>
            </tr>
            <tr>
            <td class="td-title-1">Vat</td>
            <td class="td-title-2">$00.00</td>
            </tr>
            <tr>
            <td class="order-total">Order Total</td>
            <td class="order-total-price">$ ${totalBill+15}</td>
            </tr>
        `
        document.getElementById('totalBillPrint').innerHTML = s;
        
    
    }
    xhr.send()

}

function createOrder(){
    orderCost=totalBill+15
    
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/cart", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
        console.log("on progress")
    }
    xhr.onload = function () {
        let Obj={products:JSON.parse(this.response) , orderCost:orderCost}
        console.log(Obj)
        // orderArray=[Obj]
        let sa = "";
        let xhra = new XMLHttpRequest();
        xhra.open("POST", "http://localhost:3000/order", true)
        xhra.setRequestHeader('content-type', 'application/json')
        xhra.onprogress = function () {
        }
        xhra.onload = function () {
            console.log("test")
            let url="checkout.html"
            window.location=url
        }
        xhra.send(JSON.stringify(Obj))

    }
    xhr.send()


}



function smallCartShow(){
    let total=0;
    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "http://localhost:3000/cart", true)
    xhr1.setRequestHeader('content-type', 'application/json')
    xhr1.onprogress = function () {
    }
    xhr1.onload = function () {
        console.log("asdasdas")
        let arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
                s = s + `<!-- single-cart -->
                <div class="single-cart clearfix">
                    <div class="cart-img f-left">
                        <a href="#">
                            <img src="${arr2[i].productCartImage}" alt="Cart Product" />
                        </a>
                        <div class="del-icon">
                            <a onclick="deleteFromCart(${arr2[i].id})">
                                <i class="zmdi zmdi-close"></i>
                            </a>
                        </div>
                    </div>
                    <div class="cart-info f-left">
                        <h6 class="text-capitalize">
                            <a href="#">${arr2[i].productName}</a>
                        </h6>
                        <p>
                            <span>Model <strong>:</strong></span>${arr2[i].productModel}
                        </p>
                        <p>
                            <span>Color <strong>:</strong></span>Black, White
                        </p>
                    </div>
                </div>
                `
                total=total+arr2[i].productPrice*arr2[i].quantity;

            }
            s=s+`</div>
            </li>
            <li>
                <div class="top-cart-inner subtotal">
                    <h4 class="text-uppercase g-font-2">
                        Total  =  
                        <span>${total}</span>
                    </h4>
                </div>
            </li>
            <li>
                                                    <div class="top-cart-inner view-cart">
                                                        <h4 class="text-uppercase">
                                                            <a href="cart.html">View cart</a>
                                                        </h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="top-cart-inner check-out">
                                                        <h4 class="text-uppercase">
                                                            <a href="checkout.html">Check out</a>
                                                        </h4>
                                                    </div>
                                                </li>
                                            </ul>`
            document.getElementById('smallCartShow').innerHTML = s;        
 
    }
    xhr1.send()
}

function quantitySmallCart(){
    // s=`<span class="cart-quantity" >${}</span>
    // `
}


