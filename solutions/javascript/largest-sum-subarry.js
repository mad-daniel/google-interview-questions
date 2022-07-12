let findMaxSumSubArray = function(array_) {
  if (array_.length < 1) {
    return 0;
  }

  let currMax = array_[0];
  let globalMax = array_[0];
  let lengtharray = array_.length;
  for (let i = 1; i < lengtharray; i++) {
    if (currMax < 0) {
      currMax = array_[i];
    } else {
      currMax += array_[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
};

v = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
console.log("Sum of largest subarray: " + findMaxSumSubArray(v));
