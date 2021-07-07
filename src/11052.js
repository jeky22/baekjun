function std() {
  var fs = require("fs");
  let num = __filename.split("/").pop().split(".js")[0];
  return fs
    .readFileSync("/dev/" + num)
    .toString()
    .trim();
}

// greedy ->실패
// function solution(params) {
//   let ans = 0;
//   let [N, costs] = params.trim().split("\n");
//   N = Number(N);
//   costs = costs.split(" ").map(Number);

//   let arr = costs.map((val, index) => {
//     return { value: val / (index + 1), cost:val,count: index + 1 };
//   });
//   arr.sort((a, b) =>b.value - a.value);
//   for (let item of arr) {
//     if (N >= item.count) {
//       let possible = Math.floor(N / item.count);
//       N -= possible * item.count;
//       ans += item.cost*possible;
//     }
//     if (N === 0) break;
//   }
//   return ans;
// }

function solution(params) {
  let ans = 0;
  let [N, costs] = params.trim().split("\n");
  N = Number(N);
  costs = costs.split(" ").map(Number);

  let arr = costs.map((val, index) => {
    return { value: val / (index + 1), cost: val, count: index + 1 };
  });
  let dp = new Array(N + 1).fill(-1);
  dp[0] = 0;
  dp[1] = costs[0];
  function sol(n) {
    if (dp[n] === -1) {
      // console.log(n)
      let max = 0;
      let count = 0;
      for (let i = 0; i < costs.length && i < n; i++) {
        let temp = costs[i] + sol(n - i - 1);
        if (max < temp) {
          max = temp;
          count = i;
        }
      }
      dp[n] = costs[count] + sol(n - count - 1);
    }
    return dp[n];
  }
  return sol(N);
}

export default solution(std());
