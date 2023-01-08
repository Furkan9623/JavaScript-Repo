var pressCount = 0;
var triggerCount = 0;
const getData = () => {
  alert(
    "when i stop clicking then after 2second my triger increase, this is becoz of debouncing"
  );
  triggerCount++;
  document.getElementById("trigger").innerHTML = triggerCount;
  console.log("I am clicked....");
};
const myDebounce = (cb, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
const debouncCall = myDebounce(getData, 2000);
function bestFunction() {
  pressCount++;
  document.getElementById("count").innerHTML = pressCount;
  debouncCall();
}
