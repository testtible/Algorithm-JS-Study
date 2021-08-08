function solution(arr) {
  const rankList = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        rankList[j] += 1;
      }
    }
  }
  return rankList;
}

let arr = [87, 87, 87, 100, 76];
console.log(solution(arr));
arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
