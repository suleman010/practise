newProducts()

function newProducts(){
    let s = "";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {
      let arr2 = JSON.parse(this.response)
      s=`<div class="row active-featured-product slick-arrow-2" >`
      for (let i = 0; i < arr2.length; i++) {
          if(arr2[i].id>arr2.length-4){
            s = s + `<!-- product-item start -->
            <div class="col">
                <div class="product-item product-item-2">
                    <div class="product-img">
                        <a href="single-product.html">
                            <img src="${arr2[i].productImage}" alt=""/>
                        </a>
                    </div>
                    <div class="product-info">
                        <h6 class="product-title">
                            <a href="single-product.html">${arr2[i].productName}</a>
                        </h6>
                        <h6 class="brand-name"></h6>
                        <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
                    </div>
                    <ul class="action-button">
                        <li>
                            <a href="#" title="Wishlist"><i class="zmdi zmdi-favorite"></i></a>
                        </li> 
                        <li>
                            <a href="#" data-toggle="modal"  data-target="#productModal" title="Quickview"><i class="zmdi zmdi-zoom-in"></i></a>
                        </li>
                        <li>
                            <a href="#" title="Compare"><i class="zmdi zmdi-refresh"></i></a>
                        </li>
                        <li>
                            <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- product-item end -->
            
            `
          }
      }
      document.getElementById('newProducts').innerHTML = s;
    }
    xhr.send()


}

function brandNameFinder(i){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/"+i, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {
        console.log(this.response.name)
        return this.response.name
    }
    xhr.send()
}