// 캐시문제
const solution = (memory, arr) => {
  // 뒤에 부터 기준을 잡아보기. 
  // 캐시 미스 : 모든게 다 뒤로 밀림 ( 해야 할 작업이 캐시에 없음 )
  // 캐시 히트 : 해야 할 작업이 캐시에 있는 상태, 그 인덱스 기준으로 맨 앞 전까지 한 칸씩 밀어줌.
  let cacheArr = Array.from({length:memory}, () => 0);
  // console.log(cacheArr)
  while(arr.length > 0) {
    const num = arr.shift();
    if(!cacheArr.indexOf(num)) { // 캐시 미스
      for(let i = memory - 1; i >= 1; i--) {
        cacheArr[i] = cacheArr[i - 1];
      }
      cacheArr[0] = num;
    }else {
      // 캐시 히트
      const idx = cacheArr.indexOf(num);
      
      for(let i = idx; i >= 1; i--) {
        cacheArr[i] = cacheArr[i - 1];
      }
      cacheArr[0] = num;
    }
  }
  return cacheArr;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// 코드 확인해보기.