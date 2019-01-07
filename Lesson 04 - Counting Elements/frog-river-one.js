// 100% - needed to google for answer
// Detected time complexity: O(N)
// https://app.codility.com/demo/results/trainingPRUWWF-DCF/
function solution(X, A) {
  let isPresent = [];
  let sum = 0;
  const expectedSum = (X * (X + 1)) / 2;
  
  for (let i = 0; i < A.length; i++) {
      let value = A[i];
      
      if (!isPresent[value]) {
          isPresent[value] = true;
          sum += value;
          
          if (sum === expectedSum) {
              return i;
          }
      }    
  }
  
  return -1;
}


/* Why is time complexity O(N)??? */
// Task Score: 81%, Correctness: 100%, Performance: 60%
// Detected time complexity: O(N)
// https://app.codility.com/demo/results/training669FK8-Y29/
function solution(X, A) {
  let numOfLeaves = 0;
  let biggerIndex = 0;
  
  for (let i = 1; i <= X; i++) {
      let index = A.indexOf(i);
      
      if (index !== -1) {
          numOfLeaves++;
          
          if (index > biggerIndex) {
              biggerIndex = index;
          }
          
          if (numOfLeaves === X) {
              return biggerIndex;
          }
      } else {
          return -1;
      }
  }
}