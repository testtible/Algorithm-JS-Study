// 장난꾸러기 현수
const solution = (arr) => {
  // 뒤에서부터 시작.
  // arr[i] 가 arr[i - 1] 보다 작으면 짝꿍 (첫 발견)
  // arr[i] 가 arr[i - 1] 보다 작으면 본인 (둘째 발견)
  let answer = [];

  for(let i = arr.length - 1; i >= 1; i--) {
    if(arr[i] < arr[i - 1]) {
      console.log(i);
      answer.unshift(i);
    }
  }
  answer[1] += 1; // 순서는 인덱스가 1부터 시작.
  return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

// [120, 130, 150, 150, 130, 150]


const solution2 = (arr2) => {
  let answer = [];
  let sliceArr = arr2.slice(0);
  let sort = sliceArr.sort((a , b) => a - b);

  for(let i = 0; i < arr2.length; i++) {
    if(sort[i] !== arr2[i]) {
      answer.push(i + 1); // 순서
    }  
  }
  return answer;
}

let arr2=[120, 130, 150, 150, 130, 150];
console.log(solution2(arr2));