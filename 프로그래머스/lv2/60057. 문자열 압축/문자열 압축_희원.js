function solution(s) {
    let minLen = s.length; // 최소 길이를 담을 변수
    
    // 길이가 1에서부터 s.length/2까지 되도록 압축해보기
    for (let i = 1; i <= parseInt(s.length/2); i++) {
        
        // 먼저 길이대로 문자열 분리
        let splitedS = [];
        for (let j = 0; j <= parseInt((s.length-1)/i); j++) {
            splitedS.push(s.slice(j*i, (j+1)*i));
        }
        splitedS.push(""); // 이후 연산을 쉽게 해주기 위해 넣음
        
        // 압축된 길이를 구한다.
        const compressedSLen = splitedS.reduce(([acc, pre, cnt], cur) => {
            // 이전 문자열과 현재 문자열이 같다면 cnt를 +1
            if (pre === cur) return [acc, pre, ++cnt];
            
            // 다르다면 이전 문자열을 acc에 합치고 cnt를 0으로 바꾼 뒤, pre를 cur로 갱신 
            return [acc + (cnt >= 2 ? cnt : "") + pre, cur, 1];
        }, ["", "", 0])[0].length;
        
        // 최소 길이 갱신
        minLen = minLen > compressedSLen ? compressedSLen : minLen; 
    }

    return minLen;
}
