function solution(m, arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let sum = arr[i];
    while (true) {
      if (sum < m) {
        result++;
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

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
