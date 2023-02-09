function solution(s) {
  let answer = 1;
  let str = [];
  for (let i = 0; i < s.length; i++) {
    // 지금 인덱스의 문자열 값과 배열에 넣은 인덱스-1(이전 값)과 비교한다
    if (str[str.length - 1] === s[i]) str.pop();
    else str.push(s[i]);
  }
  // 배열의 길이가 0이면 중복 문자를 다 없앤거다.
  return str.length === 0 ? answer : answer - 1;
}
