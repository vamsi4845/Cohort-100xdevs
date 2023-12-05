/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 1) {
    return true
  }
  const reverse = str.replace(/[\W_]/g, '').toLowerCase().split("").reverse().join("")
  str = str.replace(/[\W_]/g, '').toLowerCase().split("").join("")
  return reverse === str;
}
module.exports = isPalindrome;