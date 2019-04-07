// Task Score: 100%, Correctness: 100%, Performance: 100%
// Detected time complexity: O(N + M)
// https://app.codility.com/demo/results/trainingFG7ZXA-F7H/
function solution(N, A) {
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    let lastMax = 0;
    
    for (let x = 0; x < A.length; x++) {
        if (A[x] < N + 1) {
            const countersIndex = A[x] - 1;
            
            // change the element value to lastMax then proceed to increase it
            if (counters[countersIndex] < lastMax) {
                counters[countersIndex] = lastMax;
            }
            
            counters[countersIndex]++;
            
            if (counters[countersIndex] > maxCounter) {
                maxCounter = counters[countersIndex];
            }
            
        } else {
            lastMax = maxCounter;
        }
    }
    
    /* Key is to remove the 2 for loops that result in O(N * M) complexity. */

    // transform the remaining elements that were not increased after operation maxCounter to lastMax
    for (let x = 0; x < N; x++) {
        if (counters[x] < lastMax) {
            counters[x] = lastMax;
        }
    }
    
    return counters;
}

// did with Chun Yuan at KBC
// Task Score: 77%, Correctness: 100%, Performance: 60%
// https://app.codility.com/demo/results/trainingF8SCZ2-YH6/
function solution(N, A) {
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    
    for (let x = 0; x < A.length; x++) {
        if (A[x] !== N + 1) {
            const countersIndex = A[x] - 1;
            
            counters[countersIndex] += 1;
            
            if (counters[countersIndex] > maxCounter) {
                maxCounter = counters[countersIndex];
            }
            
        } else {
            // fill is N complexity
            counters.fill(maxCounter);
        }
    }
    
    return counters;
}

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