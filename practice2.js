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

    for(let i=2; i<=num; i++){
      let sosu = 0;
      for(let j=2; j<=i; j++){
        if(i % j === 0){
          sosu++;
        }
      }
      if(sosu === 1){
        answer++;
      }
    }
    console.log(answer);
  }

  solution(5);
}