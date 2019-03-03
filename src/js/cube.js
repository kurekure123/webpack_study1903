
//함수 표현식
// var cube = function (x) {
//   return x * x * x;
// }
// //named export
// export var cube = function (x) {
//   return x * x * x;
// }


// export default cube = function (x) {
//   return x * x * x;
// }

//default export 는 파일에서 딱 한개만 가능
export default function cube(x) {
  return x * x * x;
}