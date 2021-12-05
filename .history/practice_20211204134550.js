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

function solution(price, money, count) {
  let answer = -1;
  for(let i=1; i<=count; i++){
    money = money - price;
    price = price * i;
  }
  answer = Math.abs(money);
  return answer;
}
console.log(solution(5,30,5));
  

}