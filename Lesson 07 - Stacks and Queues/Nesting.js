// two kinds of parentheses - () and (())
// One that closes immediately, another closes later on
/*
function solution(S) {
  for (let index = 0; index < S.length; index++) {
      //console.log(ele);
      let indexFromBack = S.length - index - 1;
      if (S[index] === '(' && S[indexFromBack] === ')' || S[index] === ')' && S[indexFromBack] === '(') {
          
      } else {
          return 0;
      }
  }
  
  return 1;
} */

function solution(S) {
  for (let index = 0; index < S.length; index++) {
      //console.log(ele);
      let indexFromBack = S.length - index - 1;
      if (S[index] === '{' || S[index] === '(' && S[index + 1] === ')') {
          
      } else if (S[index] === '}' || S[index] === '(' && S[index + 1] === ')') {
          
      } else {
        return 0;
      }
  }

  return 1;
}

// https://julienrenaux.fr/2015/04/27/codility-efficient-algorithm-solutions-in-javascript/#nesting
function solution(S) {
  var len = S.length;
  
  if (!len) {
      return 1;
  }
  
  var stack = [],
  matches = {
      "(" : ")" 
  };
  
  for (i=0; i < len; i++){
      var currentCharacter = S[i];
      console.log('currentCharacter', currentCharacter);
      
      if (matches[currentCharacter]){
          stack.push(currentCharacter);
      } else {
          // if stack is empty which means the beginning char doesn't start with ( return 0
          if (!stack.length){
              return 0;
          }   
          var previousCharacter = stack.pop();
          console.log('previousCharacter', previousCharacter);
          if (matches[previousCharacter] !== currentCharacter){
              return 0;
          }   
      }   
  }        
  
  return (stack.length)? 0 : 1;
}
