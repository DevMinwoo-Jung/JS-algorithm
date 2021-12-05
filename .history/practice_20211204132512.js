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
    console.log(a.length, b.length);
    for(let i=0;i<a.length; i++){
      console.log(a[i] * b[i]);
    }
    return answer;
}

console.log(solution([1,2,3,4], [-3,-1,0,2]));
  

}