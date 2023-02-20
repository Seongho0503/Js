function solution(record) {
    let result = [];  // ["Enter" || "Leave", id] 
    let names = {};   // id와 이름을 저장할 객체
    
    record.forEach(r => {
        const [action, id, name] = r.split(" ");
        if (action !== "Leave") names[id] = name; // id와 이름 저장 or 수정
        if (action !== "Change") result.push([action, id]); // action 저장
    })
    
    return result.map(r => names[r[1]] + (r[0] === "Enter" ?  "님이 들어왔습니다." : "님이 나갔습니다."));
}
