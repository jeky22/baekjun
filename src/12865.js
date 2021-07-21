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
  let [nn, K] = N.trim().split(" ").map(Number);
  arr = arr.map((i) => i.trim().split(" ").map(Number));

  let dp = [];
  let weight = [];
  let value = [];
  //가치
  for (let i = 0; i < arr.length; i++) {
    dp.push(new Array(K + 1).fill(-1));
    weight.push(arr[i][0]);
    value.push(arr[i][1]);
  }

  // dp[n][w]= w>w[n] ? max(dp[n-1][k-w[n-1]+v[n],dp[n-1][k]) : dp[n-1][k]
  //top down
  function sol(n, w) {
    if (n < 0 || w < 0) {
      return 0;
    } else if (dp[n][w] === -1) {
      if (w >= weight[n])
        dp[n][w] = Math.max(
          sol(n - 1, w - weight[n]) + value[n],
          sol(n - 1, w)
        );
      else dp[n][w] = sol(n - 1, w);
    }
    // console.log(n,w,dp[n][w])
    return dp[n][w];
  }
  // console.log(nn, K);
  // for(let i of arr){
  //   dp[i][]=
  // }

  return sol(nn - 1, K);
}

export default solution(std());
