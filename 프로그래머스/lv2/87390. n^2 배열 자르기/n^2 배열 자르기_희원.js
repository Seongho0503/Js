function solution(n, left, right) {
    const answer = [];
    // n*n 행렬에서 mat[i][j]에 들어있는 숫자는 max(i, j) + 1이 들어있다.
    // n*n 행렬을 1차원 배열로 펼쳤을 때, mat[i][j]는 1차원 배열의 n*i + j번째로 들어가게 된다.
    // 이를 이용하여 풀면, left에서 right 까지의 인덱스 중 하나를 k라 했을 때,
    // 1차원 배열의 k번째 들어가 있는 수를 구하기 위해, k=n*i+j를 만족하는 i와 j를 찾으면
    // i = k//n, j = k%n 이라고 정의할 수 있고, k번째 칸에 들어있는 수는 max(i, j) + 1이다.
    for (let num = left; num < right+1; num++) {
        const i = parseInt(num / n);
        const j = num % n;
        answer.push(Math.max(i, j) +1);
    }
    return answer;
}
