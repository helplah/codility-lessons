// Chun Yuan's soln. Still need find slice of threes.
function solution(A) {
  let totals = [];
  
  for (let x = 0; x < A.length; x++) {
      const current = A[x];
      const next = A[x] + 1;
      const total = current + next;
      totals.push(total);
  }
  
  const smallestTotal = Math.min(...totals);
  console.log('smallestTotal', smallestTotal);
  
  const smallestTotalIdx = totals.indexOf(smallestTotal);
  console.log(`Idx is ${smallestTotalIdx}`);
  
  return smallestTotalIdx
}

/*  my attempted soln
function solution(A) {
  let minimalAvg;
  let nextSlice;

  for (let x = 0; x < A.length; x++) {
      if (minimalAvg === undefined) {
          minimalAvg = (A[x] + A[x + 1]) / 2;
      }
      nextSlice = (A[x] + A[x + 1]) / 2;
      
      if (nextSlice < minimalAvg) {
          //minimalAvg = 
      }
      
      //console.log(A[x]);
  }
}
*/