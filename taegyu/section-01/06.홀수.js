function solution(arr) {
  const result = arr.filter((item) => item % 2);
  const min = Math.min(...result);

  let str = '';
  str += result.reduce((acc, cur) => acc + cur, 0);
  str += '\n';
  str += min;

  return str;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
