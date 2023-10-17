// Q1:

// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);

// Q2:

// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);

// Q3:

// let a = [10];
// let b = [10];
// console.log(a == b);
// console.log(a === b);
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// Q4:

// let z = [1, 2, 3, 4, 5];
// a = { name: "anil" };
// console.log(...z);

// Q5:

// console.log(typeof NaN);

// Q6:

// let data = 10 - -10;
// console.log(data);

// Q7:

// let set = new Set([1, 1, 2, 2, 3, 4, 5, 6]);
// console.log(set);

// Q8:

// let data = { name: "umar" };
// console.log(delete data.name);

// Q8:

// let data = { name: "umar" };
// console.log(delete data);

// Q9:

// const data = ["ali", "hamza", "khizar"];
// const [y, z] = data;
// console.log([y, z]);

// Q10:

// const data = ["ali", "hamza", "khizar"];
// const [, , y] = data;
// console.log([y]);

// Q11:

// const obj = { name: "umar", age: 23 };
// const { age } = obj;
// console.log(age);

// Q12:

// let obj1 = { name: "umar", age: 23 };
// let obj2 = { class: 6 };
// obj1 = { ...obj1, ...obj2 };
// console.log(obj1);

// Q13:

// let obj1 = { name: "umar", age: 23 };
// let obj2 = { class: 6 };
// obj1 = { obj1, ...obj2 };
// console.log(obj1);

// Q14:

// let obj1 = { name: "umar", age: 23 };
// let obj2 = { class: 6 , age: 24 };
// obj1 = { ...obj1, ...obj2 };
// console.log(obj1);

// Q15:

// let result = false || {} || null;
// console.log(result);

// Q20:

// console.log(Promise.resolve(5));

// Q22:

// let name = "umar";

// function getdata() {
//   console.log(name);
//   let name = "khizar";
// }
// getdata();

// Q23:

// let name = "umar";

// function getdata() {
//   console.log(name);
// }
// getdata();

// Q24:

// console.log(`${((x) => x)("i love")}to programing`);

// Q25:

// function abc(a, b, c) {
//   return a + b + c;
// }

// console.log(abc(...[1, 2, 3]));

// Q26:

// let name = "ali";
// console.log(!typeof name === Object);
// console.log(!typeof name === String);
// console.log(!typeof name === false);

// Q27:

// let name = "ali";
// let age = 24;
// console.log(isNaN(name));
// console.log(isNaN(age));

// Q28:

// let person = { name: "ali" };
// Object.seal(person);
// person.age = 23;
// person.name = "khizar";
// console.log(person);

// Q33:

// let a = "true";
// // agr hm ny is ki type ko change karna hai to kya kary gy
// console.log(typeof !a);
// console.log(typeof !!a);

// Q33:

// let a = 2;
// setTimeout(() => {
//   console.log(a);
// }, 0);
// a = 200;

// Q43:

// let a = 1;
// let b = 2;
// console.log(--b === a);

// Q51:

// function fruit() {
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 345;
// }
// fruit();

// let price = 345;
// function fruit() {
//   console.log(price);
// }
// fruit();

// Q52:

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// Q52:

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }

// Q54:

// console.log(+true);
// console.log(typeof +true);

// Q55:

// console.log(!"ali");

// Q56:

// let data = "size";
// let obj = {
//   size: "small",
// };

// console.log(obj[data]);
// console.log(obj["size"]);
// console.log(obj.size);
// console.log(obj.data);

// Q57:

// let a = { name: "umar" };
// let b = a;
// a.name = "ali";
// console.log(b.name);

// Q58:

// var x;
// var x = 10;
// console.log(x);

// Q60:

// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);

// Q63:

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

// Q64:

// let a=0
// console.log(a++)
// console.log(++a)
// console.log(a)

// Q65:

// function abc(...age){
//     console.log(typeof age)
// }
// abc(21)

// Q66:

// function abc() {
//   //   "use strict";
//   age = 23;
//   console.log(age);
// }
// abc();

// Q67:

// let sum = eval("10*10+5");
// console.log(sum);

// Q69:

// let obj = { 1: "a", 2: "b" };
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// Q70:

// let obj = { a: "ali", b: "khizar", a: "hamza" };
// console.log(obj);

// Q74:

let person = { name: "umar" };
function ab(age) {
  return `${this.name} is ${age}`;
}
console.log(ab.call(person, 21));
console.log(ab.bind(person, 21));
