{
  // function solution(s) {
  //   var answer = 0;
  //   answer = Number(s);
  //   return answer;
  // }

  // function solution(n) {
  //   var answer = '';
  //   for(let i=1; i<=n; i++){
  //     if(i % 2 !== 0){
  //       answer = answer + '수';
  //     } else {
  //       answer = answer + '박';
  //     }
  //   }
  //   console.log(answer);
  //   return answer;
  // }
  // solution(10);

  // function solution(lottos, win_nums) {
  //   var answer = [6,6];
  //   let count = 0;
  //   let unkownNum = lottos.filter(num => num === 0);

  //   lottos = win_nums.map(win_num => lottos.includes(win_num));

  //   for(let i=0; i<lottos.length; i++){
  //     if(lottos[i] === true){
  //       count++;
  //     }
  //   }
  //   count = count - 1; 
    
  //   answer = [6 - (unkownNum.length + count), 6 - count];
    
  //   answer[0] > 6 ? answer[0] = 6 : answer[0];
  //   answer[1] > 6 ? answer[1] = 6 : answer[1];


  //   return answer;
  // }

  // solution([3, 2, 4, 5, 8, 7], [31, 10, 45, 1, 6, 19]);

  function solution(num){
    let answer = 0;

    if(num < 2 || num > 1000000){
      return;
    }

    for(let i=3; i<=num; i = i + 2){
      let sosu = 0;
      for(let j=3; j<=num; j = j + 2){
        if(i % j === 0){
          sosu++;
        }
      }
      if(sosu === 1){
        answer++;
      }
      sosu = 0;
    }
    return answer;
  }

  solution(5);
}

