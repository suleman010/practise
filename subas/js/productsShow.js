
    let s = "";
    let arr2=[];
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {
       arr2 = JSON.parse(this.response)
      for (let i = 0; i < arr2.length; i++) {
          s = s + `
          <!-- product-item start -->
          <div class="col-lg-4 col-md-6">
              <div class="product-item">
                  <div class="product-img">
                      <a href="single-product.html">
                          <img src="${arr2[i].productImage}" alt=""/>
                      </a>
                  </div>
                  <div class="product-info">
                      <h6 class="product-title">
                          <a href="single-product.html">${arr2[i].productName}</a>
                      </h6>
                      <div class="pro-rating">
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                          <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                      </div>
                      <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                              
                              <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                
                              </li>
                      </ul>
                  </div>
              </div>
          </div>
          <!-- product-item end -->
      
          
          `
      }
      document.getElementById('productsShow').innerHTML = s;
      
    }
    xhr.send()

    // -----------------recent products ---------------------
    recentProducts()

    function recentProducts(){
        let s = "";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/products", true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.onprogress = function () {
          console.log("on progress")
        }
        xhr.onload = function () {
          arr2 = JSON.parse(this.response)
          arr2.sort(function(a,b){return b.id - a.id})
          s="";
          for (let i = 0; i < arr2.length; i++) {
              if(arr2[i].id>arr2.length-3){
                s = s + `    <!-- product-item start -->
                <div class="product-item">
                    <div class="product-img">
                        <a href="single-product.html">
                            <img src="${arr2[i].productImage}" alt=""/>
                        </a>
                    </div>
                    <div class="product-info">
                        <h6 class="product-title">
                            <a href="#">${arr2[i].productName}</a>
                        </h6>
                        <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
                    </div>
                </div>
                <!-- product-item end -->
                `
              }
          }
          document.getElementById('recentProducts').innerHTML = s;
        }
        xhr.send()
    }


// ----------------- Only show samsung tabs only ----------------
function samsungTab(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/1/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i].categoryId=="2"){
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
            if(arr2[i].categoryId!="2"){
                
                // console.log(arr2[i])
                arr2.splice(i,1)
                // delete arr2[i]
            }
                    
        }
        
        
        document.getElementById('productsShow').innerHTML = s;
        console.log(arr2)

    }
    xhr.send()
   
    
}
// ----------------- Only show samsung smartphones only ----------------
function samsungSmartPhone(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/1/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i].categoryId=="1"){
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }else{    
                // console.log(arr2[i])
                arr2.splice(i,1)
                // delete arr2[i]
            }
                    
        }
            document.getElementById('productsShow').innerHTML = s;        
        }
    
    xhr.send()

}
// ----------------- Only show samsung watches only ----------------
function samsungWatch(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/1/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i].categoryId=="3"){
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }else{    
                // console.log(arr2[i])
                arr2.splice(i,1)
                // delete arr2[i]
            }
                    
        }
            document.getElementById('productsShow').innerHTML = s;        
        }
    
    xhr.send()

}
// ---------------APPLE PRODUCTS SHOW---------------

// ----------------- Only show apple tabs only ----------------
function appleTab(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/2/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i].categoryId=="2"){
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }else{    
                // console.log(arr2[i])
                arr2.splice(i,1)
                // delete arr2[i]
            }
                    
        }
            document.getElementById('productsShow').innerHTML = s;        
        }

    
    xhr.send()
   
    
}
// ----------------- Only show apple smartphones only ----------------
function appleSmartPhone(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/2/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i].categoryId=="1"){
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }else{    
                // console.log(arr2[i])
                arr2.splice(i,1)
                // delete arr2[i]
            }
                    
        }
            document.getElementById('productsShow').innerHTML = s;        
        }

    
    xhr.send()
   
    
}
// ----------------- Only show apple watches only ----------------
function appleWatch(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/brands/2/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
            if(arr2[i].categoryId=="3"){
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }else{    
                // console.log(arr2[i])
                arr2.splice(i,1)
                // delete arr2[i]
            }
                    
        }
            document.getElementById('productsShow').innerHTML = s;        
        }

    
    xhr.send()   
}
// --------------- Show operating system-----------------
function android(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/operatingsystem/1/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
            document.getElementById('productsShow').innerHTML = s;        
        }
    
    xhr.send()

}
// --------------- Show operating system IOS-----------------
function ios(){
    let s = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/operatingsystem/2/products", true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {

        arr2 = JSON.parse(this.response)
        let s="";
        for (let i = 0; i < arr2.length; i++) {
                s = s + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
            document.getElementById('productsShow').innerHTML = s;        
        }
    
    xhr.send()

}
// -------- price range slider -------------
function change1(){
    var miniPrice=parseInt($( "#slider-range" ).slider( "values", 0 ))
    var maxPrice=parseInt($( "#slider-range" ).slider( "values", 1 ))
    
        let sa="";
        for (let i = 0; i < arr2.length; i++) {
            
            if(arr2[i].productPrice<=maxPrice && arr2[i].productPrice>=miniPrice){
                console.log(arr2[i].productPrice)
                sa = sa + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
            document.getElementById('productsShow').innerHTML = sa;        
        }
}

// ------------COLOR SEARCH-----------------
function color(color1){
    let sa="";
    if(color1=="white"){
        
        for (let i = 0; i < arr2.length; i++) {
            for(let j=0;j<arr2[i].productColor.length;j++){
                
            if(arr2[i].productColor[j]=="white"){
                sa = sa + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
        }    
    }        
    }
    // ------------color = blue -------------------------------
    if(color1=="blue"){
        
        for (let i = 0; i < arr2.length; i++) {
            for(let j=0;j<arr2[i].productColor.length;j++){
                
            if(arr2[i].productColor[j]=="blue"){
                sa = sa + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
        }    
    }        
    }
    // ------------color = red -------------------------------
    if(color1=="red"){
        
        for (let i = 0; i < arr2.length; i++) {
            for(let j=0;j<arr2[i].productColor.length;j++){
                
            if(arr2[i].productColor[j]=="red"){
                sa = sa + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
        }    
    }        
    }
    // ------------color = Deep Sky Blue -------------------------------
    if(color1=="Deep Sky Blue"){
        
        for (let i = 0; i < arr2.length; i++) {
            for(let j=0;j<arr2[i].productColor.length;j++){
                
            if(arr2[i].productColor[j]=="Deep Sky Blue"){
                sa = sa + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
        }    
    }        
    }
    // ------------color = silver -------------------------------
    if(color1=="silver"){
        
        for (let i = 0; i < arr2.length; i++) {
            for(let j=0;j<arr2[i].productColor.length;j++){
                
            if(arr2[i].productColor[j]=="silver"){
                sa = sa + `
                <!-- product-item start -->
                <div class="col-lg-4 col-md-6">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html">
                                <img src="${arr2[i].productImage}" alt=""/>
                            </a>
                        </div>
                        <div class="product-info">
                            <h6 class="product-title">
                                <a href="single-product.html">${arr2[i].productName}</a>
                            </h6>
                            <div class="pro-rating">
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                                <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                            </div>
                            <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                                    
                                    <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                      
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- product-item end -->
                `
            }
        }    
    }
            
    }
            document.getElementById('productsShow').innerHTML = sa;        
        
}




// ------------newestitemfirst-----------------

function newestProductFirst(){
    
    console.log(arr2)

    var menu = document.getElementById("change_chart");
    // console.log(menu.value)
    let s = "";
    
    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://localhost:3000/products", true)
    // xhr.setRequestHeader('content-type', 'application/json')
    // xhr.onprogress = function () {
    //   console.log("on progress")
    // }

    
    // xhr.onload = function () {
    //    arr2 = JSON.parse(this.response)
       if(menu.value=='newest'){
       arr2.sort(function(a,b){return b.id - a.id})
       }
       if(menu.value=='hightolow'){
        arr2.sort(function(a,b){return b.productPrice - a.productPrice})
       }
       if(menu.value=='lowtohigh'){
        //    console.log("asdaa")
        arr2.sort(function(a,b){return a.productPrice - b.productPrice})
       }
      for (let i = 0; i < arr2.length; i++) {
          s = s + `
          <!-- product-item start -->
          <div class="col-lg-4 col-md-6">
              <div class="product-item">
                  <div class="product-img">
                      <a href="single-product.html">
                          <img src="${arr2[i].productImage}" alt=""/>
                      </a>
                  </div>
                  <div class="product-info">
                      <h6 class="product-title">
                          <a href="single-product.html">${arr2[i].productName}</a>
                      </h6>
                      <div class="pro-rating">
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                          <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                      </div>
                      <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                              
                              <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                
                              </li>
                      </ul>
                  </div>
              </div>
          </div>
          <!-- product-item end -->
          `
      }
    document.getElementById('productsShow').innerHTML = s;
    }
    // }

    // xhr.send()

// }


// ----------------------- search method ----------------
function search1(){
    var searchthis=document.getElementById("searchthis").value;
    console.log(searchthis)
    var cc="http://localhost:3000/products?productName_like="
    let s = "";
    let arr2=[];
    let xhr = new XMLHttpRequest();
    xhr.open("GET", cc.concat(searchthis), true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onprogress = function () {
      console.log("on progress")
    }
    xhr.onload = function () {
        arr2 = JSON.parse(this.response)
        console.log(arr2)
        for (let i = 0; i < arr2.length; i++) {
          s = s + `
          <!-- product-item start -->
          <div class="col-lg-4 col-md-6">
              <div class="product-item">
                  <div class="product-img">
                      <a href="single-product.html">
                          <img src="${arr2[i].productImage}" alt=""/>
                      </a>
                  </div>
                  <div class="product-info">
                      <h6 class="product-title">
                          <a href="single-product.html">${arr2[i].productName}</a>
                      </h6>
                      <div class="pro-rating">
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star"></i></a>
                          <a href="#"><i class="zmdi zmdi-star-half"></i></a>
                          <a href="#"><i class="zmdi zmdi-star-outline"></i></a>
                      </div>
                      <h3 class="pro-price">$ ${arr2[i].productPrice}</h3>
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
                              
                              <a onclick="addToCart(${arr2[i].id}); return false" title="Add to cart" ><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                
                              </li>
                      </ul>
                  </div>
              </div>
          </div>
          <!-- product-item end -->
      
          
          `
      }
      document.getElementById('productsShow').innerHTML = s;
      
    }
    xhr.send()

}