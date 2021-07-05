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
  let [param, ...coins] = params.split("\n");
  let [_, money] = param.split(" ").map(Number);
  coins = coins.map(Number);
  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] <= money) {
      let quo = Math.floor(money / coins[i]);
      ans += quo;
      money -= quo * coins[i];
    }
    if (money === 0) {
      return ans;
    }
  }
  return ans;
}

export default solution(std());
