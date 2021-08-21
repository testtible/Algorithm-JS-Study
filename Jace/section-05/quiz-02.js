/*
공통원소 구하기

A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

▣ 입력예제 1 
5
1 3 9 5 2
5
3 2 5 7 8
▣ 출력예제 1
2 3 5
*/

const printCommonElements = (arr1, arr2) => {
	const result = []
	const sortedArr1 = arr1.sort((a, b) => a - b)
	const sortedArr2 = arr2.sort((a, b) => a - b)

	const minLength = sortedArr1.length > sortedArr2.length ? sortedArr2.length : sortedArr1.length
	let arr1Index = 0
	let arr2Index = 0

	while (true) {
		if (arr1Index === minLength || arr2Index === minLength) {
			break
		}

		if (arr1[arr1Index] < arr2[arr2Index]) {
			++arr1Index
		} else if (arr2[arr2Index] < arr1[arr1Index]) {
			++arr2Index
		} else {
			result.push(arr1[arr1Index])
			++arr1Index
			++arr2Index
		}
	}

	return result
}

console.log(printCommonElements([ 1, 3, 9, 5, 2 ], [ 3, 2, 5, 7, 8 ]))
