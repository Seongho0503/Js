function solution(k, d) {
    var answer = 0;
    const arr = new Array(1,000,000).fill(0).map(() => new Array(1,000,000).fill(0));
    //const arr = new Array(1,000,000).fill(new Array(1,000,000)).fill(false);
    //const getVisited = (row, col) => Array.from(Array(row), () => Array(col).fill(false));
    function dfs(x,y) {
      let kx = k * x;
      let ky = k * y;
      if(d**2 <  kx**2 + ky**2 || arr[kx][ky] === true) return
      else if(ky===kx) {
          console.log("1 "+kx + " " +ky)
          answer++;
      }else { 
        console.log(kx + " " +ky)
        answer+=2;  
      }
     arr[kx][ky] = true;
     dfs(x+1, y);
     dfs(x+1, y+1);   
    }
    // x, y 좌표
    dfs(0,0);            
    return answer;
}