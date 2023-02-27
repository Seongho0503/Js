function solution(users, emoticons) {
  const k = emoticons.length;
  // 할인률
  const discount = [0.1, 0.2, 0.3, 0.4];
  // 할인된 케이스의 모음
  let discountCases = [];
  let answerArray = [];
  // depth 이모티콘별 할인율 적용 값
  const DFS = (arr, depth) => {
    // 이모티콘 개수만큼 도달하면 할인된 케이스에 넣고 dfs 종료 (더 할인할 이모티콘 개수 부족)
    if (depth == k) {
      discountCases.push(arr);
      return;
    }
    for (let i = 0; i < discount.length; i++) {
      // console.log([...arr, discount[i]]) 밑에 참고
      // 이모티콘 별 할인율을 배열에 담아 dfs돌린다.
      DFS([...arr, discount[i]], depth + 1);
    }
  };
  DFS([], 0); // discountCases 획득 완료

  discountCases.forEach((currDiscount) => {
    let plusUsers = 0; // 이모티콘 플러스 구매자
    let profit = 0; // 이모티콘 매출액
    // currdiscount = [0.1,0.2,0.3,0.4]
    users.forEach(([leastPercent, maxPrice], userID) => {
      let spend = 0;
      emoticons.forEach((product, index) => {
        if (currDiscount[index] >= leastPercent * 0.01) {
          // 할인율이 유저기준에 미치면 구매
          spend += product * (1 - currDiscount[index]);
        }
      });
      if (spend >= maxPrice)
        plusUsers++; // 구매비용이 자기 기준금액보다 넘어가면 플러스 가입처리
      else profit += spend; // 구매비용이 낮으면 수익으로 처리
    });
    answerArray.push([plusUsers, profit]);
  });
  answerArray.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });
  return answerArray.pop();
}

// 테스트 1 경우
//DFS([...arr, discount[i]], depth + 1);
// 	[ 0.1 ]
// [ 0.1, 0.1 ]
// [ 0.1, 0.2 ]
// [ 0.1, 0.3 ]
// [ 0.1, 0.4 ]
// [ 0.2 ]
// [ 0.2, 0.1 ]
// [ 0.2, 0.2 ]
// [ 0.2, 0.3 ]
// [ 0.2, 0.4 ]
// [ 0.3 ]
// [ 0.3, 0.1 ]
// [ 0.3, 0.2 ]
// [ 0.3, 0.3 ]
// [ 0.3, 0.4 ]
// [ 0.4 ]
// [ 0.4, 0.1 ]
// [ 0.4, 0.2 ]
// [ 0.4, 0.3 ]
// [ 0.4, 0.4 ]
