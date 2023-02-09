function solution(s) {
  let removeZero = 0;
  let count = 0;
  // s가 "1" 이 될 때까지 s에 이진 변환
  while (s.length !== 1) {
    // 원본 길이
    const strLen = s.length;
    // 1일 때만 join에서 반환
    s = s
      .split("")
      .filter((i) => i === "1")
      .join("");
    // 0을 없앤 길이
    const len = s.length;
    // 0의 개수
    removeZero += strLen - len;
    s = len.toString(2);
    // 이진 변환 횟수
    count++;
  }
  return [count, removeZero];
}
