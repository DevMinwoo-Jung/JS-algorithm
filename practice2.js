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

// function solution(n, arr1, arr2) {
//   var answer = [];
//   let tempAnswer = [];

//   if(n > 16 || n < 0){
//     return;
//   }

//   for(let i=0; i<arr1.length; i++){
//     if((n - arr1[i].toString(2).length) !== 0){
//       let zero = "0".repeat(n - arr1[i].toString(2).length);
//       tempAnswer.push(zero + arr1[i].toString(2));
//     } else {
//       tempAnswer.push(arr1[i].toString(2));
//     }
//   }
//   for(let i=0; i<arr1.length; i++){
//     if((n - arr2[i].toString(2).length) !== 0){
//       let zero = "0".repeat(n - arr2[i].toString(2).length);
//       tempAnswer.push(zero + arr2[i].toString(2));
//     } else {
//       tempAnswer.push(arr2[i].toString(2));
//     }
//   }
  
//   for(let i=0; i<arr1.length; i++){
//     if((n - (tempAnswer[i] * 1 + tempAnswer[i + arr2.length] * 1).toString().length) !== 0){
//       let zero = "0".repeat(n - (tempAnswer[i] * 1 + tempAnswer[i + arr2.length] * 1).toString().length);
//       answer.push(zero + (tempAnswer[i] * 1 + tempAnswer[i + arr2.length] * 1))
//     } else {
//       answer.push(tempAnswer[i] * 1 + tempAnswer[i + arr2.length] * 1);
//     }
//   }
  
//   for(let i=0; i<answer.length; i++){
//     answer[i] = answer[i].toString().split("");
//     console.log(answer[i]);
//     for(let j=0; j<answer.length; j++){
//       answer[i][j] !== "0" ? answer[i][j] = "#" : answer[i][j] = ' ';
//     }
//     answer[i] = answer[i].join('');
//   }

//   return answer;
// }

// solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]);

// function solution(s) {
//   var answer = [];
//   answer = s.split(" ").map(str => str.split(""));

//   for(let i=0; i<answer.length; i++){
//     for(let j=0; j<answer[i].length; j++){
//       [j] % 2 == 0 ? answer[i][j] = answer[i][j].toUpperCase() :  answer[i][j] = answer[i][j].toLowerCase();
//     }
//     answer[i] = answer[i].join('');
//   }
//   answer = answer.join(' ');
//   return answer;
// }

// solution("try hello world");

// function solution(n) {
//   var answer = [];

//   if(n < 0 || n > 3000){
//     return;
//   }

//   for(let i=n; i>0; i--){
//     if(n % i === 0){
//       answer.push(i);
//     }
//   }

//   answer = answer.reduce((a,b) => a + b,0);

//   return answer;
//   }

//   solution(0);

// function solution(arr1, arr2) {
//   var answer = [[],[]];
//   for(let i=0; i<arr1[0].length; i++){
//     if(!isNaN(arr1[0][i] + arr2[0][i])){
//       answer[0].push(arr1[0][i] + arr2[0][i]);
//     }
//   }
//   for(let i=0; i<arr1[0].length; i++){
//     if(!isNaN(arr1[0][i] + arr2[0][i])){
//       answer[1].push(arr1[1][i] + arr2[1][i]);
//     }
//   }
//   return answer;
// }

// solution([[1,2,4],[2,3,6]],[[3,4,2],[5,6,1]]);
// solution([[1],[2]],[[3],[4]]);
// // 	[[4,6],[7,9]]
}

