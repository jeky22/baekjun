function std() {
  var fs = require("fs");
  let num = __filename.split("/").pop().split(".js")[0];
  return fs
    .readFileSync("/dev/" + num)
    .toString()
    .trim();
}

function solution(params) {
  let ans = 0;
  let [_, ...arr] = params.split("\n");
  arr = arr.map((i) => i.split(" ").map(Number));

  arr.sort((a, b) => (a[1] - b[1] === 0 ? b[0] - a[0] : b[1] - a[1]));
  let queue = [];

  for (let last = arr[0][1]; last > 0; last--) {
    while (arr.length && arr[0][1] >= last) {
      queue.push(arr.shift()[0]);
    }
    if (queue.length) {
      let max = -1;
      let index = -1;
      for (let idx in queue) {
        if (max < queue[idx]) {
          max = queue[idx];
          index = idx;
        }
      }
      let temp = queue.splice(index, 1)[0];
      // console.log(temp,queue)
      ans += temp;
    }
  }

  return ans;
}

export default solution(std());
