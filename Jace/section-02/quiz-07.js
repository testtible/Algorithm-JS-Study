/*
봉우리

지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 
각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 
봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요. 

격자의 가장자리는 0으로 초기화 되었다고 가정한다.
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

0 0 0 0 0 0 0
0 5 3 7 2 3 0
0 3 7 1 6 1 0
0 7 2 5 3 4 0
0 4 3 6 4 1 0
0 8 7 3 5 2 0
0 0 0 0 0 0 0

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 
각 자연수는 100을 넘지 않는다.

▣ 출력설명
봉우리의 개수를 출력하세요.

▣ 입력예제 1 
5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2
▣ 출력예제 1
10
*/

const printNumberOfPeaks = (n, board) => {
	let peaks = []

	for (let row = 0; row < n; ++row) {
		for (let col = 0; col < n; ++col) {
			// 봉우리인지 체크해줄 변수
			let count = 0

			// 한 칸 위 검사
			if (row - 1 < 0) {
				++count
			} else {
				if (board[row][col] > board[row - 1][col]) {
					++count
				}
			}

			// 한 칸 아래 검사
			if (row + 1 >= n) {
				++count
			} else {
				if (board[row][col] > board[row + 1][col]) {
					++count
				}
			}

			// 한 칸 왼쪽 검사
			if (col - 1 < 0) {
				++count
			} else {
				if (board[row][col] > board[row][col - 1]) {
					++count
				}
			}

			// 한 칸 오른쪽 검사
			if (col + 1 >= n) {
				++count
			} else {
				if (board[row][col] > board[row][col + 1]) {
					++count
				}
			}

			// 상하좌우를 체크해서 모두 크다면 봉우리다
			if (count === 4) {
				peaks.push(board[row][col])
			}
		}
	}

	console.log(peaks)

	return peaks.length
}

console.log(
	printNumberOfPeaks(5, [
		[ 5, 3, 7, 2, 3 ],
		[ 3, 7, 1, 6, 1 ],
		[ 7, 2, 5, 3, 4 ],
		[ 4, 3, 6, 4, 1 ],
		[ 8, 7, 3, 5, 2 ]
	])
)
