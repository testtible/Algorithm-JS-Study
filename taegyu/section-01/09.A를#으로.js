function solution(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      result += '#';
    } else {
      result += s[i];
    }
  }
  return result;
}

let str = 'BANANA';
console.log(solution(str));
