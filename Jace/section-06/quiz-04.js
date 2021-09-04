/*
후위식 연산(postfix)

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1 
352+*9-
▣ 출력예제 1
12
*/

const Stack = require('../data-structure/3. stack')

const printPostfixResult = (str) => {
	const numberStack = new Stack()

	for (const letter of str) {
		if (!isNaN(letter)) {
			numberStack.push(Number(letter))
		} else {
			const firstNode = numberStack.pop()
			const secondNode = numberStack.pop()

			const result = calculate(secondNode.element, firstNode.element, letter)

			numberStack.push(result)
		}
	}

	const result = numberStack.pop()

	return result.element
}

const calculate = (first, second, sign) => {
	let result

	switch (sign) {
		case '+':
			result = first + second
			break
		case '-':
			result = first - second
			break
		case '*':
			result = first * second
			break
		case '/':
			result = first / second
			break
	}

	return result
}

console.log(printPostfixResult('352+*9-'))
