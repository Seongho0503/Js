import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
	static int[] cache;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int[] memory = new int[n + 1];
		int[] cost = new int[n + 1];
		int size = 0;
		
		// 메모리 파싱
		st = new StringTokenizer(br.readLine());
		for (int i = 1; i < memory.length; i++)
			memory[i] = Integer.parseInt(st.nextToken());
		// 비용 파싱
		st = new StringTokenizer(br.readLine());
		for (int i = 1; i < cost.length; i++) {
			cost[i] = Integer.parseInt(st.nextToken());
			size += cost[i];
		}

		// 해당 cost로 이용할 수 있는 최대 메모리를 계산하는 dp 배열
		cache = new int[size + 1];
		
		// i 번째 앱까지 탐색했을 때 j 비용으로 // cashe는 메모리 값
		for (int i = 0; i < cost.length; i++)
			for (int j = size; j >= cost[i]; j--)
				//j 만큼의 비용으로 확보할 수 있는 최대 메모리를 계산
				// cache[j] : j 비용 써서 확보한 메모리 (현재 i 번째 앱을 킨 경우)
				// cache[j - cost[i]] + memory[i] : i번째 앱 비활성화
				cache[j] = Math.max(cache[j], cache[j - cost[i]] + memory[i]);

		// cost 중에 처음으로 m이상의 최대 메모리를 갖는 코스트를 출력
		for (int i = 0; i < cache.length; i++)
			if (cache[i] >= m) {
				System.out.println(i);
				break;
			}
	}
}