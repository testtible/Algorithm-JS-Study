function solution(board, moves) {
  // 스텍 선언
  const stack = [];
  // 결과 뽑은 인형 수
  let cnt = 0;

  moves.forEach((select) => {
    // 위에서부터 순회
    for (let i = 0; i < board.length; i++) {
      // 0이 아니면 뽑음
      if (board[i][select - 1] !== 0) {
        // 뽑아서 통에 넣었는데 같은거 2개면 삭제 하고 카운트 2개 늘려줌
        if (board[i][select - 1] === stack[stack.length - 1]) {
          // 통안에 있는거 제거
          stack.pop();
          // 2개 증가
          cnt += 2;
        } else {
          // 다르면 그냥 통에만 넣어서 스텍 쌓아줌
          stack.push(board[i][select - 1]);
        }
        // 뽑았으니 0으로 바꿔줌
        board[i][select - 1] = 0;
        // 다음차례 뽑기
        break;
      }
    }
  });
  return cnt;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
