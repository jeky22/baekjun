function std() {
  var fs = require("fs");
  let num = __filename.split("/").pop().split(".js")[0];
  return fs
    .readFileSync("/dev/" + num)
    .toString()
    .trim();
}

// function sol(arr) {
//   let sq = new SortedQueue();
//   let ans = 0;
//   arr.forEach((element) => {
//     sq.push(element);
//   });
//   console.log(sq.queue);
//   while (sq.queue.length > 1) {
//     let temp = sq.pop() + sq.pop();
//     ans += temp;
//     console.log(sq.queue, temp);
//     sq.push(temp);
//   }
//   return ans;
// }

// class SortedQueue {
//   constructor() {
//     this.queue = [];
//   }
//   push(item) {
//     let check = true;
//     for (let i = 0; i < this.queue.length; i++) {
//       if (this.queue[i] < item) {
//         check = false;
//         this.queue.splice(i, 0, item);
//         break;
//       }
//     }
//     if (check) this.queue.push(item);
//   }
//   pop() {
//     return this.queue.pop();
//   }
// }

//300 = 4+3 3+5  01 =7 12= 6 23=8
// 01 23 00 12 ->1+2+1+2+0  01 22 0+1+0+1+2
function dynamicSolve(arr) {
  let dp = [];
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    dp.push(new Array(arr.length).fill(-1));
    dp[i][i] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum.push(new Array(arr.length).fill(0));
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum[i][j] = arr.slice(i, j + 1).reduce((acc, cur) => acc + cur);
    }
  }
  console.log(sum);
  function sol(n, m) {
    if (dp[n][m] === -1) {
      let min = Infinity;
      for (let idx = n; idx < m; idx++) {
        min = Math.min(
          min,
          sol(n, idx) + sol(idx + 1, m) + sum[n][idx] + sum[idx + 1][m]
        );
      }
      dp[n][m] = min;
    }
    return dp[n][m];
  }
  console.log(dp);
  return sol(0, arr.length - 1);
}

function solution(params) {
  let ans = [];
  let [N, ...arr] = params.trim().split("\n");
  N = Number(N);
  arr = arr.map((i) => i.trim().split(" ").map(Number));

  for (let times = 0; times < N; times++) {
    ans.push(dynamicSolve(arr[times * 2 + 1]));
  }
  return ans.join("\n");
}

export default solution(std());
