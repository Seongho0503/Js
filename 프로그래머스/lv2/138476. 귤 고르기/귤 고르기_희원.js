function solution(k, tangerine) {
    const count = []; // 각 숫자의 개수를 담을 리스트
    tangerine.sort((x, y) => x-y); // 오름차순 정렬
    
    // 각각의 종류가 몇 개인지 세기
    let pre = -1;
    tangerine.map((cur) => {
        if (cur === pre) count[count.length-1] += 1;
        else {
            count.push(1);
            pre = cur;
        }
    })
    // 내림차순 정렬
    count.sort((x, y) => y-x);
    
    // 개수가 많은 종류부터 먼저 제외
    let answer = 0;
    for (let i = 0; i < count.length; i++) {
        if (k <= 0) break;
        answer += 1;
        k -= count[i];
    }
    
    return answer;
}
