var maxDepth = function (s) {

    let stack = [];
    let len = s.length;
    let max=0;
    for (let i = 0; i < len; i++) {
        if(s[i]==="(")
        {
            stack.unshift(s[i])
            max=Math.max(max,stack.length);
        }
        else if(s[i]===")")
        {
            stack.shift();
        }
    }
return max;

};

console.log(maxDepth("(1)+((2))+(((3)))"));