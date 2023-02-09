function solution(s)
{
    let sentence = new Array(s.length);
    let last = -1;
    for (let i = 0; i<s.length; i++) {
        if (sentence[last] === s[i]) {  // 들어오는 글자와 마지막 글자가 같다면
            sentence[last] = null;      // 마지막 글자를 지운다
            last -= 1;                  // 마지막 글자의 인덱스를 -1
        } else {                        // 들어오는 글자가 마지막 글자와 다르다면
            last += 1;                  // 마지막 글자의 인덱스를 +1
            sentence[last] = s[i];      // 마지막 글자를 저장한다.
        }
    }
    return last === -1 ? 1 : 0;
}
