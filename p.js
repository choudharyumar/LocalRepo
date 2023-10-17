// array traverse
// let arr = [5, 2, 7, 9, 11];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Insert element in array

// Default method

// let arr = [5, 2, 7, 9, 11]
// let newel = 14;
// let position = 3;
// arr.splice(position, 0, newel);
// console.log(arr);

// Manually

// let arr = [5, 2, 7, 9, 11];
// let newel = 14;
// let position = 2;
// let length = arr.length;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     arr[i + 1] = arr[i];

//     if (i == position) {
//       arr[i] = newel;
//     }
//   }
// }
// console.log(arr);

// Delete element from the arrray

// let arr = [5, 2, 7, 9, 11];
// let position = 2;
// arr.splice(position, 1);
// console.log(arr);

// Manually

// let arr = [5, 2, 7, 9, 11];
// let position = 2;
// for (let i = position; i < arr.length; i++) {
//   if (i >= position) {
//     arr[i] = arr[i + 1];
//   }
// }
// arr.length = arr.length - 1;
// console.log(arr);

// Search Element in array

// default method

// let arr = [5, 2, 7, 9, 11];
// let find = 2;
// console.log(arr.includes(find));
// console.log(arr.indexOf(find));

// manually

// let arr = [5, 2, 7, 9, 11];
// let find = 9;
// let result = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == find) {
//     result = true;
//     find = i;
//   } else {
//     result = false;
//   }
// }
// if ((result = true)) {
//   console.log(`at position ${find} the element is present`);
// } else {
//   console.log("the element is not present");
// }

// Merge two arrays

// Default

// let arr1 = [5, 2, 7, 9, 11];
// let arr2 = [7, 9, 11, 23, 123];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Manually

// let arr1 = [5, 2, 7, 9, 11];
// let arr2 = [7, 9, 11, 23, 123];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3[arr1.length + i] = arr2[i];
// }
// console.log(arr3);

// sorting arrays

// Default

// let arr = [5, 2, 7, 9, 11];
// arr.sort((a, b) => a - b);
// console.log(arr);

// Manually

// let arr = [5, 2, 7, 9, 11];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j + 1];
//       arr[j + 1] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log(arr);

// Reverse an array

// Default

// let arr = [5, 2, 7, 9, 11];
// arr.reverse(arr);
// console.log(arr);

// Manually

// let arr = [5, 2, 7, 9, 11];

// function RA(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }
// RA(arr);
// console.log(arr);

// Recursion

// to find factorial

// function fact(n) {
//   let result;
//   if (n == 0 || n == 1) {
//     return 1;
//   } else if (n > 1) {
//     return n * fact(n - 1);
//   }
//   if (n < 0) {
//     return `enter the correct positive value`;
//   }
// }
// let n = parseInt(prompt("enter the value of n"));
// let factorial = fact(n);
// console.log(factorial);

// Head and tail recursion
// let n = 5;
// function count(n) {
//   console.log(n);//Head Recursion
//   if (n > 0) {
//     count(n - 1);
//   }
// }
// count(n);

// Tail Recursion

// let n = 5;
// function count(n) {
//   if (n > 0) {
//     count(n - 1);
//   }
//   console.log(n);
// }
// count(n);

// Indirect Recursion

// let TotalApple = 0;
// let money = 100;
// function buyApple(x) {
//   if (x >= 10) {
//     console.log(` the money is ${x} and the total apple is ${TotalApple}`);
//     BuyMore(x);
//   } else {
//     console.log("there is not sufficient money");
//   }
// }
// function BuyMore(x) {
//   TotalApple += 1;
//   buyApple(x - 10);
// }
// buyApple(money);

// Reverse Array using recursion

// let arr = [5, 2, 4, 9, 11];
// function RA(arr, start, end) {
//   if (start <= end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     RA(arr, start + 1, end - 1);
//   }
// }
// RA(arr, 0, arr.length - 1);
// console.log(arr);
