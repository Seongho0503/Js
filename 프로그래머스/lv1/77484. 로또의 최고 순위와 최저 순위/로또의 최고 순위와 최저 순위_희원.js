function solution(lottos, win_nums) {
    const results = lottos.reduce(([max, min], lotto) => {
        // 해당 숫자가 0이면 무조건 max에 +1
        if (lotto === 0) return [++max, min];
        
        // 해당 숫자가 0이 아니고 로또 번호이면 max, min 둘다 +1
        if (win_nums.includes(lotto)) return [++max, ++min];
        
        // 모두 아니면 그냥 리턴
        return [max, min];
    }, [0, 0])
    // 순위 정하기
    const answer = results.map((correct) => {
        // 2미만의 번호가 일치했을 때, 6등
        if (correct < 2) return 6;
        return 7 - correct;
    });
    return answer;
}
