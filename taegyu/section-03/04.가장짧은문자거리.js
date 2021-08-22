function solution(s, t) {
  let answer = [];
  const leng = s.length;
  let temp = leng + 1;
  for (let i = 0; i < leng; i++) {
    if (s[i] === t) {
      temp = 0;
      answer.push(0);
    } else {
      temp++;
      answer.push(temp);
    }
  }
  console.log(answer);

  temp = leng + 1;
  for (let i = leng - 1; i > -1; i--) {
    if (s[i] !== t) {
      temp++;
      if (answer[i] > temp) {
        answer[i] = temp;
      }
    } else {
      temp = 0;
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
