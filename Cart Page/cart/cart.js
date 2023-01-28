var cartArray = JSON.parse(localStorage.getItem("cartItem"));
console.log(cartArray);
showToUI(cartArray);
function showToUI(cartArray) {
  document.getElementById("main").innerHTML = "";
  cartArray.map((elem, index) => {
    var div = document.createElement("div");
    div.setAttribute("id", "card");

    var imgTag = document.createElement("img");
    imgTag.src = elem.image;
    imgTag.setAttribute("id", "imgTag");

    var titleTag = document.createElement("h3");
    titleTag.innerText = elem.title;

    var price = document.createElement("h5");
    price.innerText = elem.price * elem.qty;

    var removeBtn = document.createElement("button");
    removeBtn.innerText = "REMOVE";
    removeBtn.addEventListener("click", () => {
      removeData(index);
    });

    var inc = document.createElement("button");

    inc.innerText = "➕";
    // increament
    inc.addEventListener("click", () => {
      increament(elem);
    });
    // console.log(itemAlreadyExist.qty);
    var dec = document.createElement("button");
    dec.setAttribute("id", "decreamentBtn");
    dec.innerText = "➖";
    // decreament
    dec.addEventListener("click", () => {
      decreament(elem);
    });
    var span = document.createElement("span");

    span.setAttribute("id", "spanTag");
    span.innerText = elem.qty;
    div.append(imgTag, titleTag, price, removeBtn, inc, span, dec);
    document.getElementById("main").append(div);
    document.getElementById("span").innerHTML = cartArray.length;
  });
}
// delete function

function removeData(index) {
  console.log(index);
  var deleted = cartArray.splice(index, 1);
  console.log(deleted);
  showToUI(cartArray);
  localStorage.setItem("cartItem", JSON.stringify(cartArray));
  document.getElementById("span").innerHTML = cartArray.length;
  calculation();
}

// increament qunatity function
function increament(product) {
  let itemAlreadyExist = cartArray.find((elem) => product.id === elem.id);

  itemAlreadyExist.qty += 1;

  localStorage.setItem("cartItem", JSON.stringify(cartArray));
  showToUI(cartArray);
  calculation();
}

// decreament quantity function
function decreament(product) {
  var itemAlreadyExist = cartArray.find((elem) => elem.id === product.id);
  console.log(itemAlreadyExist);
  if (itemAlreadyExist.qty === 1) {
    return;
  } else {
    itemAlreadyExist.qty -= 1;
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
    showToUI(cartArray);
    calculation();
  }
}

// implement map and reduce together for total amount calculation
function calculation() {
  document.getElementById("total").innerHTML = "";
  var total = cartArray
    .map((elem) => elem.price * elem.qty)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  document.getElementById("total").append(total);
}
calculation();

// here for calculation we write map and reduce both are seprated
// function calculation() {
//   document.getElementById("total").innerHTML = "";
//   var totalCal = cartArray.map((elem) => elem.price * elem.qty);
//   var total = totalCal.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
//   document.getElementById("total").append(total);
// }
// calculation();
