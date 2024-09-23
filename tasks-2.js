function countDigits(arr) {
    return arr.map(num => num.toString().length);
  }
  
  console.log(countDigits([1223, 45, 6]));


////////////////////////////////////////////////////


function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  console.log(reverseArray([1, 2, 3]));


////////////////////////////////////////////////////

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i];
    }
    return sum;
  }
  
  console.log(sumOfSquares([1, 2, 3]))


///////////////////////////////////////////////////

function countTotalCharacters(arr) {
    let totalChars = 0;
    for (let i = 0; i < arr.length; i++) {
      totalChars += arr[i].length;
    }
    return totalChars;
  }
  
  console.log(countTotalCharacters(["a", "ab", "asdasdasddasbc"]))


////////////////////////////////////////////////////

function findPalindromes(arr) {
    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      if (word === word.split('').reverse().join('')) {
        palindromes.push(word);
      }
    }
    return palindromes;
  }
  
  console.log(findPalindromes(['jojo', 'giga', 'ana', 'dudu', 'ada']))