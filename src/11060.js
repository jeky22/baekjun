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
  let [N, arr] = params.trim().split("\n");
  N = Number(N) - 1;
  arr = arr.split(" ").map(Number);
  // console.log(arr);
  let dp = new Array(N + 1).fill(0);
  dp[0] = 0;
  function sol(n) {
    if (n === 0) return 0;
    else if (dp[n] === 0) {
      // n 까지 도달가능한 arr
      let temp = -1;
      for (let i = 0; i < n; i++) {
        if (arr[i] + i >= n) {
          temp = i;
          break;
        }
      }
      if (temp === -1) dp[n] = -1;
      else {
        let t = sol(temp);
        if (t === -1) dp[n] = -1;
        else dp[n] = t + 1;
      }
    }
    return dp[n];
  }
  let res = sol(N);
  // console.log(dp);
  return res;
}

export default solution(std());
