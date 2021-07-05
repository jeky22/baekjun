function std() {
  var fs = require("fs");
  return fs.readFileSync("/dev/1931").toString().trim();
}

function solution(params) {
  let [a, ...b] = params.split("\n");
  b = b.map((i) => i.split(" ").map(Number));

  b.sort((a, b) => (a[1] - b[1] === 0 ? a[0] - b[0] : a[1] - b[1]));
  let right = 0;
  let ans = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i][0] >= right) {
      // console.log("?", b[i]);
      right = b[i][1];
      ans++;
    }
  }
  // console.log(b.join("\n"));
  return ans;
}
export default solution(std());
