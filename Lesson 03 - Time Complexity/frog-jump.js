// 100%
// Detected time complexity: O(1)
// https://app.codility.com/demo/results/trainingJNFZPK-T77/
function solution(X, Y, D) {
  if (X === Y) {
      return 0;
  } else {
      const dist = Y - X;
      return Math.ceil(dist / D);
  }
}