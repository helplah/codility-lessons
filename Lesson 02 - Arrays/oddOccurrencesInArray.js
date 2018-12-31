// 100% - I had no clue on the usage of bitwise operator 
// https://app.codility.com/demo/results/trainingY2BDTY-5QB/
function solution(A) {
    let result = 0;
  
    for (let element of A) {
        // Apply Bitwise XOR to the current and next element
        result ^= element;
    }

    return result
}

// Task Score: 66%, Correctness: 100%, Performance: 25%
// Detected time complexity: O(N^2)
// https://app.codility.com/demo/results/trainingBERN4E-WMB/
function solution(A) {
    let arr = [];
    
    for(let ele of A) {
        const index = arr.indexOf(ele);
        
        if (index === -1) {
            // contains every single value
            arr.push(ele);
        } else {
            arr.splice(index, 1); 
        }
    }
    
    return arr.shift();
}

//I have no idea why the time complexity is O(N^2)...
// Task Score: 55%, Correctness: 80%, Performance: 25%
// Detected time complexity: O(N^2)
// https://app.codility.com/demo/results/trainingVTXUMZ-A49/
function solution(A) {
    let count = [];
    
    for(let x = 0; x < A.length; x++) {
        if(count[A[x]] === undefined) {
            count[A[x]] = 1;
        } else {
            count[A[x]]++;
        }
    }
    
    for(let x = 0; x < count.length; x++) {
        if(count[x] === 1) {
            return x;
        }
    }
}