{

  // function solution(n) {
  //   var answer = 1;
  //   while(n % answer !== 1){
  //     answer++
  //   }
  //   return answer;
  // }
  // console.log(solution(12));

//   function solution(a, b) {

//     let answer = 0;
//     for(let i=0;i<a.length; i++){
//       answer = answer + (a[i] * b[i]);
//     }
//     return answer;
//   }

// console.log(solution([1,2,3,4], [-3,-1,0,2]));

// function solution(price, money, count) {
//   var answer = 0;
//   let priceX = price;
//   for(let i=2; i<=count; i++){
//     price = price + (priceX * i);
//   }
//   answer = money - price;
//   if(answer < money){
//     return answer = 0;
//   }
//   return Math.abs(answer);
// }
// console.log(solution(3,20,4));
  

  // function solution(s) {
  //   let answer = s.split('');
  //   let arrLength = answer.length;

  //   if((arrLength % 2) == 0){
  //     answer = `${answer[Math.floor((arrLength/2)-1)]}${answer[Math.floor((arrLength/2))]}`;
  //   } else {
  //     answer = `${answer[Math.floor((arrLength/2))]}`;     
  //   }

  //   return answer;
  // }

  // console.log(solution('abcde'));

  // function solution(absolutes, signs) {
  //   let answer = 0;
    
  //   for(let i=0; i<absolutes.length; i++){
  //     if(signs[i] === true){
  //       absolutes[i] = absolutes[i];
  //     } else {
  //       absolutes[i] = -absolutes[i];
  //     }
  //   }
  //   answer = absolutes.reduce((a,b) => a + b);
  //   return answer;
  // }

  // console.log(solution([4,7,12], [true,false,true]));

  // function solution(new_id) {
  //   let answer = '';

  //   // Step1
  //   answer = String(new_id).toLowerCase();

  //   console.log(answer);
  //   // Step2
  //   let regTest = /^[a-z0-9]{1,15}$/;
  //   console.log(regTest.test('answer'));
  //   return answer;
  // }

  // solution('ASDDD');

  // function solution(array, commands) {
  //   let answer = [];
  //   for(let i=0; i<commands.length; i++){
  //       answer[i] = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b)[commands[i][2]-1];
  //   }
  //   return answer;
  // }


  function solution(a, b) {
    var answer = new Date(2016, a-1, b);
    answer = String(answer).slice(0,4).toUpperCase();
    return answer;
  }

  console.log(solution(5, 24));


}