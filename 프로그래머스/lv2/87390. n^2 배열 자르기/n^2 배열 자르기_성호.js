function solution(n, left, right) {
  let answer = [];
 // 2차원 배열 nxn을 1차원 배열로 바꾼다면
 // **[y,...,x]**로 나타낼 수 있다 
 // **은 사이드 필요 없는 원소 
  //Math.floor() : 소수점 이하를 버림한다.
  let y = Math.floor(left / n);
  let x = left % n;

  for (let i = 0; i <= right - left; i++) {
    // 좌표 (r, c)에 들어갈 숫자는 max(x, y) + 1이 됩니다.
    answer.push(Math.max(x, y) + 1);
    if (x + 1 < n) {
      x++;-  // 열 하나씩 오른쪽 이동
    } else {
      y++; // 행 바꿈
      x = 0;
    }
  }
  return answer;
}

//(x축 혹은 y축 중에 큰 값 + 1) 이 그 value
// 1 (0, 0)	    2 (0, 1)	3 (0, 2)	4 (0, 3)
// 2(1, 0)  	2(1, 1)	    3(1, 2)	    4(1, 3)
// 2(2, 0)	    3(2, 1)	    3(2, 2)	    4(2, 3)
// 4(3, 0)	    4(3, 1)	    4(3, 2)	    4(3, 3)