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
  var answer = 0;
  let priceX = price;
  for(let i=1; i<=count; i++){
    price = price + (priceX * i);
  }
  price = price - priceX;
  console.log(price);
  answer = Math.abs(money - price - priceX);
  return answer;
}
console.log(solution(3,20,4));
  

}