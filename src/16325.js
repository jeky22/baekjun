function std() {
  var fs = require("fs");
  return fs.readFileSync("/dev/16325").toString().trim();
}

class Block {
  constructor(tree, food) {
    this.tree = tree;
    this.food = food;
  }

  add_seed(num) {
    while (num > 0) {
      // console.log("!!", this.tree);
      this.tree.push(1);
      num--;
    }
  }
  add_food(food) {
    this.food += food;
  }
  add_age() {
    if (this.tree.length < 1) return 0;
    var newFood = 0;
    for (var i = this.tree.length - 1; i >= 0; i--) {
      if (this.food >= this.tree[i]) {
        this.food -= this.tree[i];
        this.tree[i]++;
      } else {
        newFood += Math.floor(this.tree[i] / 2);
        this.tree[i] = 0;
        break;
      }
    }
    this.add_food(newFood);
    // console.log("?", this.tree);
    this.tree = this.tree.filter((i) => i > 0);
  }
  get_age() {
    return this.tree.filter((i) => i % 5 === 0).length;
  }
}

let dx = [1, 1, 0, -1, -1, -1, 0, 1];
let dy = [0, -1, -1, -1, 0, 1, 1, 1];
let N = 0;
class Ground {
  constructor(params) {
    let field = [];
    for (let i = 0; i < N; i++) {
      let temp = [];
      for (let j = 0; j < N; j++) {
        temp.push(new Block([], 5));
      }
      field.push(temp);
    }
    for (let [y, x, z] of params) {
      field[y - 1][x - 1].tree = [z];
    }

    this.field = field;
  }
  ss() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        this.field[i][j].add_age();
      }
    }
  }
  a() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let times = this.field[i][j].get_age();
        if (times > 0) {
          // console.log('wh');
          for (let dir = 0; dir < 8; dir++) {
            if (
              i + dy[dir] >= 0 &&
              i + dy[dir] < N &&
              j + dx[dir] >= 0 &&
              j + dx[dir] < N
            ) {
              // console.log('?',i + dy[dir], j + dx[dir]);
              this.field[i + dy[dir]][j + dx[dir]].add_seed(times);
            }
          }
        }
      }
    }
  }
  w(arr) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        this.field[i][j].add_food(arr[i][j]);
      }
    }
  }
  get_sum() {
    let sum = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        sum += this.field[i][j].tree.length;
      }
    }
    return sum;
  }
}
function solution(params) {
  params = params.split("\n");
  N = Number(params[0].split(" ")[0]);
  let [M, K] = params[0].trim().split(" ").slice(1).map(Number);
  // console.log(params);
  let arr = params.slice(1, 1 + N).map((i) => i.trim().split(" ").map(Number));
  let seed = params.slice(1 + N).map((i) => i.trim().split(" ").map(Number));
  // console.log(M, K);
  let ground = new Ground(seed);

  for (let year = 0; year < K; year++) {
    ground.ss();
    ground.a();
    ground.w(arr);
  }
  // console.log(ground);

  return ground.get_sum();
}
export default solution(std());
