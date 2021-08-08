function solution(arr) {
  let colSum = 0;
  let rowSum = 0;
  let a = 0;
  let b = 0;
  const colSumList = [];
  const rowSumList = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      colSum += arr[i][j];
      rowSum += arr[j][i];

      if (i + j === arr.length - 1) {
        a += arr[i][j];
      }

      if (i === j) {
        b += arr[i][j];
      }
    }
    colSumList.push(colSum);
    rowSumList.push(rowSum);
    colSum = 0;
    rowSum = 0;
  }
  colSum = Math.max(...colSumList);
  rowSum = Math.max(...rowSumList);
  return Math.max(colSum, rowSum, a, b);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
