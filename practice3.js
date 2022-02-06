{
//   function solution(s){
//     var answer = true;
//     let left = 0;
//     let right = 0;

//     console.log(s);
//     let copy = [...s];
//     console.log(copy);

//     if(s[0] !== "(" || s[s.length -1] !== ")"){
//       return answer = false;
//     }

//     for(let i=0; i<s.length; i++){
//       if(s[i] === "("){
//         left++;
//       } else if(s[i] === ")"){
//         right++;
//       }
//     }


//     answer = left == right ? answer = true : answer = false;
//     return answer;
// }

// function solution(s){
//   var answer = true;
//   s = s.split("");
//   answer = s[0] === ")" || s[s.length -1] === "(" ? answer = false : answer = true;

//   for(let i=0; i<s.length; i++){
//     if(s[i] === "(" & s[i+1] === ")"){
//       s.splice(i,2);
//       i = 0;
//     } 
//   }

//   console.log(s);

//   answer = s[0] === ")" || s[s.length -1] === "(" ? answer = false : answer = true;

//   return answer;
// }


// console.log(solution("()()")); // true
// console.log(solution("()))((()")); // false
// // console.log(solution(")()(")); // false
// // console.log(solution("())()(()")); // false

function example(input){
  let frequentNum = [...input];
  let checkNum = {};
  
  // frequentNum.map((element) => frequentNum.filter((element) => checkNum.includes(element) === false ? checkNum))
  // console.log(frequentNum.map((element) => checkNum.includs(element)));

  for(let i=0; i<input.length; i++){
    if(frequentNum[i] in checkNum){
      console.log(frequentNum[i]);
      checkNum[frequentNum[i]] = '시발';
      console.log(checkNum[frequentNum[i]]);
    } else {
      //checkNum.frequentNum[i] = 0;
      Object.defineProperty(checkNum, `${frequentNum[i]}`, {
        value: 1
      })
    }
  }
console.log(checkNum);

}

example([1, 2, 2, 2, 3]);
}