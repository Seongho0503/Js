function solution(n, info) {
    // 어피치가 얻은 점수라면 해당 점수를 얻었을 때 *2
    // 어피치가 얻지 못한 점수라면 그 점수 그대로
    // [점수를 얻을 수 있을 때의 화살의 수, 해당 점수를 얻었을 때 이득]
    const scores = info.map((Aarrow, i) => [Aarrow + 1, (10-i) * (Aarrow > 0 ? 2 : 1)])
    const dpMat = new Array(n+1).fill(0).map(() => new Array(11).fill(0)); // 해당 점수를 딸 경우 1, 못 딸 경우 0
    const scoreMat = new Array(n+1).fill(0); // 점수를 저장할 Mat
    
    
    // 배낭 문제처럼 해결
    for (let i = 0; i < 11; i++) {
        const [arrow, score] = scores[i]; // 필요한 화살의 수와 그 과녁을 맞췄을 때 얻을 수 있는 점수
        const prescoreMat = [...scoreMat];
        const preDpMat = JSON.parse(JSON.stringify(dpMat));
        for (let maxArrow = 0; maxArrow < n+1; maxArrow++) {
            // 가지고 있는 화살로는 해당 점수를 얻을 수 없을 경우, continue
            if (arrow > maxArrow) continue
            
            // 가지고 있는 화살로 해당 점수를 얻을 수 있는 경우,
            // 해당 점수를 얻었을 때 더 높은 점수를 얻을 수 있는지 체크
            const curScore = score + prescoreMat[maxArrow - arrow];
            if (curScore >= prescoreMat[maxArrow]) {
                // 만약 더 높거나 같은 점수를 얻을 수 있다면 현재 점수판에 화살을 쏜다.
                // 1. 점수 교체
                scoreMat[maxArrow] = curScore;
                
                // 2. 쏜 과녁 교체
                const newDp = [...preDpMat[maxArrow - arrow]];
                newDp[i] = 1; // 현재 과녁에 쏜다
                dpMat[maxArrow] = newDp;
            }
        }
    }
    
    // lion의 점수판 갱신
    let apeachScore = info.reduce((acc, shot, idx) => acc +  (shot > 0 ? (10-idx) : 0), 0);
    let lionScore = scoreMat[n];
    
    // 만약 어피치의 점수를 넘지 못한다면,
    if (lionScore <= apeachScore) return [-1];
    
    const maxScoreShot = [...dpMat[dpMat.length -1]];
    const lionScoreShot = maxScoreShot.map((shot, idx) => shot > 0 ? scores[idx][0] : 0);
    const totalShot = lionScoreShot.reduce((acc, shot) => acc + (shot > 0 ? shot : 0), 0);
    
    // 만약 남은 화살이 있다면 0번에 남은 화살을 쏜다.
    if (totalShot < n) lionScoreShot[10] += n - totalShot;
    
    return lionScoreShot;
}
