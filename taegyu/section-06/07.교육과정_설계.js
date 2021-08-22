function solution(need, plan) {
  let str = "";

  for (let char of plan) {
    if (need.includes(char)) {
      str += char;
    }
  }
  return need === str ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
