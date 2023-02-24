function solution(s) {
  const answer = [];
  let result = "";

  if (s.length === 1) {
    return 1;
  }
  // 문자열 길이의 반
  let half = parseInt(s.length / 2) + 1;
  for (let i = 1; i < half; i++) {
    let count = 1;
    //1개부터 i개까지 문자를 분리해서 나눔
    let tmpStr = s.slice(0, i);
    for (let j = i; j < s.length; j += i) {
      //tmpStr과 같으면 count += 1
      if (tmpStr === s.slice(j, j + i)) {
        count += 1;
      } else {
        //1은 삭제
        if (count === 1) {
          count = "";
        }
        // 문자열 합치기
        result = result.concat(count + tmpStr);
        // 다음 문자로 이동
        tmpStr = s.slice(j, j + i);
        //count 초기화
        count = 1;
      }
    }
    //제일 마지막 문자는 반복문을 빠져나오므로 한번 더 로직 작성
    if (count === 1) {
      count = "";
    }
    result = result.concat(count + tmpStr);
    //문자열 길이를 answer 배열에 추가
    answer.push(result.length);
    result = "";
  }
  //answer 배열의 최솟값
  return Math.min.apply(null, answer);
}
