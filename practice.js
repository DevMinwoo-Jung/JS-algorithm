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


  // function solution(a, b) {
  //   var answer = new Date(2016, a-1, b);
  //   answer = String(answer).slice(0,4).toUpperCase();
  //   return answer;
  // }

  // console.log(solution(5, 24));

  // function solution(nums) {
  //   var answer = 0;
  //   answer = nums.filter((element, num) => nums.indexOf(element) === num).length;
  //   if(answer * 2 > nums.length){
  //     answer = Math.round(nums.length / 2);
  //   }
  //   return answer;
  // }

  // console.log(solution([3,3,3,2,2,2]));

  // function solution(numbers) {
  //   var answer = [];
  //   for(let i=0; i<numbers.length; i++){
  //     for(let j=0; j<numbers.length; j++){
  //       if(!(i === j)){
  //         answer.push(Number(numbers[i]) + Number(numbers[j]));
  //       }
  //     }
  //   }
  //   answer = answer.sort((a,b) => a-b).filter((element, num) => answer.indexOf(element) === num);
  //   return answer;
  // }
  // console.log(solution([2,1,3,4,1]));

//   function solution(arr)
// {
//     var answer = [];

//     for(let i=0; i<arr.length; i++){
//       if(arr[i] !== arr[i + 1]){
//         answer.push(arr[i]);
//       }
//     }
//     return answer;
// }

//   solution([4,4,4,3,3]);

  // function solution(seoul) {
  //   var answer = '';

  //   answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
    
  //   return answer;
  // }

  // console.log(solution(["Jane", "Kim"]));

  function solution(s) {
    var answer = true;
    s = s.split("");
    let p = 0;
    let y = 0;
    
    for(let i=0; i<s.length; i++){
      if(s[i] === "p" || s[i] === "P"){
        p++;
      } 
      else if(s[i] === "y" || s[i] === "Y"){
        y++;
      }
    }
    console.log(p, y);
    
    p == y ? answer = true : answer = false;

    return answer;
  }

  console.log(solution("Pyy"));
}