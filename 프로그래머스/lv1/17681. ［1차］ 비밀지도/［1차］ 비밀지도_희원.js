function getBinaryNum(n, k) {
  const num = n.toString(2);
  return "0".repeat(k - num.length) + num;
}

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const num1 = getBinaryNum(arr1[i], n);
    const num2 = getBinaryNum(arr2[i], n);
    let line = "";

    for (let j = 0; j < n; j++) {
      line += num1[j] === 1 || num2[j] === 1 ? "#" : " ";
    }
    answer.push(line);
  }

  return answer;
}
