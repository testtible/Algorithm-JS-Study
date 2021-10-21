// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.
// ▣ 입력예제 1
// 6
// 13 5 11 7 23 15
// ▣ 출력예제 1
// 5 7 11 13 15 23

const solution = (arr) => {
  // i번 자리부터 끝까지 제일 작은 것을 탐색 후 그 자리에 적용
  let sliceArr = arr.slice(0);
  let count = 0;
  // let minNum = 101;
  // slice된 배열을 i로 빼가고, 계속 적은 것을 대입
  for(let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[idx] > arr[j]) {
        idx = j;
        count++;
      }
    }
    if(count > 0) {
      count = 0;
      const num = arr[i];
      arr[i] = arr[idx];
      arr[idx] = num;
    }
  }

  return arr;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// for문 2번 쓰는 방법.
