function solution(s) {
    let round = 0;              // 변환횟수
    let total = 0;              // 총 사라진 0의 개수
    let s_len = s.length;       // 문자열의 길이

    while (s !== "1") {
        s = s.replaceAll("0", "");      // 0 제거 후, 그 길이를 이진수로 바꾼다.
        total += (s_len - s.length);    // 제거된 0의 개수를 더해준다.
        s = s.length.toString(2);       // s의 길이를 2진수로 변환한다.
        s_len = s.length;               // s의 길이를 저장한다.
        round++;                        // round ++
    }
        
    return [round, total];
}
