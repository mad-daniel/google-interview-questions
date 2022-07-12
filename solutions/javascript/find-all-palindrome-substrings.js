let findAllPalindromeInSubstrings = function(input, j, k) {
  let count = 0;
  while (j >= 0 && k < input.length) {
    if (input[j] != input[k]) {
      break;
    }
    console.log(input.substring(j, k + 1));
    count++;
    j--;
    k++;
  }
  return count;
};

let findAllPalindromeSubstrings = function(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count += findAllPalindromeInSubstrings(input, i - 1, i + 1);
    count += findAllPalindromeInSubstrings(input, i, i + 1);
  }
  return count;
};


let palindrome = "aabbbaa";

let palindrome_count = findAllPalindromeSubstrings(palindrome);
console.log("Total palindrome substrings: ", palindrome_count);
