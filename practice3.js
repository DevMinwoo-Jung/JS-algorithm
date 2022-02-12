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

  function example(input) {
    let frequentNum = [...input];
    let checkNum = {};
    let answer = [];
    let answer2 = [];
    let checkMaxNum = 0;

    Object.defineProperties(Array.prototype, {
      count: {
        value: function (value) {
          return this.filter((x) => x == value).length;
        },
      },
    });

    let key = [...new Set(frequentNum)];

    for (let i = 0; i < 3; i++) {
      console.log(`${key[i]}'s count === ${frequentNum.count(key[i])}`);
      checkNum[`${key[i]}`] = frequentNum.count(key[i]);
    }
    console.log(checkNum);

    answer = Object.keys(checkNum)
      .map((num) => checkNum[num])
      .sort((a, b) => b - a);
    console.log(
      "이건 최대 많이 나온 숫자가 몇 번 등장했는지 알려주는 것" + answer
    );
    // 이건 최대 많이 나온 숫자가 몇 번 등장했는지 알려주는 것 그래서 여기서 가장 첫번쨰 꺼만 빼옴

    checkMaxNum = checkMaxNum = Math.max(
      [
        ...Object.keys(checkNum)
          .map((num) => checkNum[num])
          .sort((a, b) => b - a),
      ][0]
    );
    console.log(frequentNum);
    console.log(checkMaxNum);
    answer2 = Object.keys(checkNum).filter(
      (num) => checkNum[num] === checkMaxNum
    );
    console.log(answer2);
    // 가장 많이 등장한 숫자
  }

  example([1, 2, 2, 2, 4, 4, 4]);
}
