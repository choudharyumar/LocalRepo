// array traverse
// Default
// let arr = [5, 11, 23, 45, 7, 22];
// console.log(arr[2])

//Manual

// let arr = [5, 11, 23, 45, 7, 22];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`the position ${i} the value ${arr[i]}`);
// }

// insert element in array

// Default

// let arr = [5, 11, 23, 45, 7, 22];
// let newEl = 46;
// let position = 1;
// arr.splice(position, 0, newEl);
// console.log(arr);

// Manually

// let arr = [5, 11, 23, 45, 7, 22];
// let position = 1;
// let newEl = 23;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     arr[i + 1] = arr[i];
//   }
//   if (i == position) {
//     arr[i] = newEl;
//   }
// }
// console.log(arr);

// Delete Element from array

// let arr = [5, 11, 23, 45, 7, 22];
// let position = 3;
// arr.splice(position, 1);
// console.log(arr);

// manually
// let arr = [5, 11, 23, 45, 7, 22];

// let position = 3;
// for (let i = position; i < arr.length - 1; i++) {
//   if (i >= position) {
//     arr[i] = arr[i + 1];
//   }
// }
// arr.length = arr.length - 1;
// console.log(arr);

// Search Element in array

// let arr = [5, 11, 23, 45, 7, 22];
// let searchEl = 233;
// let index = [];
// let find = arr.includes(searchEl);
// if (find == true) {
//   console.log("element found");
// } else {
//   console.log("element not found");
// }

// manually

// let arr = [5, 11, 23, 45, 7, 22];
// let searchEl = 45;
// let index = undefined;
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == searchEl) {
//     index = i;
//     found = true;
//   }
// }
// if (found == true) {
//   console.log("element found", index);
// } else {
//   console.log("element not found");
// }

// Merge two arrays;

// let arr1 = [5, 11, 23, 45, 7, 22];
// let arr2 = [3, 4, 5, 6, 7];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Manually

// let arr1 = [5, 11, 23, 45, 7, 22];
// let arr2 = [3, 4, 5, 6, 7];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3[arr1.length + i] = arr2[i];
// }

// console.log(arr3);

// Sorting array

// let arr1 = [5, 11, 23, 45, 7, 22];
// arr1.sort((a, b) => a - b);
// console.log(arr1);//ascending

// let arr1 = [5, 11, 23, 45, 7, 22];
// arr1.sort((a, b) => b - a);
// console.log(arr1); //descending

// Manually

// let arr1 = [5, 11, 23, 45, 7, 22];
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1.length; j++) {
//     if (arr1[j] > arr1[j + 1]) {
//       let temp = arr1[j];
//       arr1[j] = arr1[j + 1];
//       arr1[j + 1] = temp;
//     }
//   }
// }
// console.log(arr1);

// Reverse Array

// let arr1 = [5, 11, 23, 45, 7, 22];
// arr1.reverse();
// console.log(arr1);

// Manually

let arr1 = [5, 11, 23, 45, 7, 22];

function Rarr(arr1) {
  let start = 0;
  let end = arr1.length - 1;
  while (start <= end) {
    [arr1[start], arr1[end]] = [arr1[end], arr1[start]];
    start++;
    end--;
  }
}
Rarr(arr1);
console.log(arr1);
