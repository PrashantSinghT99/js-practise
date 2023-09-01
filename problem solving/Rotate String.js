var rotateString = function (s, goal) {
    let newStr=s+s;
    if(newStr.includes(goal))
    {
        return true;
    }
    else
    {
        return false;
    }
};

console.log(rotateString("abcde", "cdeab"));

// abcdeabcde   cdeab