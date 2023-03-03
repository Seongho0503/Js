
function solution(s) {
    function check(p){
        const stack = [];   // 열린 괄호를 넣을 스택
        let count = 0;      // 올바른 괄호 문자열의 개수
        
        // 각각의 괄호를 스택에 넣을건지 뺄건지 확인
        for (let i = 0; i < p.length; i++) {
            const cur = p[i];
            
            // 새로운 올바른 괄호 문자열의 시작.
            if (stack.length === 0) {
                count++;
            }
            // (, {, [ 인 경우 그냥 stack에 넣는다.
            if ( cur === "(" || cur === "[" || cur === "{") {
                stack.push(cur);
                continue;
            }
            // }, ], ) 인 경우, 그와 맞는 열린 괄호를 찾아야 한다.
            if (stack.length === 0) return 0; // 만약 들어있는 괄호가 없다면 return 0
            const asciiTop = stack.pop().charCodeAt(0); // stack 제일 상단에 있는 문자의 아스키 코드
            const asciiCur = cur.charCodeAt(0);
            // 두 괄호(열린괄호, 닫힌 괄호)의 아스키 코드의 차이는 1이나 2일 수 밖에 없다.
            const diff = asciiCur - asciiTop;
            if (diff !== 1 && diff !== 2) return 0; // 짝이 안맞다면 return 0
        }
        
        // 아직 스택에 남아있는 괄호가 있다면
        if (stack.length > 0) return 0;
        return count;
    }
    
    // 현재 문자열을 돌려 올바른 문자열로 바꿀 수 있다면,
    // 해당 문자열이 올바른 괄호 문자열 몇개로 쪼개지는가가 결국 답이 된다.
    // 그렇게 쪼개지는 부분까지 회전시켜야 하기 때문이다.
    // 예를 들어 []()라 한다면 [] / () 이렇게 두개의 부분으로 나뉠 수 있고,
    // 이는 결국 [](), ()[] 이 경우에만 올바른 괄호 문자열이 되기 때문이다.
    let answer = 0;
    for (let k = 0; k < s.length; k++) {
        s = s.slice(1) + s.slice(0, 1);
        answer = check(s);
        if (answer > 0) return answer;
    }
    return 0;
}
