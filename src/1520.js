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
  let [condition, ...arr] = params.trim("\n").split("\n");
  let [my, mx] = condition.trim().split(" ").map(Number);
  arr = arr.map((i) => i.trim().split(" ").map(Number));
  let dp = [];
  for (let i = 0; i < my; i++) {
    dp.push(new Array(mx).fill(-1));
  }
  // console.log(dp)

  let dy = [0, 1, 0, -1];
  let dx = [1, 0, -1, 0];

  // dp[my][mx]==dp[my-1][mx]+ dp[][]+dp[][]+dp[][]

  function sol(y, x) {
    if (y === my || x === mx || x === -1 || y === -1) {
      return 0;
    }
    if (y === my - 1 && x === mx - 1) {
      return 1;
    }

    if (dp[y][x] === -1) {
      let temp = [];
      for (let dir = 0; dir < 4; dir++) {
        let ny = y + dy[dir];
        let nx = x + dx[dir];
        if (ny < my && nx < mx && nx > -1 && ny > -1 && arr[ny][nx] < arr[y][x])
          temp.push(sol(ny, nx));
      }
      if (temp.length === 0) dp[y][x] = 0;
      else dp[y][x] = temp.reduce((acc, cur) => acc + cur);
    }
    return dp[y][x];
  }

  ans = sol(0, 0);

  return ans;
}

export default solution(std());
