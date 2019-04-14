// Task Score: 25%, Correctness: 50%, Performance: 0%
// Detected Time Complexity: 
// https://app.codility.com/demo/results/trainingG3VJSX-HZ9/

// P < Q, fish P is upstream of fish Q. Index smaller means fish is upstream.
// A contains size of fishes
// B contains directions: 0 flowing upstream, 1 flowing downstream
function solution(A, B) {
  let downstreamFish = [];
  let eatenFish = 0;
  
  for (let x = 0; x < B.length; x++) {
      if (B[x] === 1) {
          // add to head of array
          downstreamFish.unshift(A[x]);
      } else if (B[x] === 0 && downstreamFish.length > 0) {
          let currentFish = downstreamFish.pop();
          
          if (currentFish > A[x]) {
              // add to tail of array
              downstreamFish.push(currentFish);
          } 
              eatenFish++;
      } 
  }
  
  return A.length - eatenFish;
}

