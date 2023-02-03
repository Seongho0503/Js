import sys
input = sys.stdin.readline
N, M = map(int, input().split())
byte = [0] + list(map(int, input().split()))
cost = [0] + list(map(int, input().split()))
dp = [[0 for _ in range(sum(cost)+1)] for _ in range(N+1)]
result = sum(cost) #열의 최댓값


for i in range(1, N+1):
    b= byte[i]
    c = cost[i]
    
    for j in range(1, sum(cost) + 1):
        if j < c: #현재 앱을 비활성화할만큼의 cost가 충분하지 않을 경우
            dp[i][j] = dp[i-1][j]
        else:
        	#같은 cost 내에서 현재 앱을 끈 뒤의 byte와 현재 앱을 끄지 않은 뒤의 byte를 비교
            dp[i][j] = max(b + dp[i-1][j-c], dp[i-1][j])
            
        if dp[i][j] >= M: #조건이 충족된다면
            result = min(result, j) #더 작은 cost값으로 갱신

if M != 0:
    print(result)
else:
    print(0)