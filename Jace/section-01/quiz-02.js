/*
삼각형 판별하기

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.

▣ 입력예제 1 
6 7 11
▣ 출력예제 1
YES

▣ 입력예제 2
13 33 17
▣ 출력예제 2
NO
*/

const isTriangle = (...numbers) => {
	const sum = numbers.reduce((pre, value) => (pre += value))
	const maxNum = Math.max(...numbers)

	return sum - maxNum > maxNum ? 'YES' : 'NO'
}

console.log(isTriangle(6, 7, 11))
console.log(isTriangle(13, 33, 17))