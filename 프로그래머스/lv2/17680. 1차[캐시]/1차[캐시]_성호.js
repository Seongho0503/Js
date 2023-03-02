function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    let check = false;
    //모두 소문자로 바꾸기
    for(let i=0; i<cities.length; i++){
        cities[i]=cities[i].toLowerCase();
    }
    cache.push(cities[0]);
    answer+=5;
    for(let i=1; i<cities.length; i++){
        check = false;
        for(let j=0; j<cacheSize; j++){
            //주어진 도시가 캐시에 있다면 그대로 두고 +1
            if(cache[j] === cities[i]){
                //나중에 들어간것 으로 맨 뒤에 넣기
                cache.splice(j,1);
                cache.push(cities[i]);
                answer+=1;
                check = true;
                break;
            }
        }
        //주어진 도시가 캐시에 없다면 넣고 +5
        if(check === false){
            //캐시 자리가 남았으면 그냥 넣기
            if(cache.length < cacheSize){
                cache.push(cities[i]);
            }else{//캐시가 꽉 찼다면 처음꺼 오랜된거 빼고 넣기
                cache.shift();
                cache.push(cities[i]);
            }
            answer+=5;
        }
    }
    return answer;
}