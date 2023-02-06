// 배낭문제 방식으로 풀어보았는데.. 메모리 초과 에러 뜸..
// function solution(d, budget) {
//     // 행은 각 부서, 열은 예산, 들어갈 숫자는 최대 개수
//     const M = d.length + 1;
//     const N = budget + 1;
    
//     const matrix = Array.from(Array(M), () => new Array(N).fill(0)); // M * N 배열 생성, 초깃값 0

//     for (let row = 1; row < M; row++) {
//         const d_budget = d[row-1];
//         for (let col = 1; col < N; col++) {
//             // 만약 현재 예산으로 해당 부서를 지원할 수 없다면 이전 부서까지 고려했을 때의 지원 부서 수 받아오기
//             // 해당 부서를 지원할 수 있다면 현재 부서를 지원했을 때 지원할 수 있는 지원부서 수와 
//             // 이전 부서까지만 고려했을 때의 지원 부서 수와 비교해서 갱신하기.
//             matrix[row][col] = matrix[row-1][col];
            
//             if (col >= d_budget) {
//                 matrix[row][col] = Math.max(matrix[row][col], matrix[row-1][col-d_budget] + 1);
//             } 
//         }
//     }
//     return Math.max(...matrix[M-1]);
// }

// 재귀 방식: 시간 초과
// function solution(d, budget) {
//     let answer = 0;
//     function recursion(i, N, total, cnt) {
//         // 예산 초과시 리턴
//         if (total > budget) {
//             return;
//         }
//         answer = Math.max(answer, cnt)
//         if (total === budget) {
//             return;
//         }
        
//         if (i === N) {
//             return;
//         }
        
//         // 현재 부서를 포함 or 안포함
//         recursion(i+1, N, total+d[i], cnt+1);
//         recursion(i+1, N, total, cnt);
//     }
    
//     recursion(0, d.length, 0, 0);
//     return answer;
// }

function solution(d, budget) {
    // 순서대로 정렬한 후, 예산이 넘지 않을 때까지만 담는다.
    d.sort((a, b) => {
        return parseInt(a) - parseInt(b);
    })
    
    let total = 0;
    let answer = 0;
    for (let i = 0; i < d.length; i++){
        if (total + d[i] > budget) break;
        total += d[i];
        answer++;
    }
    return answer;
}
