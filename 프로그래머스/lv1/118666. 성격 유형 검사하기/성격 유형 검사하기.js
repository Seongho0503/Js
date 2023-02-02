function solution(survey, choices) {
    // 선택지 점수
    const scoreByChoice = [-3, -2, -1, 0, 1, 2, 3];
    // 획득점수
    let scores = {'RT': 0, 'CF': 0, 'JM': 0, 'AN': 0};

    // 성격 유형별 점수 계산
    survey.forEach((type, idx) => {
        const choice = choices[idx] - 1; // 인덱스가 0부터 시작이라 -1
        const order = type.charAt(0) < type.charAt(1); // 성격유형이 true 정순, false 역순
        const key = order ? type : type.charAt(1) + type.charAt(0);
        const value = order ? scoreByChoice[choice] 
                            : [...scoreByChoice].reverse()[choice];
        scores[key] += value;
    });

    // 결과 도출, 각 성격유형별 획득점수가 음수이면 앞문자 양수이면 뒷문자
    const answer = Object.entries(scores).reduce((acc, pair) => {
        const type = pair[1] > 0 ? pair[0].charAt(1) : pair[0].charAt(0);
        return acc + type;
    }, '');

    return answer;
}