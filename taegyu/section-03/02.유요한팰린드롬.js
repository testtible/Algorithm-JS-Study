function solution(s) {
  const str = s
    .toUpperCase()
    .split('')
    .filter((char) =>
      char.charCodeAt() >= 65 && char.charCodeAt() <= 90 ? true : false
    )
    .join('');

  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr ? 'YES' : 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
