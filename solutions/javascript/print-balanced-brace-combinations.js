let printAllBracesRec = function(n, leftCount, rightCount, output, result) {

  if (leftCount >= n && rightCount >= n) {
    result.push(output.slice());
  }

  if (leftCount < n) {
    output.push('{');
    printAllBracesRec(n, leftCount + 1, rightCount, output, result);
    output.pop();
  }
  if (rightCount < leftCount) {
    output.push('}');
    printAllBracesRec(n, leftCount, rightCount + 1, output, result);
    output.pop();
  }
};

let printAllBraces = function(n) {
  let output = [];
  let result = [];
  printAllBracesRec(n, 0, 0, output, result);
  return result;
};

let output = printAllBraces(3);
console.log(output)
