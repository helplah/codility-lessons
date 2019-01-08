// 100% - I had to google for answer
// Detected time complexity: O(N) or O(N * log(N))
// https://app.codility.com/demo/results/trainingNPHTDK-6KZ/
function solution(A) {
    const N = A.length;
    let sum = N * (N + 1) / 2;
    let duplicateChecker = [];
    for (let i in A) {
        sum -= A[i];
        if (duplicateChecker[A[i]]) {
            return 0;
        }
        duplicateChecker[A[i]] = true;
    }
    
    return +(sum == 0);
}

/* I don't know why this answer didn't get 100% */
// Task Score: 75%, Correctness: 83%, Performance: 66%
// Detected time complexity: 
// https://app.codility.com/demo/results/trainingWW8ZGW-VBE/
function solution(A) {
  A.sort();
  let x = 1;
  
  for (let val of A) {
      if (val !== x) {
          return 0;
      }
      x++;
  }
  
  return 1;
}