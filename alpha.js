const openCart = document.querySelector(".fa-bag-shopping");
const sidebar = document.querySelector(".sidebar");
openCart.addEventListener("click", () => {
  sidebar.style.display = "block";
});

const closeCart = document.querySelector(".fa-square-xmark");
closeCart.addEventListener("click", () => {
  sidebar.style.display = "none";
});

const user = document.querySelector(".fa-user-large");
user.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/home/logincopy.HTML";
});

const tops = document.querySelector(".top");
tops.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/top/top.HTML";
});

const bottoms = document.querySelector(".bottom");
bottoms.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/bottom/b.html";
});

const viewmore = document.querySelector("#viewmore");
viewmore.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/top/top.HTML";
});

const viewbottom = document.querySelector("#viewBottom");
viewbottom.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/bottom/b.html";
});

const partywear = document.querySelector("#partywear");
partywear.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/home/party.html";
});

const accessories = document.querySelector("#accessories");
accessories.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/home/ace.html";
});

const shop = document.querySelector("#shopnow");
shop.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Mark1/home/alpha.HTML";
});

const product = [
  {
    id: 1,
    image:
      "https://image.hm.com/assets/hm/95/d8/95d821e92f67eb4149bb6af557f8001873d777ed.jpg?imwidth=1260",
    title: "Yellow Crop Top Short Sleeve",
    price: "1150",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/71QGO8cqV7L.jpg",
    title: "Blue Floral Midi Dress",
    price: "1370",
  },
  {
    id: 3,
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/480838/item/ingoods_69_480838_3x4.jpg?width=369",
    title: "Blue Sports Tee Short Sleeve",
    price: "2547",
  },
  {
    id: 4,
    image:
      "https://image.hm.com/assets/hm/59/88/59887381096ed9d8c48c0315211e671d2b07770a.jpg?imwidth=1260",
    title: "Denim Light blue Trouser",
    price: "1799",
  },
  {
    id: 5,
    image:
      "https://image.hm.com/assets/hm/8a/87/8a873fd12e6ae4722b3698d51c4b76b3cea82c59.jpg?imwidth=1260",
    title: "White Mini Skirt",
    price: "1620",
  },
  {
    id: 6,
    image:
      "https://image.hm.com/assets/hm/4a/e1/4ae171caefa3b1dfa0883cda9e026a21b7bbf2c1.jpg?imwidth=1260",
    title: "Wide Black Trouser",
    price: "1920",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let cart = document.getElementById("root");
cart.innerHTML = categories
  .map((item, i) => {
    var { image, title, price } = item;
    return `
        <div class="box" style="background-image: url(${image});">
          
          <footer class="info">
           <div class="left">
            <p>${title}</p>
            <h2 class="h21">$ ${price}</h2>
            </div>
            <div class="right">
            <button class="btn"  onclick='addtocart(${i})'>Add to cart</button>
           </div>
          </footer>
          
        </div>`;
  })
  .join("");

var cartItems = [];

function addtocart(a) {
  cartItems.push({ ...categories[a] });
  displaycart();
}

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cartItems.length;
  document.getElementById("count1").innerHTML = cartItems.length;
  if (cartItems.length === 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cartItems
      .map((item, j) => {
        var { image, title, price } = item;
        total = total + Number(price);
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return `
            <div class='cart-item'>
              <div class='row-img'>
                <img class='rowing' src="${image}">
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size:15px;'>$${price}.00</h2>
              <i class='fa-solid fa-trash' onclick='delElement(${j})'></i>
            </div>`;
      })
      .join("");
  }
  saveCart();
}

function delElement(index) {
  cartItems.splice(index, 1);
  displaycart();
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("cartItems")) {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
  }
  displaycart(); // Display the cart items
});
