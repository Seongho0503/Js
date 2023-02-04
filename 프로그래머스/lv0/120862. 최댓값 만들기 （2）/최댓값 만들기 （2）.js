function solution(numbers) {
    var max = -100000000;
    numbers.map ((num1,idx1) => {        
        numbers.map ((num2, idx2) => {
        if(idx1!=idx2)
        max = Math.max(num1*num2, max);
    })
})
    return max;
}