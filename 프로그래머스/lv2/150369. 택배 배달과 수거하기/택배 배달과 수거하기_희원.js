function solution(cap, n, deliveries, pickups) {
    // 가장 먼곳부터 배달을 해주고 수거를 하는 형태,
    // 수거할 곳 중 제일 먼 곳, 배달할 곳 중 제일 먼 곳 찾기.
    let endPickup = n-1;
    let endDelivery = n-1;
    let totalDistance = 0;
    
    // 배달할 곳 중 제일 먼 곳 찾기
    while (endDelivery > -1 && deliveries[endDelivery] === 0) endDelivery--;

    // 수거할 곳 중 제일 먼 곳 찾기
    while (endPickup > -1 && pickups[endPickup] === 0) endPickup--;
    
    // 남은 배달 or 수거가 있는 경우
    while (endPickup > -1 || endDelivery > -1) {
        // 현재 위치는 항상 물류 센터에서 시작.
        let box = cap;
        
        // 결국 거리는 배달과 수거 중 먼 곳의 *2만큼 이동.
        totalDistance += endPickup > endDelivery ? (endPickup + 1) * 2 : (endDelivery + 1) * 2;
        
        // 배달할 곳이 있다면 가는 길에 배달부터 하기
        // 채울 수 있는 만큼 채웠다고 가정했을 때, 가장 멀리서부터 순서대로 배달하기
        // 남은 박스가 있을 때, 배달하기
        while (endDelivery > -1 && box > 0) {
            if (deliveries[endDelivery] > box) {
                deliveries[endDelivery] -= box;
                box = 0;
            } else {
                box -= deliveries[endDelivery];
                deliveries[endDelivery] = 0;
                while (endDelivery > -1 && deliveries[endDelivery] === 0) endDelivery--;
            }
        }
        
        // 수거할 박스 최대로 초기화.
        box = cap;
        
        // 수거할 곳이 있다면 오는 길에 수거하기(배달과 동일한 메커니즘.)
        while (endPickup > -1 && box > 0) {
            if (pickups[endPickup] > box) {
                pickups[endPickup] -= box;
                box = 0;
            } else {
                box -= pickups[endPickup];
                pickups[endPickup] = 0;
                while (endPickup > -1 && pickups[endPickup] === 0) endPickup--;
            }
        }
        
    }
    
    return totalDistance;
}
