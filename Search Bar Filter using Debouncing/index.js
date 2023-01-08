const countries = [
  "furkan",
  "afsar",
  "sufyan",
  "farhan",
  "faizan",
  "yusuf",
  "john",
];
showUI(countries);
function showUI(arr) {
  document.querySelector(".h3Tag").innerText = "";
  arr.map((elem) => {
    var p = document.createElement("p");
    p.innerText = elem;
    document.querySelector(".h3Tag").append(p);
  });
}

// search functionality
function filterFunction() {
  var inputData = document.getElementById("inputBox").value;
  console.log(inputData);
  const filterData = countries.filter((elem) => {
    return elem.toLowerCase().includes(inputData.toLowerCase());
  });
  showUI(filterData);
  console.log(filterData);
}

// debouncing
const myDebounce = (cb, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
let magic = myDebounce(filterFunction, 2000);
//onkeyup function
function bestFunction() {
  magic();
}
