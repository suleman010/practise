let arr2=[];
let currentOrderNumber=0;
ourOrder()
function ourOrder(){
    let s = "";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/order/", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      
    }
    xhr.onload = function () {
        arr2 = JSON.parse(this.response)
        currentOrderNumber=Math.max(...arr2.map(o=>o.id));

        s=`

    <tr>
        <td class="td-title-1">Total Cost</td>
        <td class="td-title-2">$ ${arr2[currentOrderNumber-1].orderCost-15}</td>
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
        <td class="order-total-price">$${arr2[currentOrderNumber-1].orderCost}</td>
    </tr>`
    
    document.getElementById("OurOrder").innerHTML=s
    }
    xhr.send()


}

// ----------- genrating order number and deleting cart  --------------------
function placeOrder(){
    orderCurrent=JSON.stringify(arr2[currentOrderNumber-1].id)
    price=JSON.stringify(arr2[currentOrderNumber-1].orderCost-100)
    let FakeOrderNumber=price.concat(JSON.stringify(Math.floor(Math.random() * 1001)) , orderCurrent)
    console.log( FakeOrderNumber)

    var data11 = {
        fakeOrderNumber: FakeOrderNumber
    }
    let xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:3000/order/" + orderCurrent, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {}
    xhr.onload = function () {
        deleteFullCart(orderCurrent)
        setInterval(() => {
            let url="order.html"
            window.location=url    
        }, 2000);

    }
    xhr.send(JSON.stringify(data11))
    
}
function deleteFullCart(){
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/cart", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
        console.log("on progress")
    }
    xhr.onload = function () {
        let arr2 = JSON.parse(this.response)
        for(let i=0;i<arr2.length;i++){

            

            let xhr = new XMLHttpRequest();
            xhr.open("DELETE", "http://localhost:3000/cart/"+arr2[i].id, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.onload=function(){

            }
            xhr.send()
        }
        cartShow(); 
        smallCartShow(); 
    
    }
    xhr.send()



    
}





