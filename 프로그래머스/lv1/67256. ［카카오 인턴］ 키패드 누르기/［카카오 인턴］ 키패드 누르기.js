function distance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
function solution(numbers, hand) {
    let curPosition = [[3, 0], [3, 2]] // 왼손 오른손의 현재 위치
    return numbers.map((num) => {
        // 다음 손의 위치(0번을 제외하고 동일하게 구함)
        const nextPosition = num === 0 ? [3, 1] : [parseInt((num-1)/3), (num-1)%3];
        switch(num) {
            // 1, 4, 7번 버튼
            case 1: case 4: case 7:
                curPosition[0] = nextPosition;
                return "L";
            // 3, 6, 9번 버튼
            case 3: case 6: case 9:
                curPosition[1] = nextPosition;
                return "R"
            // 2, 5, 8, 0번 버튼
            default:
                const dL = distance(curPosition[0], nextPosition); // 왼손과의 거리
                const dR = distance(curPosition[1], nextPosition); // 오른손과의 거리
                
                if (dL < dR) { // 왼손이 더 가깝다면
                    curPosition[0] = nextPosition;
                    return "L"   
                } else if (dL > dR) { // 오른손이 가깝다면
                    curPosition[1] = nextPosition;
                    return "R" 
                } else { // 거리가 같다면
                    if (hand === "left"){
                        curPosition[0] = nextPosition;
                        return "L" 
                    } else {
                        curPosition[1] = nextPosition;
                        return "R" 
                    }
                }  
        }
    }).join("")
}