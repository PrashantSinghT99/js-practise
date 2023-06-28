var characterReplacement = function (s, k) {
    let map = new Map();
    let i = 0;
    let max = 0;
    let max_len = 0;
    for (let j = 0; j < s.length; j++) {
        map[s.charAt(j)] = (map[s.charAt(j)] || 0) + 1
        max = Math.max(max, map[s.charAt(j)])

        while (j - i + 1 - max > k) {
            map[s.charAt(i)]--;
            i++;
        }
        max_len = Math.max(max_len, j - i + 1);
    }
    return max_len;
}

console.log(characterReplacement("ABAB", 2))