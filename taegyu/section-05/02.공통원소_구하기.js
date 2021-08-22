function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  function binarySearch(n, arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === n) {
        return true;
      } else if (arr[mid] < n) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }

  const result = [];

  for (let i of arr1) {
    if (binarySearch(i, arr2)) {
      result.push(i);
    }
  }
  return result;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
