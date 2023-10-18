// Creating a link list
// class list {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };
//     this.tail = this.head;
//     this.size = 1;
//   }
//   AddNode(newData) {
//     let newNode = {
//       value: newData,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size++;
//   }
// }
// let n = new list(200);
// n.AddNode(300);
// n.AddNode(400);
// console.log(n);

// class list {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };
//     this.tail = this.head;
//     this.size = 1;
//   }

//   AddNode(addData) {
//     let newNode = {
//       value: addData,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size += 1;
//   }
//   traversing() {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter < this.size) {
//       // console.log(currentNode);
//       currentNode = currentNode.next;
//       counter++;
//     }
//   }

//   delete(index) {
//     let counter = 1;
//     let leadNode = this.head;
//     if (index == 1) {
//       this.head = this.head.next;
//     } else {
//       while (counter < index - 1) {
//         leadNode = leadNode.next;
//         counter++;
//       }
//       let nextNode = leadNode.next.next;
//       leadNode.next = nextNode;
//       // console.log(leadNode);
//     }
//   }
//   insert(index, value) {
//     let counter = 1;
//     let currentNode = this.head;
//     while (counter < index) {
//       counter++;
//       currentNode = currentNode.next;
//     }
//     let newNode = currentNode.next;
//     console.log(newNode);
//     currentNode.next = {
//       value: value,
//       next: newNode,
//     };
//   }

//   Search(data) {
//     // let result=true
//     let currentNode = this.head;
//     while (currentNode) {
//       if (currentNode.value === data) {
//         return currentNode;
//       }
//       currentNode = currentNode.next;
//     }
//     return null;
//   }
// }
// let n = new list(200);
// n.AddNode(300);
// n.AddNode(400);
// n.AddNode(500);
// n.AddNode(600);
// n.AddNode(700);
// n.traversing();
// // n.delete(4);
// n.insert(4, 4900);
// let result = n.Search(300);
// if (result) {
//   console.log("the element is present  ");
// } else {
//   console.log("the element is not present");
// }
// console.log(n);

class link {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  AddNode(newData) {
    let newNode = {
      value: newData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  traversing() {
    let counter = 1;
    let currentNode = this.head;
    while (counter < this.size) {
      // console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  Delete(index) {
    let counter = 1;
    let lead = this.head;
    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let newNode = lead.next.next;
      lead.next = newNode;
    }
  }
  insert(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      counter++;
      currentNode = currentNode.next;
    }
    let newNode = currentNode.next;
    // console.log(newNode);
    currentNode.next = {
      value: value,
      next: newNode,
    };
  }

  Search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}
let n = new link(200);
n.AddNode(300);
n.AddNode(400);
n.AddNode(500);
n.AddNode(600);
// n.traversing();
// n.Delete(3);
n.insert(3, 4500);
let result = n.Search(4500);
if (result) {
  console.log("the element is present");
} else {
  console.log("the element is not present");
}
console.log(n);
