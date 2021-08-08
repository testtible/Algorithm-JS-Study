function solution(a, b, c) {
  const max = Math.max(a, b, c);

  if (max === a) {
    return b + c > max ? 'YES' : 'NO';
  } else if (max === b) {
    return a + c > max ? 'YES' : 'NO';
  } else {
    return a + b > max ? 'YES' : 'No';
  }
}

console.log(solution(13, 33, 17));
