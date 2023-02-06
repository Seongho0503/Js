function solution(n) {
    var three = n.toString(3); // 3진수 변환
    var str = three.split("").reverse().join(""); // 문자열 뒤집기
    var num = BigInt(str); // 문자를 숫자로
    return parseInt(num,3)
}