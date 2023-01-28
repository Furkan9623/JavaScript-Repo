console.log("furkan");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => showToUI(data));

const showToUI = (data) => {
  data.map((elem, index) => {
    var div = document.createElement("div");
    div.setAttribute("id", "card");

    var imgTag = document.createElement("img");
    imgTag.src = elem.image;
    imgTag.setAttribute("id", "imgTag");

    var titleTag = document.createElement("h3");
    titleTag.innerText = elem.title;

    var price = document.createElement("h5");
    price.innerText = elem.price;

    var addBtn = document.createElement("button");
    addBtn.innerText = "ADD TO CART";
    addBtn.addEventListener("click", (index) => {
      addToCart(elem);
    });
    console.log(elem.qty);
    div.append(imgTag, titleTag, price, addBtn);
    document.getElementById("main").append(div);
    document.getElementById("span").innerHTML = cartArray.length;
  });
};

var cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
function addToCart(product) {
  var itemAlreadyExist = cartArray.find((elem) => product.id === elem.id);
  console.log(itemAlreadyExist);
  if (itemAlreadyExist === undefined) {
    alert("Item Added to the Cart");
    cartArray.push({ ...product, qty: 1 });
  } else {
    alert(`${itemAlreadyExist.qty + 1} Quantity Added to the Cart`);
    itemAlreadyExist.qty += 1;
  }
  localStorage.setItem("cartItem", JSON.stringify(cartArray));
  document.getElementById("span").innerHTML = cartArray.length;
}

function goToCart() {
  window.location.href = "../cart/cart.html";
}
