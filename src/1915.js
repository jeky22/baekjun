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
  let [condition, ...arr] = params.trim().split("\n");
  let [my, mx] = condition.trim().split(" ").map(Number);
  arr = arr.map((i) => i.trim().split("").map(Number));
  let dp = [];
  for (let i = 0; i < my; i++) {
    dp.push(new Array(mx).fill(-1));
  }

  let dy = [0, 1, 0, -1];
  let dx = [1, 0, -1, 0];

  function sol(y, x) {
    if (y === my || x === mx || x === -1 || y === -1) {
      return 0;
    } else if (dp[y][x] === -1) {
      let temp = [];
      if (x > 0 && y > 0 && arr[y][x] === 1) {
        // console.log('temp')
        temp.push(sol(y - 1, x - 1));
        temp.push(sol(y - 1, x));
        temp.push(sol(y, x - 1));
        dp[y][x] = Math.min(...temp) + 1;
      } else if (arr[y][x] === 1) {
        dp[y][x] = 1;
      } else {
        dp[y][x] = 0;
      }
    }
    return dp[y][x];
  }

  for (let y = 0; y < my; y++) {
    for (let x = 0; x < mx; x++) {
      let t = sol(y, x);
      ans = Math.max(ans, t);
    }
  }
  // console.log(dp.join('\n'));

  return ans;
}

export default solution(std());
