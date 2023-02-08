function solution(board, moves) {
  var answer = 0;
  let basket = [];

  // move 횟수 만큼 for문을 돌리면서 보드에서 인형 찾기
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 해당 move의 인형이 없다면 다음 보드 행으로
      if (board[j][moves[i] - 1] === 0) continue;
      // 해당 move의 인형을 가져옴
      let doll = board[j][moves[i] - 1];
      // 뽑은 인형 자리 공백 처리
      board[j][moves[i] - 1] = 0;
      // 바구니의 마지막 인덱스의(마지막에 넣은 ) 인형과 지금 뽑은 인형이 같다면
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
        break;
      }
      // 현재 인형 넣기
      basket.push(doll);
      // 인형 뽑았으니 다음 move 이동
      break;
    }
  }
  return answer;
}
