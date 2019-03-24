// Task Score: 62%, Correctness: 100%, Performance: 0%
// Detected time complexity: O(N * M)
// https://app.codility.com/demo/results/trainingTTAEAY-RQE/
function solution(S, P, Q) {
  const A = 1, C = 2, G = 3, T = 4;
  const M = P.length;
  const queries = [];
  
  for (let x = 0; x < M; x++) {
      let pQuery = P[x];
      let qQuery = Q[x];
      let minimalImpact = '';
      
      if (pQuery === qQuery) {
          minimalImpact = S[P[x]];
      } else {
          // if there's a range of index, how do I deal with it?
          // how can I do it without looping again
          let bigger = Math.max(pQuery, qQuery);
          let smaller = Math.min(pQuery, qQuery);
  
          for (let i = smaller; i <= bigger; i++) {
              if (minimalImpact === '') {
                  minimalImpact = S[i];
              } else if (S[i] < minimalImpact) {
                  minimalImpact = S[i];
              }
          }
      }
      
      switch(minimalImpact) {
          case 'A':
              queries.push(A);
              break;
          case 'C':
              queries.push(C);
              break;
          case 'G':
              queries.push(G);
              break;
          case 'T':
              queries.push(T);
              break;
      }
  }
  
  return queries;
}

/* 1) I didn't read the part that states P[K] ≤ Q[K], where 0 ≤ K < M. Thus I did a longer way to ascertain if P[k] or Q[k] was bigger.
    2) I faced O(N * M) because I had a for loop within a for loop. I didn't know how to abstract away the range of index using slice method.
    3) I only needed to find the minimal impact factor of 'GCC', so there's no need to find each impact factor and compare them individually...
*/

// Task Score: 100%, Correctness: 100%, Performance: 100%
// Detected time complexity: O(N + M)
// https://app.codility.com/demo/results/trainingTTAEAY-RQE/
function solution(S, P, Q) {
    const A = 1, C = 2, G = 3, T = 4;
    let dna = '';
    const queries = [];
    
    for (let x = 0; x < P.length; x++) {
        // this solution assumes that P value is lower than Q value
        // on second look, the assumption is written below already
        dna = S.slice(P[x], Q[x] + 1);
        
        if (dna.indexOf('A') !== -1) {
            queries.push(A);
        } else if (dna.indexOf('C') !== -1) {
            queries.push(C);
        } else if (dna.indexOf('G') !== -1) {
            queries.push(G);
        } else if (dna.indexOf('T') !== -1) {
            queries.push(T);
        }
    }
    
    return queries;
}