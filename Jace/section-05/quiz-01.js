/*
두 배열 합치기

오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.

▣ 입력예제 1 
3
1 3 5
5
2 3 6 7 9
▣ 출력예제 1
1 2 3 3 5 6 7 9
*/

const printSortedArray = (arr1, arr2) => {
	const answer = []

	const arr1Length = arr1.length
	const arr2Length = arr2.length
	const minLength = arr1.length > arr2.length ? arr2.length : arr1.length

	let arr1Index = 0
	let arr2Index = 0

	while (true) {
		if (arr1Index === minLength || arr2Index === minLength) {
			break
		}
		if (arr2[arr2Index] < arr1[arr1Index]) {
			answer.push(arr2[arr2Index])
			++arr2Index
		} else {
			answer.push(arr1[arr1Index])
			++arr1Index
		}
	}

	// arr2의 길이가 더 작은 경우
	while (true) {
		if (arr1Index === arr1Length) {
			break
		}

		answer.push(arr1[arr1Index])
		++arr1Index
	}

	// arr1의 길이가 더 작은 경우
	while (true) {
		if (arr2Index === arr2Length) {
			break
		}

		answer.push(arr2[arr2Index])
		++arr2Index
	}

	return answer
}

console.log(printSortedArray([ 1, 3, 5 ], [ 2, 3, 6, 7, 9 ]))
