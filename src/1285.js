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
  let [N, ...bitmap] = params.split("\n");
  N = Number(N);
  bitmap = bitmap.map((i) =>
    i
      .trim()
      .split("")
      .map((val) => (val === "T" ? 1 : 0))
  );
  console.log(bitmap.join("\n"));

  // console.log(bitmap.join("\n"));
  for (let row = 0; row < N; row++) {
    let count = bitmap[row].reduce((acc, cur, i) => acc + cur);
    if (count >= 2) bitmap[row] = bitmap[row].map((i) => i ^ 1);
    // for (let col = 0; col < N; col++) {
    //   if (bitmap[row][col] === 1)
    //     bitmap.forEach((e) => {
    //       e[col] = e[col] ^ 1;
    //     });
    // }
  }
  console.log(bitmap.join("\n"));
  // for (let col = 0; col < N; col++) {
  //   for (let row = 0; row < N; row++) {
  //     if (bitmap[row][col] === 1) bitmap[row] = bitmap[row].map((i) => i ^ 1);
  //   }
  // }
  // // console.log(bitmap)

  console.log(bitmap.join("\n"));
  return ans;
}

export default solution(std());
