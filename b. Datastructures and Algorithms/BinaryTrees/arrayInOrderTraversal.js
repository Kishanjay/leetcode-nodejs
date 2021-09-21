const { arrayTree, inOrderArrayTree } = require("./data");

function inOrderTraversal(arr) {
  const arrResult = visitNode(arr, 0);

  print(arrayEqual(inOrderArrayTree, arrResult));
}

function visitNode(arr, i){
  let res = [];
  if (i*2+1 < arr.length) {
    res = visitNode(arr, i*2+1);
  }
  res.push(arr[i]);
  if (i*2+2 < arr.length) {
    res = [...res, ...visitNode(arr, i*2+2)];
  }
  return res;
}

inOrderTraversal(arrayTree);

function print(msg) {
  console.log(msg);
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++){ 
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }

  return true;
}