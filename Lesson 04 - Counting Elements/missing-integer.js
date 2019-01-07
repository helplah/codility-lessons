// 100%
// Detected time complexity: O(N) or O(N * log(N))
// https://app.codility.com/demo/results/trainingMW8MUD-B9J/
function solution(A) {
  let isPresent = [];
  for (let val of A) {
      if (!isPresent[val]) {
          isPresent[val] = true;
      }
  }
  
  for (let x = 1; x <= isPresent.length; x++) {
      if (isPresent[x] === undefined) {
          return x;
      }    
  }
  
  const biggest = Math.max(...A);
  if (biggest > 0) {
      return biggest + 1;
  } else {
      return 1;
  }
}