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
  let [N, time] = params.trim().split("\n");
  time = time.trim().split(" ").map(Number);
  time.sort((a, b) => b - a);
  ans = time.reduce((acc, cur, i) => {
    return acc + cur * (i + 1);
  });
  // console.log(time);
  return ans;
}

export default solution(std());
