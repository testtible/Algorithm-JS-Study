/*
격자판 최대합

5*5 격자판에 아래와 같이 숫자가 적혀있습니다.

10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다. 

▣ 출력설명
최대합을 출력합니다.

▣ 입력예제 1 
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
▣ 출력예제 1
155
*/

const printBiggestNumber = (n, board) => {
	const numbers = []
	// 가로 합, 세로 합
	for (let row = 0; row < n; ++row) {
		let rowSum = 0
		let colSum = 0

		for (let col = 0; col < n; ++col) {
			rowSum += board[row][col]
			colSum += board[col][row]
		}

		numbers.push(rowSum)
		numbers.push(colSum)
	}

	// 왼쪽 대각선 합, 오른쪽 대각선 합
	let leftDiagSum = 0
	let rightDiagSum = 0

	for (let i = 0; i < n; ++i) {
		leftDiagSum += board[i][i]
		rightDiagSum += board[n - 1 - i][i]
	}

	numbers.push(leftDiagSum)
	numbers.push(rightDiagSum)

	console.log(numbers)

	// 이 중에서 가장 큰 수를 반환
	return Math.max(...numbers)
}

console.log(
	printBiggestNumber(5, [
		[ 10, 13, 10, 12, 15 ],
		[ 12, 39, 30, 23, 11 ],
		[ 11, 25, 50, 53, 15 ],
		[ 19, 27, 29, 37, 27 ],
		[ 19, 13, 30, 13, 19 ]
	])
)
