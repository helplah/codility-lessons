// https://julienrenaux.fr/2015/04/27/codility-efficient-algorithm-solutions-in-javascript/#triangle
// 100% https://app.codility.com/demo/results/trainingGQDGDH-K5Z/
/* First, sort the array according to descending order to ensure that the largest number starts from index 0. 
Ascending order wouldn't work because the two other integers must be smaller than the hypotenuse (longest side of a right-angled triangle).

Descending ->
  Example test:    [10, 2, 5, 1, 8, 20]  
  Output:
  [ 20, 10, 8, 5, 2, 1 ]
  OK 

  Example test:    [10, 50, 5, 1] 
  Output:
  [ 50, 10, 5, 1 ]
  OK 

Ascending ->
  Example test:    [10, 2, 5, 1, 8, 20] 
  Output:
  [ 1, 2, 5, 8, 10, 20 ]
  OK 

  Example test:    [10, 50, 5, 1] 
  Output:
  [ 1, 5, 10, 50 ]
  OK 
*/
function solution(A) {
  A.sort((a, b) => b - a);
  
  for (let x = 0; x < A.length - 2; x++) {
      let P = x, Q = x + 1, R = x + 2; 
      let condition1 = A[P] + A[Q] > A[R];
      let condition2 = A[Q] + A[R] > A[P];
      let condition3 = A[R] + A[P] > A[Q];
      if (condition1 && condition2 && condition3) {
          return 1;
      }
  }
  
  return 0;
}