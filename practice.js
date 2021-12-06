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
  

  function solution(s) {
    let answer = s.split('');
    let arrLength = answer.length;

    if((arrLength % 2) == 0){
      answer = `${answer[Math.floor((arrLength/2)-1)]}${answer[Math.floor((arrLength/2))]}`;
    } else {
      answer = `${answer[Math.floor((arrLength/2))]}`;     
    }

    return answer;
  }

  console.log(solution('abcde'));

}