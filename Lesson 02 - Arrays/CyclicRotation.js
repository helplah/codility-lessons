// 100% - focus on correctness
// https://app.codility.com/demo/results/trainingQW9KPY-UBR/
function solution(A, K) {
  let newArray = A.slice();
  
  if (A.length > 1) {
      for(let x = 0; x < A.length; x++) {
          const newIndex = (x + K - A.length) % A.length;
          newArray.splice(newIndex, 1, A[x]);
      }
  }
  
  return newArray;
}