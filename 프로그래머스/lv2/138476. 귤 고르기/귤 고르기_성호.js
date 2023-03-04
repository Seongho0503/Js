function solution(k, tangerine) {
    const obj = {}
    // 입력받은 귤배열을 객체의 키 값으로 삼는다
    tangerine.forEach((a, i) => obj[a] ? obj[a]++ : obj[a] = 1);
    // value 값 담을 배열
    const arr = Object.values(obj);
    // 오름차순 정렬
    arr.sort((a, b) => b - a);
    // 귤의 개수
    let num = 0;
    // 서로 다른 종류의 수의 최솟 값
    let answer = 0;

    for (let x of arr) {
        num += x;
        answer++;
        if (num >= k) return answer;
    }

}
