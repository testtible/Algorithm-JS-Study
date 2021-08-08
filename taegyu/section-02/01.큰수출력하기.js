function solution(arr) {
  return arr.filter((num, idx) => {
    if (idx === 0) return num;
    else {
      if (arr[idx - 1] < num) {
        return num;
      }
    }
  });
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
