const lookup = {
  1 : ['1'],
  2 : ['a','b','c'],
  3 : ['d', 'e', 'f'],
  4 : ['g','h','i'],
  5 : ['j','k','l'],
  6 : ['m','n','o'],
  7 : ['p', 'q', 'r', 's'],
  8 : ['t', 'u', 'v'],
  9 : ['w','x', 'y', 'z'],
  0 : ['0']
}
function letterCombinations(input_digit) {
  //Complete the function
  if(input_digit.length === 0){
    return[]
  }
  let result = [];

  function recur(str, digit){
    if(digit.length === 0){
      result.push(str);
      return result;
    }

      const letterArr = lookup[digit[0]];

      letterArr.forEach(letter => {
        recur(str + letter, digit.slice(1))
      });
  }
  
  recur('', input_digit);
  return result.sort();
}

// console.log(letterCombinations("999"))

module.exports = letterCombinations;
