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

  // function solution(num){
  //   let answer = 1;

  //   if(num < 2 || num > 1000000){
  //     return;
  //   }

  //   for(let i=3; i<=num; i = i + 2){
  //     let sosu = 0;
  //     for(let j=3; j<=num; j = j + 2){
  //       if(i % j === 0){
  //         sosu++;
  //       }
  //     }
  //     if(sosu === 1){
  //       answer++;
  //     }
  //     sosu = 0;
  //   }
  //   return answer;
  // }

  // solution(5);

//   function solution(n)
// {
//     var answer = 0;

//     answer = n.toString().split("").map(n => Number(n)).reduce((a,b) => a + b ,0);

//     return answer;
// }

// solution(123);

// function solution(s) {
//   var answer = '';
//   answer = s.split("").sort(function (a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
//     return 0;
// }).join('')
//   return answer;

// }

//   console.log(solution("Zbcdefg"));


// function solution(n) {
//   var answer = 0;
//   answer = Math.sqrt(n);

//   if(n % answer !== 0){
//     answer = -1;
//   } else {
//     answer = Math.pow(answer+1,2);
//   }
//   return answer;
//   }

//   console.log(solution(121));

// function solution(arr) {
//   var answer = [];
//   if(arr.length < 2){

//     return arr = [-1];
//   }
//   let min = 0;
//   min = Math.min(...arr);
//   answer = arr.splice(arr.findIndex(element => element === min), 1);
//   answer = arr;
//   return answer;
// }

// console.log(solution([4,3,2,1]));

// function solution(n) {
//   var answer = 0;
//   answer = n.toString().split("").sort((a,b) => b-a).join('') * 1;
//   return answer;
//   }

//   console.log(solution(118372));

// function solution(num) {
//   var answer = '';
//   if(num % 2 === 0){
//     answer = 'Even';
//   } else {
//     answer = 'Odd';
//   }
//   return answer;
// }

// function solution(n) {
//   var answer = [];
//   answer = n.toString().split("").map(n => n * 1).reverse();
//   return answer;
// }

function solution(s) {
  var answer = 0;
  const nums2 = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  let searchStr = [];
  let stringToNums = [];
  let tempStr = s;

  for(let i=0; i<nums2.length; i++){
    if(s.search(nums2[i]) !== -1){
      console.log(s.search(nums2[i]));
      searchStr.push(nums2[i]);
      let searchIndex = s.search(nums2[i]);
      s = s.split('');
      console.log(searchIndex, nums2[i].length);
      s.splice(searchIndex, nums2[i].length);
      s = s.join('');
    }
  }
  console.log(searchStr);
  // let i = 0;
  // console.log(isNaN(s[0]))
  // while(isNaN((tempStr[i] * 1) === false)){
    
  //   i++;
  // }
  // console.log(searchIndex);

  // console.log(isNaN((s[0] * 1)));
  // console.log(s[0] * 1);
//  console.log(s.join(''));
  


  if(searchStr.length === 0){
    return answer = Number(s);
  }

  for(let i=0; i<searchStr.length; i++){
    if(searchStr[i] === 'zero'){
      stringToNums.push(0);
    }
    if(searchStr[i] === 'one'){
      stringToNums.push(1);
    }
    if(searchStr[i] === 'two'){
      stringToNums.push(2);
    }
    if(searchStr[i] === 'three'){
      stringToNums.push(3);
    }
    if(searchStr[i] === 'four'){
      stringToNums.push(4);
    }
    if(searchStr[i] === 'five'){
      stringToNums.push(5);
    }
    if(searchStr[i] === 'six'){
      stringToNums.push(6);
    }
    if(searchStr[i] === 'seven'){
      stringToNums.push(7);
    }
    if(searchStr[i] === 'eight'){
      stringToNums.push(8);
    }
    if(searchStr[i] === 'nine'){
      stringToNums.push(9);
    }
  }
  // console.log("searchStr");
  // console.log(searchStr);
  // console.log("searchIndex");
  // console.log(searchIndex);
  // console.log("stringToNums");
  // console.log(stringToNums);


  for(let i=0; i<searchStr.length; i++){
    let tempSearch = s.search(searchStr[i]);
    s = s.split("");
    s.splice(tempSearch, searchStr[i].length, stringToNums[i]);
    s = s.join("");
  }
  answer = Number(s);
  

  return answer;
  }

  
  console.log(solution("1zerotwozero3"));
  // console.log(solution("one4seveneight"));
}

