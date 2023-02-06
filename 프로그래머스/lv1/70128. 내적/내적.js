function solution(a, b) {
    var sum = 0;
    a.map((a, idx1) => {
            sum = sum + (a * b[idx1]);
        })
    return sum;
}


// function solution(a, b) {
//     var sum = 0;
//     a.map((a, idx1) => {
//         b.map((b, idx2)=>{
//             if(idx1===idx2) sum = sum + (a * b);
//         })
//     })
//     return sum;
// }