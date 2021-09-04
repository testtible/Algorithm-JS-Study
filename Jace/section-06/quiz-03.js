/*
크레인 인형뽑기(카카오)
https://programmers.co.kr/learn/courses/30/lessons/64061
*/

function solution(board, moves) {
	const baskets = []
	let count = 0

	for (let i = 0; i < moves.length; ++i) {
		let pickedDoll = -1

		for (let j = 0; j < board.length; ++j) {
			if (board[j][moves[i] - 1] !== 0) {
				pickedDoll = board[j][moves[i] - 1]
				board[j][moves[i] - 1] = 0
				break
			}
		}

		if (pickedDoll === -1) {
			continue
		}

		if (baskets[baskets.length - 1] === pickedDoll) {
			count += 2
			baskets.pop()
		} else {
			baskets.push(pickedDoll)
		}
	}

	return count
}

console.log(
	solution(
		[ [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 3 ], [ 0, 2, 5, 0, 1 ], [ 4, 2, 4, 4, 2 ], [ 3, 5, 1, 3, 1 ] ],
		[ 1, 5, 3, 5, 1, 2, 1, 4 ]
	)
)
