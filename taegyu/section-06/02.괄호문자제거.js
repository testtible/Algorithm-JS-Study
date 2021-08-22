function solution(s) {
  // 스텍 선언
  const stack = [];

  // 문자열 순회
  for (let char of s) {
    if (char === ")") {
      // 괄호 안에 있는 모든 문자 제거
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      // "(" 제거
      stack.pop();
    } else {
      // 나머지 문자열 추가
      stack.push(char);
    }
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
