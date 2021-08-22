function solution(m, arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let sum = arr[i];
    while (true) {
      if (sum < m) {
        sum += arr[j];
        j++;
      } else if (sum === m) {
        result++;
        break;
      } else {
        break;
      }
    }
  }
  return result;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
