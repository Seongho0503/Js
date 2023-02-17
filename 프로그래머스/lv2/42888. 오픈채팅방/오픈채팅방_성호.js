function solution(record) {
    let result = [];
    // 채팅방을 출입하는 유저의 아이디를 차례로 저장할 배열
    let resultId = [];
    // 유저의 아이디: 닉네임 쌍을 저장할 Map
    let idNameMap = new Map();
  
    // record의 각 문자열을 띄어쓰기 단위로 나눠 배열로 변환
    record = record.map((e) => e.split(" "));
  
    record.forEach((e) => {
      // 각 요소의 첫 번째 요소(Enter/Leave/Change)가
      switch (e[0]) {
        case "Enter":
          // 유저의 아이디 저장
          resultId.push(e[1]);
          // 닉네임을 제외 표시될 메시지 저장
          result.push("님이 들어왔습니다.");
          // idNameMap Map에 유저의 아이디: 닉네임 쌍 저장
          idNameMap.set(e[1], e[2]);
          break;
        case "Leave":
          // 유저의 아이디 저장
          resultId.push(e[1]);
          // 닉네임 제외 메시지 저장
          result.push("님이 나갔습니다.");
          break;
        case "Change":
          // idNameMap Map에 유저의 아이디에 해당하는 닉네임 변경
          idNameMap.set(e[1], e[2]);
          break;
      }
    });
  
    // 닉네임을 idNameMap에서 찾아서 result의 각 요소와 이어붙인 값 배열 반환
    return result.map((e, i) => idNameMap.get(resultId[i]) + e);
  }