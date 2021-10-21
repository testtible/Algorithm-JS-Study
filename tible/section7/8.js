// 회의실 배정 ( 그리디 )

// ▣ 입력예제 1 5
// 14
// 23
// 35 
// 46 
// 57
// ▣ 출력예제 1 3
// 예제설명
// (2, 3), (3, 5), (5, 7)이 회의실을 이용할 수 있다.
// ▣ 입력예제 2 3
// 33
// 13
// 23
// ▣ 출력예제 2 2
function isSameEnd(sort) {
  let count = 0;
  for(let i = 0; i < sort.length - 1; i++) {
    if(sort[i][1] === sort[i + 1][1]) {
      count++;
    }
  }

  return count === sort.length - 1;
}

function solution(arr) {
  let sliceArr = arr.slice(0);
  let count = 0;  
  let sort = arr.sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0] - b[0];
    }else {
      return a[1] - b[1];
    }
  });
  if(isSameEnd(sort)) {
    sort = sliceArr.sort((a, b) => {
      if(a[0] === b[0]) return a[1]-b[1];
      else return a[0] - b[0];
    });
  }
  console.log(sort)
   
  let end = sort[0][1];
  
  if(end) {
    // end에 무언가 있으면
    count += 1;
  }

  for(let i = 0; i < sort.length - 1; i++) {
    if(end <= sort[i + 1][0]) {
      count++;
      end = sort[i + 1][1];
    }
  }
  // 끝나는 시간으로 정렬
  // 시작시간과 비교하고 끝나는 시간 적립
  // 반복
  return count;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));

// [[3,3], [1,3], [2,3]]