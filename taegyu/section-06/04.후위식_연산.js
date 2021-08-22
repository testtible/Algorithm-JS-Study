function solution(s) {
  const stack = [];

  const operationObj = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };

  for (let char of s) {
    if (operationObj[char]) {
      const a = stack.pop();
      const b = stack.pop();
      if (char === "+") {
        stack.push(b + a);
      }
      if (char === "-") {
        stack.push(b - a);
      }
      if (char === "*") {
        stack.push(b * a);
      }
      if (char === "/") {
        stack.push(b / a);
      }
    } else {
      stack.push(+char);
    }
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
