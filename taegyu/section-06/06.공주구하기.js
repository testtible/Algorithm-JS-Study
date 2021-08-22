function solution(n, k) {
  const princeList = Array.from(Array(n).fill(1), (val, idx) => val + idx);

  let temp = 1;

  while (princeList.length !== 1) {
    if (temp % k === 0) {
      princeList.shift();
    } else {
      princeList.push(princeList.shift());
    }
    temp++;
  }

  return princeList[0];
}

console.log(solution(8, 3));
