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
  let [N, ...arr] = params.trim("\n").split("\n");
  N = Number(N);
  arr = arr.map((i) => i.trim().split(" ").map(Number));
  let dp = [];
  for (let i = 0; i < N; i++) {
    dp.push(new Array(N).fill(-1));
  }

  let dy = [0, 1, 0, -1];
  let dx = [1, 0, -1, 0];

  function sol(y, x) {
    if (y === N || x === N || x === -1 || y === -1) {
      return 0;
    }
    if (dp[y][x] === -1) {
      let temp = [];
      for (let dir = 0; dir < 4; dir++) {
        let ny = y + dy[dir];
        let nx = x + dx[dir];
        if (
          ny !== N &&
          nx !== N &&
          nx !== -1 &&
          ny !== -1 &&
          arr[ny][nx] > arr[y][x]
        )
          temp.push(sol(ny, nx));
      }
      if (temp.length === 0) dp[y][x] = 1;
      else dp[y][x] = Math.max(...temp) + 1;
    }
    return dp[y][x];
  }

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      let t = sol(y, x);
      ans = Math.max(ans, t);
    }
  }
  // console.log(dp.join('\n'))

  return ans;
}

export default solution(std());
