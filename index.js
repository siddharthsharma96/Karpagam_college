// console.log(a);

// var a = 10;

// console.log(a);

// // names();
// console.log(names);
// function names(para1) {
//   var b = 10;
//   console.log(10, para1);
// }
// // console.log(b);
// names("Siddharth");
// // c();
// var c = function () {
//   console.log("gfgfhhf");
// };
// c();
// console.log(a);
// console.log(b);

// console.log(c);
// let a = 10;

// var b = 20;

// const c = 30;
// console.log(a);
// console.log(b);

// console.log(c);
// setTimeout(() => {
//   console.log("name");
// }, 0);
// var c = function () {
//   console.log("name1");
// };
// let a = (para) => {
//   console.log("name2");
//   para();
// };
// a(c);

// const setPromise = new Promise((resolve, reject) => {
//   resolve(console.log("resolving things here"));
// });

// const handlePromise = async () => {
//   const response = await setPromise();
//   console.log(response);
// };

// const handleApi = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// };
// handleApi();

const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

const b = arr.map((item) => {
  return item * 2;
});
console.log(arr);

console.log(b);
