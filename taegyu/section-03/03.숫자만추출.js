function solution(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      result += str[i];
    }
  }
  return parseInt(result);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
