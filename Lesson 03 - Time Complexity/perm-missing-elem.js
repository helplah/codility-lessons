// 100% - I had thought of this method but didn't implement it. Ended up seeing it online...
// https://app.codility.com/demo/results/trainingJU6GKE-B75/
function solution(A) {
  if (A.length === 0) return 1;
  const largest = A.length + 1;
  
  const actualSum = A.reduce((accumulator, currentValue) => accumulator + currentValue);
  const perfectSum = largest * (largest + 1) / 2;
  
  return perfectSum - actualSum;
}

// Task Score: 70%, Correctness: 100%, Performance: 40%
// Detected time complexity: O(N^2)
// https://app.codility.com/demo/results/trainingWQJ244-MNX/
function solution(A) {
  let x = 1;
  
  while(x <= A.length + 1) {
      if(A.indexOf(x) === -1) {
          return x;
      }
      x++;
  }
}