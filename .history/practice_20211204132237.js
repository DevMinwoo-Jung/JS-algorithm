{

  // function solution(n) {
  //   var answer = 1;
  //   while(n % answer !== 1){
  //     answer++
  //   }
  //   return answer;
  // }
  // console.log(solution(12));

  function solution(a, b) {

    let answer = 0;
    for(let i=0;i<a.length-1; i++){
      for(let j=0; j<b.length-1; j++){
        answer = answer +  (a[i] * b[j]);
      }
    }
    return answer;
}

console.log(solution([1,2,3,4], [-3,-1,0,2]));
  

}