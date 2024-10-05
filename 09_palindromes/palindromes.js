const palindromes = function (string) {

  let validLetters = "abcdefghijklmnopqrstuvwxyz1234567890";

  let newString = string.toLowerCase().split("").filter((letter) => validLetters.includes(letter)).join("");
  let palindromeString = newString.split("").reverse().join("");
  return palindromeString === newString ? true : false;
};
console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
