function solution(arr) {
  const scoreList = [0];

  arr.forEach((isCol, idx) => {
    if (isCol === 1) {
      if (scoreList[idx]) {
        scoreList.push(scoreList[idx] + 1);
      } else {
        scoreList.push(1);
      }
    } else {
      scoreList.push(0);
    }
  });

  return scoreList.reduce((acc, cur) => acc + cur, 0);
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
