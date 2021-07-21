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
  let [N, ...arr] = params.trim().split("\n");
  arr = arr.map(Number);
  let max = Math.max(...arr);
  let dp = new Array(max + 1).fill(0);

  dp[0] = 1;
  dp[2] = 1;
  dp[4] = 2;
  function sol(n) {
    if (n % 2 === 1) return 0;
    else if (dp[n] === 0) {
      let m = n - 2;
      let res = 0;
      for (let i = 0; i <= m; i += 2) {
        res += sol(i) * sol(m - i);
      }
      dp[n] = res % 1000000007;
    }
    return dp[n];
  }

  return arr.map(sol).join("\n");
}

export default solution(std());
