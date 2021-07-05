function std() {
  var fs = require("fs");
  return fs.readFileSync("/dev/stdin").toString().trim();
}

console.log(solution(std()));
