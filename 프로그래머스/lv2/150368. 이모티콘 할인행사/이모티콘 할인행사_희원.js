function dfs(i, emoticons, total, users, maxResult) {
    if (i === emoticons.length) {
        // 할인율대로 가격을 계산.
        const payment = users.reduce(([plusUser, totalPayment], [userPer, userPayment]) => {
            const realPayment = emoticons.reduce((acc, cur, idx) => {
                const emoPer = total[idx] * 10;
                // 할인율이 더 높거나 같을 경우에만 이모티콘 구매
                if (emoPer >= userPer) return acc + cur * (100 - emoPer)/100;
                return acc;
            }, 0);
            if (realPayment >= userPayment) return [plusUser + 1, totalPayment];
            return [plusUser, totalPayment + realPayment];
        }, [0, 0]);
        if (payment[0] > maxResult[0] 
            || (payment[0] === maxResult[0] && payment[1] > maxResult[1])) return payment;
        return maxResult;
    }
    
    for (let p = 1; p < 5; p++) {
        total[i] = p;
        maxResult = dfs(i+1, emoticons, total, users, maxResult);
    }
    return maxResult;
}
    

function solution(users, emoticons) {
    let answer = [];
    // 각 이모티콘을 10~40까지 할인해보고
    // 각각의 사용자가 구매하는 지 여부를 확인
    answer = dfs(0, emoticons, new Array(emoticons.length), users,  [0, 0])
    
    return answer;
}
