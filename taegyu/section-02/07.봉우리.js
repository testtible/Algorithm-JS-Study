function solution(arr) {
  const leng = arr.length;
  let cnt = 0;
  const mountain = Array.from(Array(leng + 2), () => Array(leng + 2).fill(0));

  const summitList = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    for (let j = 1; j < mountain.length - 1; j++) {
      mountain[i][j] = arr[i - 1][j - 1];
    }
  }

  for (let i = 1; i < mountain.length - 1; i++) {
    for (let j = 1; j < mountain.length - 1; j++) {
      let isSummit = true;
      const summit = mountain[i][j];
      if (mountain[i - 1][j] >= summit) {
        isSummit = false;
      }
      if (mountain[i + 1][j] >= summit) {
        isSummit = false;
      }
      if (mountain[i][j - 1] >= summit) {
        isSummit = false;
      }
      if (mountain[i][j + 1] >= summit) {
        isSummit = false;
      }
      if (isSummit) {
        cnt++;
        summitList.push(summit);
      }
    }
  }
  console.log(summitList);
  return cnt;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
