const { arrayTree, structTree } = require("./data");


function start(arr) {
  let result = [];
  
  let rowCount = 1;

  let row = [];

  for (let i = 0; i < arr.length; i++) {
    row.push(arr[i]);
    if (row.length === rowCount){
      result.push(row);
      row = [];
      rowCount *= 2;
    }
  }

  console.log(result);
}

function start2(node) {
  let result = [];
  let stack = [node]

  while (stack.length) {
    let newStack = [];
    let row = [];
    for (node of stack) {
      row.push(node.value);
      if (node.left) { 
        newStack.push(node.left);
      }
      if (node.right) { 
        newStack.push(node.right);
      }
    }

    result.push(row);
    stack = newStack;
  }

  console.log(result);
}

// start(arrayTree)
// start2(structTree);