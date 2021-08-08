function solution(s, t) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      cnt++;
    }
  }
  return cnt;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
