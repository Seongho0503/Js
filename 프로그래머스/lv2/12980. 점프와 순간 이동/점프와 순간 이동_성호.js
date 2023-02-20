function solution(n) {
  var ans = 0;

  // N 칸까지 건전지 사용량을 최소화하기 위해
  // 최대한 많은 순간이동을 사용하고, 점프를 최소화
  while (n > 0) {
    // 홀수면 점프
    if (n % 2 === 1) {
      ans += 1;
    }
    // 짝수면 순간이동
    n = Math.floor(n / 2);
  }

  return ans;
}
