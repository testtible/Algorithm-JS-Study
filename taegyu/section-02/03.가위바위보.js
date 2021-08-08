function solution(n, a, b) {
  let result = '';

  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) {
      result += 'D\n';
    } else if (a[i] === 1 && b[i] === 3) {
      result += 'A\n';
    } else if (a[i] === 2 && b[i] === 1) {
      result += 'A\n';
    } else if (a[i] === 3 && b[i] === 2) {
      result += 'A\n';
    } else {
      result += 'B\n';
    }
  }

  return result.trim();
}

let n = 5;
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(n, a, b));
