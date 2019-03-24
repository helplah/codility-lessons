/* I arrived at O(N^2) solution, had to google to find out this solution. How do I think about this problem intuitively... */
// 100%
// Time Complexity: O(N)
// https://app.codility.com/demo/results/trainingYSPPWE-ZT9/
function solution(A) {
  let eastCount = 0;
  let passing = 0;

  for (let x of A) {
      if (x === 1) {
          passing += eastCount;
      } else {
        eastCount++; 
      }
  }
  
  if (passing > 1e9) {
      return -1;
  }
  return passing;
}

// Task Score: 70%, Correctness: 100%, Performance: 40%
// Time Complexity: O(N ^ 2)
// https://app.codility.com/demo/results/trainingUPTGUT-A2Z/
function solution(A) {
  let zeros = [];
  let ones = [];
  let numOfPairs = 0;
  
  for (let x = 0; x < A.length; x++) {
      if (A[x] === 0) {
          zeros.push(x);
      } else {
          ones.push(x);            
      }
  }
  
  // zeros: 0, 2
  // ones: 1, 3, 4
  for (let x of zeros) {
      for (let y of ones) {
          if (x < y) {
              numOfPairs++;
          }
      }
  }
  
  if (numOfPairs === 1000000000) {
      return -1;
  }
  return numOfPairs;
}