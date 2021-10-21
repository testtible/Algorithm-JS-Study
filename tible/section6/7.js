// 출력 : 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력합니다.
function solution(a, b) {
  // 순서대로 되어야 하니 앞부터 검열
  // queue 문제, 먼저인 것이 먼저 나와야함.

  // b를 배열로 변형해서 index
  // 그 index를 비교. 
  let arr = b.split("").filter(el => a.includes(el)).join("");
  return a === arr ? "YES" : "NO";
  
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));