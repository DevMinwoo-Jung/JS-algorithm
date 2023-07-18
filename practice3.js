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

  // function example(input) {
  //   let frequentNum = [...input];
  //   let checkNum = {};
  //   let answer = [];
  //   let answer2 = [];
  //   let checkMaxNum = 0;

  //   Object.defineProperties(Array.prototype, {
  //     count: {
  //       value: function (value) {
  //         return this.filter((x) => x == value).length;
  //       },
  //     },
  //   });

  //   let key = [...new Set(frequentNum)];

  //   for (let i = 0; i < 3; i++) {
  //     console.log(`${key[i]}'s count === ${frequentNum.count(key[i])}`);
  //     checkNum[`${key[i]}`] = frequentNum.count(key[i]);
  //   }
  //   console.log(checkNum);

  //   answer = Object.keys(checkNum)
  //     .map((num) => checkNum[num])
  //     .sort((a, b) => b - a);
  //   console.log(
  //     "이건 최대 많이 나온 숫자가 몇 번 등장했는지 알려주는 것" + answer
  //   );
  //   // 이건 최대 많이 나온 숫자가 몇 번 등장했는지 알려주는 것 그래서 여기서 가장 첫번쨰 꺼만 빼옴

  //   checkMaxNum = checkMaxNum = Math.max(
  //     [
  //       ...Object.keys(checkNum)
  //         .map((num) => checkNum[num])
  //         .sort((a, b) => b - a),
  //     ][0]
  //   );
  //   console.log(frequentNum);
  //   console.log(checkMaxNum);
  //   answer2 = Object.keys(checkNum).filter(
  //     (num) => checkNum[num] === checkMaxNum
  //   );
  //   console.log(answer2);
  //   // 가장 많이 등장한 숫자
  // }

  // example([1, 2, 2, 2, 4, 4, 4]);

  function solution(input) {
    let inputTonumber = input.split("");
    let answer = [];

    for (let i = 0; i < inputTonumber.length; i++) {
      if (inputTonumber[i] === "I") {
        answer.push(3);
      } else if (inputTonumber[i] === "V") {
        answer.push(5);
      } else if (inputTonumber[i] === "X") {
        answer.push(10);
      } else if (inputTonumber[i] === "L") {
        answer.push(50);
      } else if (inputTonumber[i] === "C") {
        answer.push(100);
      } else if (inputTonumber[i] === "D") {
        answer.push(500);
      } else if (inputTonumber[i] === "M") {
        answer.push(1000);
      }
    }
    answer = answer.reduce((a, b) => a + b);

  }
  solution("III");
} 

// 어케푼지 모름 확인 다시 할 것
function solution(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr1[0].length;
  
  // Check if the dimensions of arr1 and arr2 are the same
  if (arr2.length !== rows || arr2[0].length !== cols) {
    throw new Error("Both matrices must have the same dimensions.");
  }
  
  // Create a new matrix to store the result of addition
  const result = new Array(rows).fill().map(() => new Array(cols).fill(0));
  
  // Perform matrix addition
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  
  return result;
}