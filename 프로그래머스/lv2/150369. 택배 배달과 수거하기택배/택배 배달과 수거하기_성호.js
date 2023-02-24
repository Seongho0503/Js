function solution(cap, n, deliveries, pickups) {
    var answer = 0;
// dir은 (dilivery) 택배 수, pick은 회수해야 할 박스 수
    let dir = 0;
    let pick = 0;

// 0. 집을 방문할 거리가 최소가 되려면 먼 곳부터 방문한다.
    for( let i=n-1; i>=0; i--){
// 1. 가장 먼 곳 집부터 가져갈 택배나 수거할 박스가 있으면 빼준다.
        dir -= deliveries[i]
        pick -= pickups[i]
        let cnt = 0;
// 2. 음수가 하나라도 있으면 택배나 박스가 있으므로 트럭 수용량(cap)을 더하면서 cnt를 센다
            while(dir<0 || pick<0){
                dir += cap;
                pick += cap;
                cnt++;
            }
// i를 해당 집과 택배사의 거리, *2를 해야하는 이유는 집을 방문 할 때와 돌아 올 때
            answer += (i+1) *2 *cnt;
    }
    return answer;
}
