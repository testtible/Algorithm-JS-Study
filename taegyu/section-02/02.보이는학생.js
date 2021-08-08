function solution(arr) {
  let tall = 0;

  return arr.filter((stature) => {
    if (stature > tall) {
      tall = stature;
      return stature;
    }
  }).length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
