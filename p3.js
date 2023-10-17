// Binary search with iterative approach

// let data = [3, 4, 5, 6, 7];
// let start = 0;
// let end = data.length - 1;
// let mid;
// let position = undefined;
// let find = 6;

// while (start <= end) {
//   mid = Math.floor((start + end) / 2);

//   if (data[mid] == find) {
//     position = mid;
//     break;
//   }
//   if (data[mid] > find) {
//     end = mid - 1;
//   }
//   if (data[mid] < find) {
//     start = mid + 1;
//   } else {
//     console.log("element is not present");
//   }
// }
// console.log(position);

// Binary Search with recursive approach

// let data = [3, 5, 7, 9, 19, 41, 45];
// function Bs(data, start, end) {
//   let find = 41;
//   let position = undefined;
//   if (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (data[mid] == find) {
//       position = mid;
//       console.log(position);
//     }
//     if (data[mid] < find) {
//       Bs(data, start + 1, end);
//     }
//     if (data[mid] > find) {
//       Bs(data, start, mid - 1);
//     }
//   } else {
//     console.log("the element is not present");
//   }
// }
// Bs(data, 0, data.length - 1);

// Selection sort

// let data = [3, 11, 23, 4, 6];
// function SelectionSort(x) {
//   for (let i = 0; i < data.length; i++) {
//     let minId = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (x[j] < x[minId]) {
//         minId = j;
//       }
//     }
//     let temp = x[minId];
//     x[minId] = x[i];
//     x[i] = temp;
//   }
// }
// SelectionSort(data);
// console.log(data);

// Buble Sort

// let data = [3, 6, 11, 12, 4];

// function BS(data, count) {
//   if (count == 1) {
//     return;
//   }

//   for (let i = 0; i < count - 1; i++) {
//     if (data[i] > data[i + 1]) {
//       let temp = data[i + 1];
//       data[i + 1] = data[i];
//       data[i] = temp;
//     }
//   }
//   BS(data, count - 1);
// }
// BS(data, data.length);
// console.log(data);

// Insertion Sort

// let data = [6, 11, 2, 3, 1];
// function Insertion(data) {
//   for (let i = 1; i < data.length; i++) {
//     let current = data[i];
//     let j = i - 1;
//     while (j >= 0 && data[j] > current) {
//       data[j + 1] = data[j];
//       j--;
//     }
//     data[j + 1] = current;
//   }
// }
// Insertion(data);
// console.log(data);

// Simple sorting

// let data = [11, 5, 3, 2, 1];
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j] > data[j + 1]) {
//       let temp = data[j + 1];
//       data[j + 1] = data[j];
//       data[j] = temp;
//     }
//   }
// }
// console.log(data);

// Selection sort

// let data = [11, 5, 3, 4, 1];
// for (let i = 0; i < data.length; i++) {
//   let minId = i;
//   for (let j = i + 1; j < data.length; j++) {
//     if (data[j] < data[minId]) {
//       minId = j;
//     }
//   }
//   let temp = data[minId];
//   data[minId] = data[i];
//   data[i] = temp;
// }
// console.log(data);

// Insertion Sort

// let data = [11, 3, 4, 2, 1];
// function Insertion(d) {
//   for (let i = 1; i < data.length; i++) {
//     let current = data[i];
//     let j = i - 1;
//     while (j >= 0 && d[j] > current) {
//       d[j + 1] = data[j];
//       j--;
//     }
//     d[j + 1] = current;
//   }
// }
// Insertion(data);
// console.log(data);

// insert Element in array

// let data = [2, 3, 4, 5, 6];
// let add = 123;
// let position = 2;
// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i];
//   }
//   if (i == position) {
//     data[i] = add;
//   }
// }

// console.log(data);

// Bubble Sort

// let data = [3, 6, 11, 12, 4];
// function bsa(data, count) {
//   if (count == 1) {
//     return;
//   }
//   for (let i = 0; i < count - 1; i++) {
//     if (data[i] > data[i + 1]) {
//       let temp = data[i];
//       data[i] = data[i + 1];
//       data[i + 1] = temp;
//     }
//   }
//   bsa(data, count - 1);
// }
// bsa(data, data.length);
// console.log(data);

// string Reverse

// let str = "hello";
// n = str.split("");
// function RA(n) {
//   let start = 0;
//   let end = n.length - 1;
//   while (start <= end) {
//     [n[start], n[end]] = [n[end], n[start]];
//     start++;
//     end--;
//   }
// }
// RA(n);
// console.log(n.join(""));

// Queue

// let data = [];
// let currentsize = 0;
// function enque(val) {
//   data[currentsize] = val;
//   currentsize++;
// }
// function deque() {
//   for (let i = 0; i < data.length; i++) {
//     data[i] = data[i + 1];
//   }
//   currentsize--;
//   data.length = currentsize;
// }
// function display() {
//   console.log(data);
// }
// enque(22);
// enque(23);
// enque(24);
// enque(25);
// display();
// deque();
// display();

// Stack

// let data = [];
// let currentsize = 0;
// function push(val) {
//   data[currentsize] = val;
//   currentsize++;
// }
// function pop() {
//   currentsize--;
//   data.length = currentsize;
// }
// function display() {
//   console.log(data);
// }
// push(2);
// push(4);
// push(6);
// display();
// pop();
// display();

// check strings are anagrams or not

// function anagrams(str1, str2) {
//   str1 = str1.replace("").toLowerCase();
//   str2 = str2.replace("").toLowerCase();
//   if (str1.length != str2.length) {
//     return false;
//   }
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");

//   return true;
// }
// let str1 = "cat";
// let str2 = "tac";
// let result = anagrams(str1, str2);
// if (result == true) {
//   console.log("strings are anagram");
// } else {
//   console.log("strings are not anagram");
// }

// anagram using dsa

// function anagram(str1, str2) {
//   const freq = (str) => {
//     let obj = {};
//     for (let char of str) {
//       obj[char] = (obj[char] || 0) + 1;
//     }
//     return obj;
//   };
//   let strr1 = freq(str1);
//   let strr2 = freq(str2);
//   for (let char in strr1) {
//     if (strr1[char] !== strr2[char]) {
//       return false;
//     }
//   }

//   for (let char in strr2) {
//     if (strr2[char] !== strr1[char]) {
//       return false;
//     }
//   }
//   return true;
// }
// let str1 = "cat";
// let str2 = "tac";
// if (anagram(str1, str2)) {
//   console.log("strings are anagram");
// } else {
//   console.log("strings are not anagram");
// }

// palindrome:
// function palindrome(data) {
//   let start = 0;
//   let end = data.length - 1;
//   let result = true;
//   while (start < end) {
//     if (data[start] != data[end]) {
//       result = false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// }
// let d = palindrome("level");
// if (d) {
//   console.log("string is  palindrome");
// } else {
//   console.log("string is not palindrome");
// }

// maximum occuring element in string

// const max = (data) => {
//   let maxChar = "";
//   let maxCount = 0;
//   let obj = {};
//   for (let char of data) {
//     obj[char] = (obj[char] || 0) + 1;
//     if (obj[char] > maxCount) {
//       maxChar = char;
//       maxCount = obj[char];
//     }
//   }
//   return { maxChar, maxCount };
// };
// let data = "hello";
// let result = max(data);
// console.log(result);

// Objects

// const obj = {
//   ["b"]: "umar",
//   ["a"]: 5,
// };

// for (let x in obj) {
//   console.log(obj[x]);
// }

// Map

// let m = new Map([
//   ["haji", "umar"],
//   ["class", 6],
// ]);
// m.set(true, "Boolean");
// for (let n of m) {
//   console.log( n);
// }

// Set

// let s = new Set(["umar", "khizar", "umar"]);
// console.log(s); //only unique show

// Anagram

// function anagram(str1, str2) {
//   const freq = (str) => {
//     let obj = {};
//     for (let char of str) {
//       obj[char] = (obj[char] || 0) + 1;
//     }
//     return obj;
//   };

//   let strr1 = freq(str1);
//   let strr2 = freq(str2);
//   for (let char in strr1) {
//     if (strr1[char] != strr2[char]) {
//       return false;
//     }
//   }

//   for (let char in strr2) {
//     if (strr2[char] != strr1[char]) {
//       return false;
//     }
//   }
//   return true;
// }
// let s1 = "hello";
// let s2 = "elloh";
// let result = anagram(s1, s2);
// if (result == true) {
//   console.log("the string is anagram");
// } else {
//   console.log("the string is not anagram");
// }

// Palindrome

// function palindrome(str) {
//   let start = 0;
//   let end = str.length - 1;
//   let result = true;
//   while (start < end) {
//     if (str[start] != str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// }
// let data = "level";
// let r = palindrome(data);
// if (r == true) {
//   console.log("the string is palindrome");
// } else {
//   console.log("the string is not palindrome");
// }

// Maximum occurig of character in string

// const max = (str) => {
//   let maxChar = "";
//   let maxCount = 0;
//   let obj = {};
//   for (let char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//     if (obj[char] > maxCount) {
//       maxChar = char;
//       maxCount = obj[char];
//     }
//   }
//   return { maxChar, maxCount };
// };

// let s = "hello";
// let r = max(s);
// console.log(r);
