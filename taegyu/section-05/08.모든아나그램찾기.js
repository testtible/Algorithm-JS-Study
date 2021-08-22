function solution(s, t) {
  let cnt = 0;
  for (let i = 0; i <= s.length - t.length; i++) {
    if (getAna(s.slice(i, i + t.length), t)) {
      cnt++;
    }
  }
  return cnt;
}

function getAna(str1, str2) {
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
