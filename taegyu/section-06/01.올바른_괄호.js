function solution(s) {
  const stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
