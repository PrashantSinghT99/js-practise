var longestCommonPrefix = function (strs) {
    let ans = "";
    for (let i = 0; i < strs[0].length; i++) {
        ch = strs[0][i];
        let match = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].length < i || ch !== strs[j][i]) {
                match = false;
                break;
            }

        }
        if (match === false) break;
        else ans = ans + ch
    }
    return ans;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]))