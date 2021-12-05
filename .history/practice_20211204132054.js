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

    for(let i=0;i<a.length; i++){
      for(let j=0; j<b.length; j++){
        console.log(a[i] * b[j]);
      }
    }
    let answer = 1234567890;
    return answer;
}

solution([1,2,3,4], [-3,-1,0,2]);
  

}