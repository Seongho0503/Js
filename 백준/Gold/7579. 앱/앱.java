import java.util.*;

public class Main {
	static int[] cache;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int m = sc.nextInt();
		int[] memory = new int[n + 1];
		int[] cost = new int[n + 1];
		int size = 0;

		for (int i = 1; i < memory.length; i++)
			memory[i] = sc.nextInt();

		for (int i = 1; i < cost.length; i++) {
			cost[i] = sc.nextInt();
			size += cost[i];
		}

		// 해당 코스트로 이용할 수 있는 최대 메모리를 계산하는 메모이제이션 배열
		cache = new int[size + 1];

		for (int i = 0; i < cost.length; i++)
			for (int j = size; j >= cost[i]; j--)
				cache[j] = Math.max(cache[j], cache[j - cost[i]] + memory[i]);

		// 코스트 중에 처음으로 m이상의 최대 메모리를 갖는 코스트를 출력
		for (int i = 0; i < cache.length; i++)
			if (cache[i] >= m) {
				System.out.println(i);
				break;
			}
	}
}