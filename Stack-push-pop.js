// push the element

let data = [];
let max = 5;
let currentsize = data.length;
function push() {
  let r = document.getElementById("newel").value;
  data[currentsize] = r;
  currentsize += 1;
  document.getElementById("newel").value = "";
}
function pop() {
  if (currentsize > 0) {
    currentsize -= 1;
    data.length = currentsize;
  } else {
    alert("the stack is empty");
  }
}

function display() {
  console.log(data);
}
// push(20);
// push(21);
// push(44);
// push(23);
// pop();
// display();
