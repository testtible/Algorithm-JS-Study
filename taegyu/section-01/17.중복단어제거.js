function solution(s) {
  const result = [];
  str.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
