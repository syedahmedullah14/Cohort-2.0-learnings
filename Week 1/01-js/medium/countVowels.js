/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const cleanStr1= str1.replace(/\s/g,'').toLowerCase();
    const cleanStr2= str2.replace(/\s/g,'').toLowerCase();

    const sortedstr1 = cleanStr1.split('').sort().join('');
    const sortedstr2 = cleanStr2.split('').sort().join('');
}

module.exports = countVowels;