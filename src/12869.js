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
  arr = arr.split(" ").map(Number);
  while (arr.length < 3) {
    arr.push(0);
  }
  let dp = new Array(arr[0]);
  for (let a = 0; a <= arr[0]; a++) {
    dp[a] = [];
    // console.log('?',arr[1])
    for (let b = 0; b <= arr[1]; b++) {
      // console.log('w')
      dp[a].push(new Array(arr[2] + 1).fill(-1));
    }
  }
  // console.log(dp);

  function sol(a, b, c) {
    if (a < 0) a = 0;
    if (b < 0) b = 0;
    if (c < 0) c = 0;
    if (a === 0 && b === 0 && c === 0) return 0;
    if (dp[a][b][c] === -1) {
      dp[a][b][c] = 10000;
      dp[a][b][c] =
        Math.min(
          sol(a - 9, b - 3, c - 1),
          sol(a - 9, b - 1, c - 3),
          sol(a - 3, b - 9, c - 1),
          sol(a - 3, b - 1, c - 9),
          sol(a - 1, b - 9, c - 3),
          sol(a - 1, b - 3, c - 9)
        ) + 1;
    }
    return dp[a][b][c];
  }
  return sol(arr[0], arr[1], arr[2]);
}

export default solution(std());
