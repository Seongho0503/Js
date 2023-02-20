// function Queue() {
//     this.data = []
// }
// Queue.prototype.pushBack = function (v) { this.data.push(v) };
// Queue.prototype.pushFront = function (v) { this.data.unshift(v) };
// Queue.prototype.popFront = function () { return this.data.shift() || null };
// Queue.prototype.size = function () { return this.data.length}


// function bfs(N) {
//     const queue = new Queue();
//     queue.pushBack([1, 1])
    
//     while (queue.size() > 0) {
//         const [v, cost] = queue.popFront();
        
//         // 도착
//         if (v === N) return cost;
        
//         if (v > N) continue;
        
//         queue.pushBack([v+1, cost + 1]);
//         queue.pushFront([v*2, cost]);
//     }
    
// }



// function bfs(N) {
//     const cost = new Array(N+1).fill(0);
//     const queue = [1];
//     cost[1] = 1;
    
//     while (queue.length > 0) {
//         const v = queue.shift();
        
//         // 도착
//         if (v === N) return cost[v];
        
//         // 순간 이동
//         if (v*2 <= N && cost[v*2] === 0) {
//             queue.unshift(v*2);
//             cost[v*2] = cost[v];
//         }
//         // 한 칸 뒤로 이동
//         if (v+1 <= N && cost[v+1] === 0) {
//             queue.push(v+1);
//             cost[v+1] = cost[v] + 1;
//         }
//     }
// }

// function solution(n)
// {
//     return bfs(n);
// }

// 이진법으로 변환후 1의 개수가 이동하는 횟수이고 0의 개수가 순간이동하는 횟수이다.
function solution(n)
{
    return n.toString(2).split("1").length -1;
}
