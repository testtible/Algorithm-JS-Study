function solution(input) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push("(");
    } else {
      // 레이저
      if (input[i - 1] === "(") {
        // 레이저는 세지않는다.
        stack.pop();
        result += stack.length;
      } else {
        stack.pop();
        result += 1;
      }
    }
  }
  return result;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
