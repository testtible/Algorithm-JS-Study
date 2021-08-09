function solution(s) {
  let result = '';
  let cnt = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (cnt <= 1) {
        result += s[i];
      } else {
        result += s[i];
        result += cnt;
      }
      cnt = 1;
    } else {
      cnt++;
    }
  }
  console.log(result);
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
