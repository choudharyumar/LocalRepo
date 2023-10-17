// Stack push and pop operation

// let data = [];
// let max = 5;
// let curntSize = data.length;
// function push(val) {
//   if (curntSize >= max) {
//     alert("stack is full");
//   }
//   data[curntSize] = val;
//   curntSize += 1;
// }
// function pop() {
//   curntSize -= 1;
//   data.length = curntSize;
//   if (curntSize == 0 || curntSize < 0) {
//     alert("the stack is empty");
//   }
// }

// function display() {
//   console.log(data);
// }
// push(20);
// push(21);
// push(22);
// pop();
// push(44);
// display();

// reverse string with stack

// default

// let st = "hello";
// let n = st.split("").reverse().join("");
// console.log(n);

// Manually

// let st = "hello";
// let n = st.split("");
// function Ra(n, start, end) {
//   if (start <= end) {
//     let temp = n[start];
//     n[start] = n[end];
//     n[end] = temp;
//     Ra(n, start + 1, end - 1);
//   }
// }
// Ra(n, 0, n.length);
// let result = n.join("");
// console.log(result);

// reverse string in stack

// let data = [];
// let currentSize = data.length;
// function push(val) {
//   data[currentSize] = val;
//   currentSize += 1;
// }

// function pop() {
//   let lastRemovedItem = data[currentSize - 1];
//   currentSize -= 1;
//   data.length = currentSize;
//   return lastRemovedItem;
// }
// function ReverseS(item) {
//   for (let i = 0; i < item.length; i++) {
//     push(item[i]);
//   }

//   for (let i = 0; i < item.length; i++) {
//     item[i] = pop();
//   }
// }
// let st = "hello";
// st = st.split("");
// ReverseS(st);
// console.log(st.join(""));

// Push and pop with class

// class stack {
//   data = [];
//   currentSize;
//   constructor() {
//     this.currentSize = this.data.length;
//   }
//   push(val) {
//     this.data[this.currentSize] = val;
//     this.currentSize += 1;
//   }
//   pop() {
//     this.currentSize -= 1;
//     this.data.length = this.currentSize;
//   }
//   display() {
//     console.log(this.data);
//   }
// }
// let n = new stack();
// n.push(2);
// n.push(3);
// n.pop();
// n.push(4);
// n.push(5);
// n.display();

// Queue

// let data = [];
// let curntSize = data.length;
// function enque(val) {
//   data[curntSize] = val;
//   curntSize += 1;
// }

// function deque() {
//   for (let i = 0; i < data.length; i++) {
//     data[i] = data[i + 1];
//   }
//   curntSize -= 1;
//   data.length = curntSize;
// }
// function front() {
//   console.log(data[0]);
// }
// function rear() {
//   console.log(data[curntSize - 1]);
// }
// function display() {
//   console.log(data);
// }

// enque(2);
// enque(3);
// enque(4);
// deque();
// enque(5);
// display();
// front();
// rear();

// Circular Queue

class Queue {
  constructor(size) {
    this.max = size;
    this.data = new Array(size);
    this.currentSize = 0;
    this.front = -1;
    this.rear = -1;
  }
  enque(val) {
    if (this.currentSize != this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.data[this.rear] = val;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
  deque() {
    if (this.currentSize != 0) {
      this.data[this.front] = null;

      if (this.front == this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.front = -1;
      this.rear = -1;
      alert("the queue is empty");
    }
  }
  display() {
    console.log(this.data);
  }
}
let q = new Queue(5);
q.enque(4);
q.enque(5);
q.enque(6);
q.enque(7);
q.enque(8);
q.deque();
q.deque();
q.enque(9);
q.display();
