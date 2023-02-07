function solution(board, moves) {
    const N = board.length;
    let stack = []; // 인형이 쌓일 바구니
    
    const answer = moves.reduce((acc, col) => {
        // 인형이 있는지 체크
        for (let row = 0; row < N; row++) {
            const doll = board[row][col-1];
            // 만약 인형이 있을 때
            if (doll !== 0) {
                // 인형을 뽑는다
                board[row][col-1] = 0;
                
                // 바구니에 인형이 있고 인형이 바구니에 쌓인 마지막 인형과 동일하다면 
                // 바구니의 마지막 인형만 제거하고 제거된 인형의 수를 2 늘린다.
                if (stack.length > 0 && doll === stack[stack.length -1]) {
                    stack.pop();
                    return acc + 2;
                }
                // 바구니에 인형이 없거나 마지막 인형과 동일하지 않다면 인형을 바구니에 넣는다.
                stack.push(doll);
                break;
            }
        }
        // 해당 라인에 인형이 없다면 다음으로 뽑기로 넘어가기
        return acc;
    }, 0)
    return answer;
}
