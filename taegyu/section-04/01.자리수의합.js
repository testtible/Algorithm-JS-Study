function solution(n, arr) {
  const strArr = arr.map((item) => '' + item);
  const sumList = [];
  for (let i = 0; i < strArr.length; i++) {
    const sum = strArr[i].split('').reduce((acc, cur) => acc + +cur, 0);
    sumList.push(sum);
  }
  const max = Math.max(...sumList);
  const maxIdxList = [];
  sumList.forEach((num, idx) => {
    if (max === num) {
      maxIdxList.push(idx);
    }
  });
  let result = 0;
  maxIdxList.forEach((num) => {
    if (result < arr[num]) {
      result = arr[num];
    }
  });
  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
