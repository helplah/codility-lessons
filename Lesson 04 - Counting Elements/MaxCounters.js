/*
function solution(N, A) {
  let counters = [];
  let counterIndex = 0;
  let maxCounter = 0;
  let lastUpdate = 0;

  for (let x = 0; x < N; x++) {
      counters[x] = 0;
  }
  
  for (let index in A) {
      if (A[index] >= 1 && A[index] <= N) {
          // Array's value - 1 to become counterIndex
          // 3 - 1 = 2
          let counterIndex = A[index] - 1
      
          if (counters[counterIndex] < lastUpdate) {
              counters[counterIndex] = lastUpdate + 1;
          } else {
              counters[counterIndex] += 1;
          }
          
          if (counters[counterIndex] > maxCounter) {
              maxCounter = counters[counterIndex];
          }
      } else {
          lastUpdate = maxCounter;
      }
  }
  
  for (let index in N) {
      console.log(index);
      if (counters[index] < lastUpdate) {
          counters[index] = lastUpdate;
      }
  }
  
  return counters;
}
*/

// Task Score: 77%, Correctness: 100%, Performance: 60%
// Detected time complexity: 
// https://app.codility.com/demo/results/trainingYW2U6C-34W/
function solution(N, A) {
    let counters = [];
    let maxCounter = 0;
  
    for (let x = 0; x < N; x++) {
        counters[x] = 0;
    }
    
    for (let index in A) {
        // Array's value - 1 to become counterIndex
        // 3 - 1 = 2
        let counterIndex = A[index] - 1
        
        if (A[index] >= 1 && A[index] <= N) {
            counters[counterIndex] += 1;
            
            if (counters[counterIndex] > maxCounter) {
                maxCounter = counters[counterIndex];
            }
        } else if (A[index] === N + 1) {
            // this is the only difference
            counters.fill(maxCounter);
        }
    }
    
    return counters;
}

// Task Score: 66%, Correctness: 100%, Performance: 40%
// Detected time complexity: O(N*M)
// https://app.codility.com/demo/results/trainingRZZJJ4-RW6/
function solution(N, A) {
    let counters = [];
    let maxCounter = 0;
  
    for (let x = 0; x < N; x++) {
        counters[x] = 0;
    }
    
    for (let index in A) {
        // Array's value - 1 to become counterIndex
        // 3 - 1 = 2
        let counterIndex = A[index] - 1
        
        if (A[index] >= 1 && A[index] <= N) {
            counters[counterIndex] += 1;
            
            if (counters[counterIndex] > maxCounter) {
                maxCounter = counters[counterIndex];
            }
        } else if (A[index] === N + 1) {
            for (let i in counters) {
                counters[i] = maxCounter;
            } 
        }
    }
    
    return counters;
}