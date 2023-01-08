// first ways 

// const getData = () => {
//   console.log("debounce call ....");
// };
// const myDebounce = (cb, delay) => {
//   let timer;
//   return function () {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb();
//     }, delay);
//   };
// };
// const bestFunction = myDebounce(getData, 2000);


// Es 6 2nd ways
// const myDebounce = (cb, delay) => {
//   let timer;
//   return function () {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb();
//     }, delay);
//   };
// };
// const magicSee = myDebounce(() => {
//   console.log("debounce call");
// }, 2000);
// function bestFunction() {
//   magicSee();
// }

// Es 5 (3rd ways)
// const myDebounce = (cb, delay) => {
//   let timer;
//   return function () {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb();
//     }, delay);
//   };
// };
// let magicSee = myDebounce(function () {
//   console.log("i am here");
// }, 2000);
// function bestFunction() {
//   magicSee();
// }

// 4th ways 
const callBack = () => {
  console.log("I am call back function");
};
const debounce = (cb, delay) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};

let magic = debounce(callBack, 2000);
function bestFunction() {
  magic();
}
