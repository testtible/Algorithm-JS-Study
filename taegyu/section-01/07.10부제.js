function solution(day, arr) {
  let cnt = 0;
  arr.forEach((num) => {
    if (num % 10 === day) {
      cnt++;
    }
  });
  return cnt;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
