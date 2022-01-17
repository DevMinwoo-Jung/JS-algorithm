{
function solution(s) {
  var answer = [];
  s = s.split(' ').map(ele =>  ele[0].toUpperCase() + ele.toLowerCase().split("").splice(1).join(''));



  for (let i = 0; i < s.length; i++) {
    if (i == s.length - 1) {
      answer.push(s[i]);
    } else {
      answer.push(s[i] + " ");
    }
  }
  answer = answer.join("").toString();
  console.log(answer);
  return answer;
  
}


solution("3people unFollowed me");

}