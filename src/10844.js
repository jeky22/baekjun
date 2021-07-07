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
  let Mod = 1000000000;
  let N = Number(params.trim());
  // 12 21 23 32 34 43 45 54 56 65 67 76 78 87 98
  // 89 10
  // 898 890x 101
  // 89 98 109 101 121 123 210 212
  let dp = new Array(N + 1).fill(-1);
  for (let idx in dp) {
    dp[idx] = new Array(10).fill(-1);
  }
  function sol(n, i) {
    // console.log(n,i)
    if (n === 0) return 0;
    if (n === 1) {
      return i === 0 ? 0 : 1;
    }
    if (dp[n][i] === -1) {
      if (i === 0) dp[n][i] = sol(n - 1, 1) % Mod;
      else if (i === 9) dp[n][i] = sol(n - 1, 8) % Mod;
      else dp[n][i] = (sol(n - 1, i - 1) + sol(n - 1, i + 1)) % Mod;
    }
    return dp[n][i];
  }
  for (let i = 0; i <= 9; i++) {
    ans = (ans + sol(N, i)) % Mod;
  }
  // console.log(dp)
  return ans;
}

export default solution(std());
