function solution(m, product) {
  product.sort((a, b) => {
    const aSum = a[0] + a[1];
    const bSum = b[0] + b[1];
    return aSum - bSum;
  });
  console.log(product);

  let result = 0;

  for (let i = 0; i < product.length; i++) {
    const presnetSum = product[i][0] + product[i][1];
    if (m - presnetSum >= 0) {
      m -= presnetSum;
      result++;
    } else {
      const restSumList = product
        .slice(i, product.length)
        .map((list) => list[0] / 2 + list[1]);
      const minSum = Math.min(...restSumList);
      if (m - minSum >= 0) {
        result++;
      }
      break;
    }
  }
  return result;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
