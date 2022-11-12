{
//   //ingredient	result
// [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
// [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
//   //
  function solution(ingredient) {
    const answer = [];
    const obj = {}
    ingredient.map((element, index) => element.includes(answer[index]) ? obj[index]++ : obj[index] = 1);
    console.log(obj);
    return answer;
  }
  solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
}

/// ㅣength를 하나씩 더하면 될거 같은데...