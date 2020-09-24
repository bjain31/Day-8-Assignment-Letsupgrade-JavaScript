let countval = 0;
let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.jpg",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 7,
      name: "Mens Formal Shirt",
      size: "XL",
      color: "Purple",
      price: 1400,
      image: "product7.jpg",
      description: "Cotton/Linen Purple Color Formal Shirt",
    },
    {
      id: 8,
      name: "Women's Formal Shirt",
      size: "M",
      color: "White",
      price: 1000,
      image: "product8.jpg",
      description: "Poly Cotton Full Sleeve Formal Shirt",
    },
    {
      id: 9,
      name: "Sports Shoes",
      size: "M",
      color: "Black/Grey",
      price: 800,
      image: "product9.jpg",
      description: "Men's Sports Running Shoes",
    },
    {
      id: 10,
      name: "Women's Shoes",
      size: "S",
      color: "Pink",
      price: 700,
      image: "product10.jpg",
      description: "Women's Running Shoes",
    },
    {
      id: 11,
      name: "Smart Watch",
      size: "",
      color: "Gold",
      price: 1300,
      image: "product11.jpg",
      description: "Padgene DZ09 Bluetooth Smart Watch with Camera ",
    },
    {
      id: 12,
      name: "Gym Wear",
      size: "M",
      color: "Smokey Grey",
      price: 900,
      image: "product12.jpg",
      description: "Men Gym Wear Smokey Grey Dry & Body Fit T-Shirt ",
    },
  ];

  cart = [];

  function displayProduct(productData, targetid){
    let productString="";
    let buttonDis = "Add To Cart"
   let funToCall = "addToCart";
   console.log(funToCall);
    if( targetid == "cart") {
    funToCall = "removeFromCart";
    buttonDis = "Remove From Cart"
    } 
    productData.forEach(function(product, index) {
     let { id, name, image, color, description, price, size } = product;
   
     productString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="${funToCall}(${index})">${buttonDis}</button>
          </p>
        </div>`;
      });
  console.log('productString');
  
  
    document.getElementById(targetid).innerHTML=productString;
  }
  displayProduct(products, "productwrapper");
  
  function searchProduct() {
    let searchValue = document.getElementById('search').value;
    let searchedProducts = products.filter(function(product){
      let searchString= product.name+" "+product.color+" "+product.description;
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!= -1;
  
    });
    displayProduct(searchedProducts, "productwrapper");
  
  
  }
  
  
  function updateCount(){
    document.getElementById("count").innerHTML = countval;
  }
  function addToCart(index) {
     // console.log("hello");
  
     let check = true;
     check = checkduplicate(index)
     if(check)
    { cart.push(products[index]);
     displayProduct(cart, "cart");
     countval++;
     updateCount();
   } 
   }
  
  function removeFromCart(index) {
  
     cart.splice(index, 1);
     displayProduct(cart, "cart");
     countval--;
     updateCount();
   }
  function checkduplicate(index){
    let flag = cart.filter(val => val.id == products[index].id);
    console.log(cart.id);
     if(flag != 0)
    {
      alert("Same Product Already in Cart !");
    return false;
  } 
  else{
    return true;
    }
  }
  
  
  
  function filterprod()
      {
         let min = document.getElementById("min").value;
   let max = document.getElementById("max").value;
        console.log(min);
       let res = products.filter((val) => val.price >= min && val.price <= max);
       displayProduct(res, "productwrapper");
      }
  