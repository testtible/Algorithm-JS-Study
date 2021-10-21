// N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
// ▣ 입력설명
// 첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
// 두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.
// ▣ 출력설명
// N개의 좌표를 정렬하여 출력하세요.
// ▣ 입력예제 1 5
// 27
// 13
// 12 
// 25
// 36
// ▣ 출력예제 1 
// 12
// 13
// 25
// 27 
// 36

function solution(arr) {
  const mapArr = arr.map(el => String(el[0]) + String(el[1]))
  // console.log(mapArr)
  const sort = mapArr.sort((a, b) => a - b);
  const answer = sort.map(el => [Number(el[0]), Number(el[1])]);
  return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));