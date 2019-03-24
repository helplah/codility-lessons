/* I learnt that toString() is used to convert a number into string. 
This function accepts a single optional parameter base. 
This parameter specifies the base (2 - 36) in which the integer is represented in string. */
function solution(N) {
  let increment = 0;
  let binaryGap = 0;
  const binary = N.toString(2);
  
  for (let x = 0; x < binary.length; x++) {
      if (binary[x] === "0") {
          // increment = 3
          increment++;
      } else if (increment > binaryGap) {
          // binaryGap = 5
          binaryGap = increment;
          increment = 0;
      } else {
          increment = 0;    
      }
  }

  return binaryGap;
}