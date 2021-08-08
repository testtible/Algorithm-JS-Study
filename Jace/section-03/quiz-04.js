/*
가장 짧은 문자거리

한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요. 

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1 
teachermode e
▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0
*/

const printDistance = (word, letter) => {
	const result = []
	const letterIndexes = []
	let i = 0

	while (true) {
		if (i >= word.length) {
			break
		}

		const position = word.indexOf(letter, i)

		letterIndexes.push(position)

		i = position + 1
	}

	for (let i = 0; i < word.length; ++i) {
		let shortDistance = 101

		for (let j = 0; j < letterIndexes.length; ++j) {
			const distance = Math.abs(i - letterIndexes[j])

			if (distance <= shortDistance) {
				shortDistance = distance
			}
		}

		result.push(shortDistance)
	}

	return result
}

console.log(printDistance('teachermode', 'e'))
