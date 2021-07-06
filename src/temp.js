///제출용

function std() {
  var fs = require("fs");
  return fs.readFileSync("/dev/stdin").toString().trim();
}

console.log(solution(std()));

/////// 템플릿

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

  return ans;
}

export default solution(std());
