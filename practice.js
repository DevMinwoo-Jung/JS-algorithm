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

  // function solution(s) {
  //   var answer = true;
  //   s = s.split("");
  //   let p = 0;
  //   let y = 0;
    
  //   for(let i=0; i<s.length; i++){
  //     if(s[i] === "p" || s[i] === "P"){
  //       p++;
  //     } 
  //     else if(s[i] === "y" || s[i] === "Y"){
  //       y++;
  //     }
  //   }
    
  //   p == y ? answer = true : answer = false;

  //   return answer;
  // }

  // console.log(solution("Pyy"));

  // function solution(s) {

  //   var answer = s.split("");
  //   if((s.length > 9) || (s.length < 2)){
  //     return answer = false;
  //   } else if (!(s.length === 4) || (s.length === 6)){
  //     return answer = false;
  //   }


  //   answer = answer.map(s => s).every(s => Number(s) == s);

  //   return answer;

  // }

  // console.log(solution("123456"))

  // function solution(arr, divisor) {
  //   var answer = [];
  //   answer = arr.filter(arr => arr % divisor === 0).sort((a,b) => a -b);


  //   answer == '' ? answer[0] = -1 : answer; 
  //   return answer;
  // }

  // console.log(solution([5,10,12], 5));

  // function solution(participant, completion) {

  //   if(participant.length > 100000 || participant.length <= 0){
  //     return;
  //   }
  //   if(participant.length - completion.length !== 1){
  //     return;
  //   }
    
  //   for(let i=0; i<participant.length; i++){
  //     if(participant[i].length > 20 || participant[i].length <= 0){
  //       return;
  //     }
  //   }

  //   let answer = '';
  //   let i = 0;

  //   while(participant.length > 1){
  //     if(completion.includes(participant[i])){
  //       completion.splice((completion.findIndex(element => element === participant[i])),1);
  //       participant.splice(i,1);
  //       i = 0;
  //     } else {
  //       i++;
  //     }
  //   }
  //   answer = participant;
  //   return answer.toString();

  // }

  // console.log(solution(	["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));



  // function solution(a, b) {
  //   var answer = 0;
  //   const length = Math.abs(a - b);

  //   for(let i=0; i<length; i++){
  //     if(a > b){
  //       answer = answer + (a - i);
  //     } else if (a < b){
  //       answer = answer + (a + i);
  //     }
  //   }
  //   answer = answer + b;
  //   return answer;
  // }

  function solution(answers) {
    var answer = [0,0,0];

    let jjikGod = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];

    jjikGod[0] = Array(2000).fill([1,2,3,4,5]).flat();
    jjikGod[1] = Array(1250).fill([2,1,2,3,2,4,2,5]).flat();
    jjikGod[2] = Array(1000).fill([3,3,1,1,2,2,4,4,5,5]).flat();
    
    for(let i=0; i<answers.length; i++){
      if(answers[i] === jjikGod[0][i]){
        answer[0] = ++answer[0];
      }
      if(answers[i] === jjikGod[1][i]){
        answer[1] = ++answer[1];
      }
      if(answers[i] === jjikGod[2][i]){
        answer[2] = ++answer[2];
      }
    }

    let trueArr = answer;
    // console.log(answer);
    trueArr = answer.map(element => element === Math.max(...answer));
    let trueCount = 0;

    for(let i=0; i<3; i++){
      if(trueArr[i] === true){
        trueCount+= 1;
      }
    }
    console.log(trueCount);

    if(trueCount === 0){
      answer = [1,2,3];
    } 
    else if(trueCount === 1){
      answer = answer.sort((a,b) => a-b)[0]; 
    } 
    else if(trueCount > 1){
      for(let i=0; i<3; i++){
        console.log(answer[i])
        if(answer[i] === true){
          answer[i] = i+1;
        } else {
          answer[i] = '';
        }
      }
    }

    console.log(answer);

    return answer;
  }

  // solution([0])
  // solution([1,2,3,4,5]);
  solution([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
  // solution([1,3,2,4,2]);
  // solution([1,1,2]);
  // solution([1,2,3,4,5]);
  // solution([1,3,2,4,2]);

  // jjikGod[0] = Array(2000).fill([1,2,3,4,5]).flat();
  // jjikGod[1] = Array(1250).fill([2,1,2,3,2,4,2,5]).flat();
  // jjikGod[2] = Array(1000).fill([3,3,1,1,2,2,4,4,5,5]).flat();
}