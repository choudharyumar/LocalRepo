// Direct Recurrsion

// function fact(x) {
//   if (x == 0 || x == 1) {
//     return 1;
//   } else {
//     return x * fact(x - 1);
//   }
// }
// let n = parseInt(prompt("enter the value of n"));
// let result = fact(n);
// console.log(result);

// Indirect Recursion

let money = 100;
let TotalApple = 0;
function BuyApple(x) {
  if (x >= 0) {
    console.log(`the money ${x} and total apple ${TotalApple}`);
    BuyMore(x);
  } else {
    console.log("there is not sufficient money");
  }
}
function BuyMore(x) {
  TotalApple++;
  BuyApple(x - 10);
}
BuyApple(money);
