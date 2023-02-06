function solution(a, b) {
    return a.reduce((acc, cur, curIdx) => acc + cur * b[curIdx], 0);
}
