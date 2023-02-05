function solution(n) {
    var answer = 0;
    
    const num3 = [...n.toString(3)].reduce((acc, cur, curidx) => {
        return acc + cur * 3 ** curidx;
    }, 0)
    return num3;
}