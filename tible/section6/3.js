function solution(a, b) {
  // b에 담긴 것들을 -1 해주고, 이중배열의 첫 번째 인자에 고정시키고 for문 돌려보기. 
  // 스택에 맨 마지막이 들어올린 것과 같다면 pop 시켜주면 되고, 카운터 +2 를 하면 될 것 같음.
  let arr = a;
  let count = 0;
  let mapB = b.map(el => el - 1);
  let doll = -1;
  let stack = [];
  mapB.forEach(el => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i][el] !== 0) { // 배열에 0이 아니면 인형이 있다는 것.
        doll = arr[i][el];
        if(stack[stack.length - 1] === doll) { // 스택 마지막과 갓 뽑은 인형 비교
          count += 2;
          stack.pop();
          doll = -1; 
        }else {
          stack.push(arr[i][el]);
        }
        arr[i][el] = 0;
        break; // 인형을 찾았으면 다음 el로 넘어가기
      }
    }
  })
  return count;
}


let a=[[0,0,0,0,0],
[0,0,1,0,3],
[0,2,5,0,1],
[4,2,4,4,2],
[3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));