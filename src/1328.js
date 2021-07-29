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
  let [N, L, R] = params.trim().split(" ").map(Number);

  let dp = [];

  for (let a = 0; a < L + 1; a++) {
    let temp = [];
    for (let b = 0; b < R + 1; b++) {
      temp.push(new Array(N + 1).fill(0));
    }
    dp.push(temp);
  }
  dp[1][1][1] = 1;
  function sol(l, r, n) {
    if (l > 0 && r > 0 && n > 0) {
      if (dp[l][r][n] === 0)
        dp[l][r][n] =
          (sol(l - 1, r, n - 1) +
            sol(l, r - 1, n - 1) +
            sol(l, r, n - 1) * (n - 2)) %
          1000000007;
      return dp[l][r][n];
    } else return 0;
  }
  // sol(3, 2, 5);
  return sol(L, R, N);
}

export default solution(std());
