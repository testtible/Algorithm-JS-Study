function solution(s) {
  const result = [];
  s.split('').forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result.join('');
}
console.log(solution('ksekkset'));
