var longestPalindrome = function (s) {
    let l = 0;
    let r = 0;
    let max = 0;
    while (l !== s.length) {
        for (let l = 0; l < s.length; l++) {
            if (s.substring(l, r) === s.substring(l, r).split('').reverse().join('')) {
                let len = (r- l + 1);
                max = Math.max(max, len);
            }
            else {
                r++;
            }
        
        }
        l++;
    }
return max;
};


console.log(longestPalindrome("babad"));