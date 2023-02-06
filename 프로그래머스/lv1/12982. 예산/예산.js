function solution(d, budget) {
    let result = 0
    let i = 0;
     var arr = d.sort((a, b) => {
        return a-b;
    })

    while(result<=budget) {
        result += arr[i];
        i++;
    }

    return i-1;
}





// function solution(d, budget) {
//     var answer = 0;
//     var sum = 0;
//     var arr = d.sort((a, b) => {
//         return a-b;
//     })
//     arr.map((it, idx) => {
//         sum = 0;
//         for(let i = idx; i< d.length; i++){
//              sum += arr[i]; 
//             if(sum > budget) break;
//             if(sum === budget) answer = Math.max (i-idx+1, answer);
//         }
//     })
//     return answer;
// }




// function solution(d, budget) {
//     var answer = 0;
//     var sum = 0;
//     d.map((it, idx) => {
//         sum = it;
//         var i = idx;
//         while(sum < budget && i<d.lnegth ){   //&& i<d.lnegth
//                 i++;
//                 sum += d[i]; 
//         }
//          if (sum === budget) {
//              answer = Math.max (i-idx+1, answer);
//          }
//     })
//     return answer;
// }