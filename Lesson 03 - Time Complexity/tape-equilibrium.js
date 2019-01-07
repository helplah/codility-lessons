// 100%
// Detected time complexity: O(N)
// https://app.codility.com/demo/results/trainingXQT737-AKV/
function solution(A) {
  let first = 0;
  let smallDiff = 0;
  let bigDiff = 0;
  
  // this is meant to be the second value, need to subtract first
  let second = A.reduce((accumulator, currentVal) => {
      return accumulator + currentVal;
  });
  
  for (let x = 0; x < A.length - 1; x++) {
      first += A[x];
      second -= A[x];
      
      bigDiff = Math.abs(first - second);
      if (x === 0) {
          smallDiff = bigDiff;
      } else if (bigDiff < smallDiff) {
          smallDiff = bigDiff;
      }
      console.log("bigDiff", bigDiff);
      console.log("smallDiff", smallDiff);
  }
  
  return smallDiff;
}