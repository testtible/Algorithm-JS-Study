function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      cnt++;
    }
  }
  return cnt;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
