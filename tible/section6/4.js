// 후위연산식
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
// ▣ 출력설명
// 연산한 결과를 출력합니다.
// ▣ 입력예제 1 352+*9-
// ▣ 출력예제 1 12

function cal(a, b, operator) {
  if(operator === "+") return a + b;
  else if(operator === "-") return a - b;
  else if(operator === "*") return a * b;
  else if(operator === "/") return a / b;
}

function solution(str) {
  // 뒤 연산자가 앞 두 숫자를 계산. 
  
  // 배열로 변환한 후에, isNaN으로 연산자를 찾아서, pop으로 하나씩 처리(stack)
  let arr = str.split("");
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(isNaN(Number(arr[i]))) { // isNaN(NaN)은 true
      let operator = arr[i];
      let num1 = result.pop();
      let num2 = result.pop();
      let sum = cal(Number(num2), Number(num1), operator);
      // console.log(sum)
      result.push(sum);
    }else {
      result.push(arr[i]);
    }
  }
  return result[0];
}

let str="352+*9-";
console.log(solution(str));