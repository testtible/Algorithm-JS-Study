function solution(s) {
  const maxStr = s.reduce((acc, cur) => {
    if (acc.length >= cur.length) {
      return acc;
    } else {
      return cur;
    }
  }, '');
  return maxStr;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
