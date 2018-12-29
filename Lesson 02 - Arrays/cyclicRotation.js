// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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