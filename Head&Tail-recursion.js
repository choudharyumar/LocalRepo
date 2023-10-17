// Head recursion

// function count(x) {
//   console.log(x);
//   if (x > 0) {
//     count(x - 1);
//   }
// }
// count(5);

// Tail recursion

// function count(x) {
//   if (x > 0) {
//     count(x - 1);
//   }
//   console.log(x);
// }
// count(5);

// Reverse array using recursion

let arr = [3, 5, 7, 9];
let temp;
function RA(arr, start, end) {
  if (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    RA(arr, start + 1, end - 1);
  }
}
RA(arr, 0, arr.length - 1);
console.log(arr);
