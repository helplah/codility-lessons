// https://julienrenaux.fr/2015/04/27/codility-efficient-algorithm-solutions-in-javascript/#maxproductofthree
/* The max product of the three elements is the 1) last three elements of the sorted array (according to ascending order)
 and 2) the first two elements if they're negative and the last element. Because the array is sorted from negative to positive.
*/
function solution(A) {
  const N = A.length;
  A.sort((a, b) => a - b);
  
  return Math.max(A[0] * A[1] * A[N-1], A[N-3] * A[N-2] * A[N-1]);
}