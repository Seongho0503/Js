function solution(lottos, win_nums) {
  // 2개 번호가 일치 했을 때 부터 5등이다
  // 일치하는 번호가 0개이거나 1개이면 6순위이다.
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let random = 0;
  let correct = 0;
  for (let i = 0; i < lottos.length; i++) {
    // 지워진 번호가 0이면
    if (lottos[i] === 0) random += 1;
    // 로토 번호는 중복되지 않아서 include 사용 (내 번호가 로토 번호에 있으면)
    if (win_nums.includes(lottos[i])) correct += 1;
  }
  // 최고 순위는 내 번호에서 0이 다 맞는 경우, 최저 순위는 0을 제외하고 내 번호 중 로또 번호랑 맞는 경우
  return [rank[correct + random], rank[correct]];
}
