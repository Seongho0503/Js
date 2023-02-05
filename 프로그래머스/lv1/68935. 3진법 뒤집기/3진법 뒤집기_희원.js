function solution(n) {
    // 제일 첫번째 숫자부터 3^0, 3^1, 3^2, ...를 곱하면서 더해준다. 
    const num3 = [...n.toString(3)].reduce((acc, cur, curidx) => {
        return acc + cur * 3 ** curidx;
    }, 0)
    return num3;
}
