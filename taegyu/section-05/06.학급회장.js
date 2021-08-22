function solution(s) {
  const map1 = new Map();

  for (let char of s) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }

  return [...map1].sort((a, b) => b[1] - a[1])[0][0];
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
