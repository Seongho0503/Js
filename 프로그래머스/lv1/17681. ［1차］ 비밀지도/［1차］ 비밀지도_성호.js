// 코드 리뷰 수정ver

function solution(n, arr1, arr2) {
    var answer = [];
    arr1.map((id1, idx1)=>{
              var str1 = id1.toString(2).padStart(n, '0');
              var str2 = arr2[idx1].toString(2).padStart(n, '0');
              str = "";
              for(var i = 0; i<n; i++){
                if(str1.charAt(i) + str2.charAt(i) ==="00") str += " ";
                else str += "#"; 
              }
              answer[idx1] =str;
        })
    return answer;
}



function solution(n, arr1, arr2) {
    var answer = [];
    arr1.map((id1, idx1)=>{
        arr2.map((id2, idx2)=>{{
            if(idx1 === idx2){
              var str1 = id1.toString(2).padStart(n, '0');
              var str2 = id2.toString(2).padStart(n, '0');
              str = "";
              for(var i = 0; i<n; i++){
                if(str1.charAt(i) + str2.charAt(i) ==="00") str += " ";
                else str += "#"; 
              }
              answer[idx2] =str;
            }
        }})
    })
    
    return answer;
}

// 둘중 하나라도 벽 => 벽
// 모두 공백 => 공백

// function solution(n, arr1, arr2) {
//     var answer = [];
//     // const zeroFilter = (st1, st2) =>{
//     //     str1 = st1.padStart(5, '0');
//     //     str2 = st2.padStart(5, '0');
//     //     //for(let i = 0; i <n-st.length; i++) st.charAt(i) 
//     // }
//     arr1.map((id1, idx1)=>{
//         arr2.map((id2, idx2)=>{{
//             if(idx1 === idx2){
//               var str1 = id1.toString(2).padStart(5, '0');
//               var str2 = id2.toString(2).padStart(5, '0');
//               //zeroFilter(str1, str2);
//               str = "";
//               for(var i = 0; i<n; i++){
//                 if(str1.charAt(i) + str2.charAt(i) ==="00") str += " ";
//                 else str += "#"; 
//               }
//               answer[idx2] =str;
//             }
//         }})
//     })
    
//     return answer;
// }
