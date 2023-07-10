var letterCombinations = function (digits) {
    keyboard = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

for(let i=0;i<digits.length;i++)
{
    if(keyboard[digits[i]])
    {
        for(let j=0;j<keyboard[digits[i]].length;j++)
    {
        console.log(keyboard[digits[i]].charAt(j));
    }
    }

}


};

console.log(letterCombinations("23"));