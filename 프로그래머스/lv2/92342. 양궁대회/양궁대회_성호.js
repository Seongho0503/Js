function solution(n, info) {
  const result = {
    gap: 0,
    answer: [-1],
  };

  const dfs = (n, index, stack) => {
    //활을 다 쐈을 경우
    //이제 넘겨받은 라이언과 어피치의 스코어보드(state, info)를 바탕으로 비교를 함
    if (n === 0) {
      const state = Array.from(stack);
      const scores = checkScore(state, info); //라이언과 어피치
      //console.log(scores)
      //scores에는 [라이언 총 스코어, 어피치 총 스코어]

      if (scores[0] > scores[1] && scores[0] - scores[1] >= result.gap) {
        //라이언 점수가 더 크고 그 둘의 차가 result.gap보다 크거나 같은 경우
        //이건 더 효율적인 것이므로 라이언의 점수배열을 바꿔야 한다

        // (result.gap은 직전에 계산한 라이언 점수배열을 바탕으로 구한
        // 어피치와 라이언의 점수차를 가지고 있다)

        //그 둘의 차가 result.gap보다 같은경우와 작은 경우를 나눠서 로직 수행
        if (scores[0] - scores[1] > result.gap) {
          //그 둘의 차가 result.gap보다 큰 경우
          result.gap = scores[0] - scores[1];
          result.answer = state;
          //그러면 이게 정답이 되는 것이고
        } else {
          //그 둘의 차가 result.gap과 같은 경우
          const [pre, current] = checkLevel(result.answer, state);
          result.answer = pre >= current ? result.answer : state;
          //인덱스 값을 바탕으로 따로 구하는 것 같은데
          //이 문제에서 인덱스가 높으면 보다 더 낮은 점수를 의미한다
          //checkLevel의 리턴값에서 더 큰 값이 효율적이므로
          //그걸로 바꿔줌
        }
      }
    }

    if (n > 0) {
      for (let idx = index; idx < info.length; idx++) {
        const state = n - (info[idx] + 1) >= 0 ? info[idx] + 1 : n;
        //n-어피치화살 +1 한 값이 0이상이면 아직 쏘는게 가능한 것
        //그래서 어피치화살 +1 을 사용(라이언이 점수 가져감)하고
        // (어차피 이게 남은 화살 수)

        //0보다 작으면 그만큼 화살을 못 쏨
        //그래서 그 부분은 그대로 화살 갯수 n으로 둠
        //n으로 남겨둔 이유가 저렇게 해야 어차피 재귀에서  n-state가 0이 되어서
        //어차피 재귀가 바로 끝나고 다음 코드에서 0으로 처리가 됨

        //여기서 stack이 라이언 배열
        //각 인덱스에다가 화살 수를 넣어준다
        stack[idx] = state;
        dfs(n - state, idx + 1, stack);

        //stack[0] = 0

        //for문때문에 그 다음에는 마찬가지로 n=5 , idx는1인 것부터 시작

        //idx 2부터 다시 시작
        //남은 화살 갯수 , 라이언 배열의 다음 인덱스, 라이언 배열

        stack[idx] = 0;

        //화살이 남아있다면 재귀를 호출해서 남은 구간까지 전부 다 모든 경우의 수를 두고
        //탐색을 하는 것이다

        //이렇게 하면 모든 경우를 전부 탐색하게 된다
      }
    }
  };

  dfs(n, 0, new Array(11).fill(0));

  return result.answer;

  function checkScore(ryan, ape) {
    return ryan.reduce(
      (result, score, idx) => {
        //누적값, 값, 인덱스
        if (score !== 0 || ape[idx] !== 0) {
          //현재 라이언의 값, 같은 인덱스의 어피치 값
          //둘 다 0이 아닐 경우
          score <= ape[idx] ? (result[1] += 10 - idx) : (result[0] += 10 - idx);
          //점수가 같거나 어피치가 더 크면 result[1] 즉, 어피치한테 점수가 감
        }
        return result; //[라이언 총 스코어, 어피치 총 스코어]
      },
      [0, 0] //누적값인데 초기값을 0,0형태의 배열로 줌
    );
  }

  //기존 값, 현재
  function checkLevel(arrA, arrB) {
    //console.log(arrA, arrB)
    const pre = arrA.reduce((t, c, idx) => t + c * (10 * idx), 0);
    const current = arrB.reduce((t, c, idx) => t + c * (10 * idx), 0);
    //console.log([pre, current])
    return [pre, current];
  }
}
