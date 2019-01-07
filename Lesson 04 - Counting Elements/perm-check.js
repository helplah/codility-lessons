


// 75%
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