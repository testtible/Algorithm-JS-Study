function solution(k, arr) {
  let sum = 0;

  for (let i = 0; i < arr.length - k; i++) {
    let daySum = 0;
    for (let j = 0; j < k; j++) {
      daySum += arr[i + j];
    }
    if (sum < daySum) {
      sum = daySum;
    }
  }
  return sum;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
