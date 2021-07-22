function std() {
  var fs = require("fs");
  let num = __filename.split("/").pop().split(".js")[0];
  return fs
    .readFileSync("/dev/" + num)
    .toString()
    .trim();
}

function solution(params) {
  let ans = [];

  // wwwhhh d0 d3
  // wwhwhh d0 d2
  // d0*d2+ d1*d1+ d2*d0
  let arr = params.trim().split("\n").map(Number);
  arr.pop();
  let max = Math.max(...arr);
  let dp = new Array(max + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  function sol(n) {
    if (dp[n] === 0) {
      dp[n] = 0;
      for (let i = 0; i < n; i++) {
        dp[n] += sol(i) * sol(n - i - 1);
      }
    }
    return dp[n];
  }
  ans = arr.map(sol).join("\n");
  return ans;
}

export default solution(std());
