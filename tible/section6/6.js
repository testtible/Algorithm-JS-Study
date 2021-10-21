// 공주구하기
function solution(man, out) {
  let queue = [];
  for(let i = 1; i <= man; i++) {
    queue.push(i);
  } // 배열에 넣기
  let whileCnt = man - 1;

  // queue 문제
  while(queue.length > 1) {
    for(let i = 0; i < 2; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
}

// shift로 뺀건 다른 저장소에 넣어주고, out번째는 진짜 shift 이걸 반복
console.log(solution(8, 3));