function solution(s) {
  s = s.toUpperCase();
  const leng = s.length;
  let front;
  let back;

  if (leng % 2 === 0) {
    front = s.slice(0, leng / 2);
    back = s.slice(2, leng);
  } else {
    front = s.slice(0, parseInt(leng / 2));
    back = s.slice(Math.ceil(leng / 2), leng);
  }
  return front === back.split('').reverse().join('') ? 'YES' : 'No';
}

let str = 'goooG';
console.log(solution(str));
