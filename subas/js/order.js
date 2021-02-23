var index1=0;
showOrderNo()

function showOrderNo(){
    
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/order", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
        }
    xhr.onload = function () {
        let arr2=JSON.parse(this.response)
        index1=Math.max(...arr2.map(o=>o.id));

        // ------- show fake order numberr -------------
        for(let i=0;i<arr2.length;i++){
            if(i==index1-1){
                s=s+`<li>
            <h6>order no</h6>
            <p>${arr2[i].fakeOrderNumber}</p>
        </li>`
            }
        }

        
        document.getElementById('orderNo').innerHTML=s
        
        orderDetails()
    }
    xhr.send()
    
}



function orderDetails(){
    
console.log(index1)
    let sa = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/order/"+index1, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
    }
    xhr.onload = function () {
        let arr2=JSON.parse(this.response)
        console.log(arr2)
        for(let i=0;i<arr2.products.length;i++){
            sa=sa+`        <tr>
            <td class="td-title-1">${arr2.products[i].productName} x ${arr2.products[i].quantity}</td>
            <td class="td-title-2">$${arr2.products[i].productPrice}</td>
        </tr>
        `
        console.log("lop test "+ i)
        }

        sa=sa+`

        <tr>
            <td class="td-title-1">Cart Subtotal</td>
            <td class="td-title-2">$${arr2.orderCost-15}</td>
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
            <td class="order-total-price">$${arr2.orderCost}
        </td>`

            document.getElementById('orderDetails').innerHTML=sa;
        }
        xhr.send()
    }