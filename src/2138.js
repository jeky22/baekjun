function std() {
  var fs = require("fs");
  return fs.readFileSync("/dev/2138").toString().trim();
}

let dx = new Array(10);
dx[0] = [0, 1, 2, 3, 4, 6];
dx[1] = [1, 3];
dx[2] = [1, 2, 4, 5, 6];
dx[3] = [1, 3, 4, 5, 6];
dx[4] = [0, 1, 3, 5];
dx[5] = [0, 3, 4, 5, 6];
dx[6] = [0, 2, 3, 4, 5, 6];
dx[7] = [1, 3, 4];
dx[8] = [0, 1, 2, 3, 4, 5, 6];
dx[9] = [0, 1, 3, 4, 5, 6];
function solution(params) {
  let [s, n] = params.split(" ");
  s = Number(s);
  let result = new Array(2 * s + 3);
  let numArr = n.toString().split("");

  let res = "";
  let str = "";
  for (let num of numArr) {
    if (dx[num].indexOf(4) === -1) {
      str += " ".repeat(s + 2);
    } else {
      str += " " + "-".repeat(s) + " ";
    }
    str += " ";
  }
  res += str + "\n";

  str = "";
  for (let num of numArr) {
    if (dx[num].indexOf(0) === -1) {
      str += " ";
    } else {
      str += "|";
    }
    str += " ".repeat(s);
    if (dx[num].indexOf(1) === -1) {
      str += " ";
    } else {
      str += "|";
    }
    str += " ";
  }
  str += "\n";
  res += str.repeat(s);

  str = "";
  for (let num of numArr) {
    if (dx[num].indexOf(5) === -1) {
      str += " ".repeat(s + 2);
    } else {
      str += " " + "-".repeat(s) + " ";
    }
    str += " ";
  }
  res += str + "\n";

  str = "";
  for (let num of numArr) {
    if (dx[num].indexOf(2) === -1) {
      str += " ";
    } else {
      str += "|";
    }
    str += " ".repeat(s);
    if (dx[num].indexOf(3) === -1) {
      str += " ";
    } else {
      str += "|";
    }
    str += " ";
  }
  str += "\n";
  res += str.repeat(s);

  str = "";
  for (let num of numArr) {
    if (dx[num].indexOf(6) === -1) {
      str += " ".repeat(s + 2);
    } else {
      str += " " + "-".repeat(s) + " ";
    }
    str += " ";
  }
  res += str;
  return res;
}

export default solution(std());
