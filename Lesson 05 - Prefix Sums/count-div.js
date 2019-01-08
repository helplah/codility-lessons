// tried Math.ceil n all didn't work 
// Math.floor - https://app.codility.com/demo/results/trainingJQXNJP-N22/ 
// Math.round - https://app.codility.com/demo/results/training7VBHCV-PGK/
function solution(A, B, K) {
  let range = B - A + 1;
  let divisible = Math.round(range / K);
  
  return divisible;
}

/* The following issues have been detected: timeout errors.
For example, for the input [0, 2000000000, 1] the solution exceeded the time limit (2 billion btw). */

// Task Score: 50%, Correctness: 100%, Performance: 0%
// Detected time complexity: O(B-A)
// https://app.codility.com/demo/results/trainingZAEF2T-WGB/
function solution(A, B, K) {
  let divisible = 0;
  
  for (let x = A; x <= B; x++) {
      if (x % K === 0) {
          divisible++;
      }
  }
  
  return divisible;
}