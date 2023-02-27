function solution(cacheSize, cities) {
    const [CACHE_HIT, CACHE_MISS] = [1, 5];
    
    // cashSize가 0이면 무조건 CASH_MISS
    if (cacheSize === 0) return cities.length * CACHE_MISS;
    
    // 모두 소문자로 바꾸기
    cities = cities.map(city => city.toLowerCase());
    
    const [answer, _] = cities.reduce(([time, stack], city) => {
        const idx = stack.indexOf(city);
        // 해당 도시가 없다면 CASH_MISS
        if (idx === -1) {
            time += CACHE_MISS;
            // stack size를 초과할 경우 첫번째 값을 지운다
            if (stack.length === cacheSize) stack.shift();
            stack.push(city);
            
        } else { // 해당 도시가 존재한다면 해당 도시를 마지막에 넣어준다.
            time += CACHE_HIT;
            stack.splice(idx, 1)
            stack.push(city);
        }
        
        return [time, stack]
    }, [0, []])
    return answer;
}
