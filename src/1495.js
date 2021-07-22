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
  let [NSM, v] = params.trim().split("\n");
  let [N, S, M] = NSM.trim().split(" ").map(Number);
  v = v.trim().split(" ").map(Number);
  v.unshift(0);

  let dp = [];
  for (let i = 0; i < N + 1; i++) {
    dp.push(new Array(M + 1).fill(-1));
  }
  function sol(n, m) {
    if (n === 0) {
      return m >= S ? S : -1;
    } else if (m > M || m < 0) {
      return -1;
    } else if (dp[n][m] === -1) {
      let a = sol(n - 1, m - v[n]);
      let b = sol(n - 1, m + v[n]);
      if (a + v[n] <= m && a >= 0) a += v[n];
      else a = -1;
      if (b - v[n] >= 0 && b <= M) b -= v[n];
      else b = -1;
      if (a < 0 && b < 0) {
        return -1;
      }

      dp[n][m] = Math.max(a, b);
      if (dp[n][m] > m) return -1;
    }
    return dp[n][m];
  }
  let t = sol(N, M);
  // console.log(dp);
  return t;
}

export default solution(std());

//9 1 2 8 dp0=9 dp1= 10 dp2=8  dp2
// 9  10  dp0=9 dp1 =8 dp2=10
