function std() {
  var fs = require("fs");
  let num = __filename.split("/").pop().split(".js")[0];
  return fs
    .readFileSync("/dev/" + num)
    .toString()
    .trim();
}

function binarySearch(array, targetValue) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < targetValue && array[mid + 1] >= targetValue) {
      return mid + 1;
    } else if (array[mid] >= targetValue) {
      right = mid - 1;
    } else if (array[mid] < targetValue) {
      left = mid + 1;
    }
  }
  return -1;
}

function solution(params) {
  // let ans = 0;
  let [N, arr] = params.trim().split("\n");
  arr = arr.split(" ").map(Number);
  let bst = [0];
  for (let item of arr) {
    // console.log(bst);
    if (bst[bst.length - 1] < item) {
      bst.push(item);
    } else if (bst[bst.length - 1] > item) {
      let idx = binarySearch(bst, item);
      bst.splice(idx, 1, item);
    }
  }
  // console.log(bst);
  return bst.length - 1;
}

export default solution(std());
