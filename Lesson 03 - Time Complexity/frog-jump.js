// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  if (X === Y) {
      return 0;
  } else {
      const dist = Y - X;
      return Math.ceil(dist / D);
  }
}