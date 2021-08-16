function solution(num) {
  const reverseArr = [];
  arr
    .map((num) => '' + num)
    .forEach((item) => {
      const reverseNum = item.split('').reverse().join('');
      reverseArr.push(+reverseNum);
    });

  const max = Math.max(...reverseArr);
  const primeArr = prime(max);
  const result = reverseArr.filter((num) => primeArr[num]);
  return result;
}

const prime = (n) => {
  const primeList = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (primeList[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeList[j] = false;
      }
    }
  }
  return primeList;
};

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
