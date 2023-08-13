var letterCombinations = function(digits) {
    let keyboard = {
       "2": "abc",
       "3": "def",
       "4": "ghi",
       "5": "jkl",
       "6": "mno",
       "7": "pqrs",
       "8": "tuv",
       "9": "wxyz"
   };
   if (digits === '') {
       return [];
   }
   let res = [];
   let comb = [];
   let size = digits.length;
   let start = 0;
   backtrack(res, comb, size, digits, start,keyboard);
   return res;
};
function backtrack(res, comb, size, digits, start,keyboard) {
   if (comb.length === size) {
       res.push(comb.join(''));
       return;
   }
   for (let c of keyboard[digits[start]]) {
       comb.push(c);
       start++;
       backtrack(res, comb, size, digits, start,keyboard);
       start--;
       comb.pop();
   }
}