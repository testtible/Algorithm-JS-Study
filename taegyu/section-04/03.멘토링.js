function solution(test) {
  const studentCnt = test[0].length;
  let result = 0;

  for (let i = 0; i < test[0].length; i++) {
    let menteeCnt = studentCnt;
    const mento = test[0][i];
    for (let j = 0; j < test.length; j++) {
      const ranking = studentCnt - test[j].indexOf(mento) - 1;
      if (menteeCnt > ranking) {
        menteeCnt = ranking;
      }
    }
    result += menteeCnt;
  }
  return result;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
