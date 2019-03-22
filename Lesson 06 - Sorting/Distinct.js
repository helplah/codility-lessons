// My initial solution
// Task Score: 83%, Correctness: 100%, Performance: 33%
// Detected Time Complexity: O(N**2)
// https://app.codility.com/demo/results/trainingRTV37E-SZA/
function solution(A) {
  const compare = [];
  
  for (let x = 0; x < A.length; x++) {
      if (!compare.includes(A[x])) {
          compare.push(A[x]);
      }
  }
  
  return compare.length;
}

// Task Score: 100%, Correctness: 100%, Performance: 100%
// Detected Time Complexity: O(N*log(N)) or O(N)
// https://app.codility.com/demo/results/training4RSJQE-AJ7/

/* [1, 1, 1, 2, 2, 3] - How many distinct values are there? Ans: 3
The counter is increased during the comparison of 1 and 2, 2 and 3, lastly 3 and undefined.
Since A is sorted in an ascending order, the first distinct value is added in the comparison between 3 and undefined.
*/ 
function solution(A) {
  let counter = 0;
  A.sort((a, b) => a - b);

  for (let x = 1; x <= A.length; x++) {
      if (A[x] !== A[x-1]) {
          counter++;        
      }
  }
  
  return counter;
}

// run this in Codility editor to see clearer
function solution(A) {
  let counter = 0;
  A.sort((a, b) => a - b);
    console.log(A)

  for (let x = 1; x <= A.length; x++) {
      console.log('A index-value pair:', x + ' - ' + A[x]);
      if (A[x] !== A[x-1]) {
          counter++;
          console.log('counter', counter);
      }
  }
  
  return counter;
}