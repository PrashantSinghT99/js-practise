var wordBreak = function(s, wordDict) {
    return backtrack(s, wordDict, new Map());
};
function backtrack(s, wordDict, memo) {
    if (memo.has(s)) {
        return memo.get(s);
    }
    if (s === "") {
        return true;
    }
    for (let word of wordDict) {
        if (s.startsWith(word)) {
            const remaining = s.slice(word.length);
            if(remaining)console.log(remaining);
            else console.log("no remaining");
            if (backtrack(remaining, wordDict, memo)) {
                memo.set(s, true);
                console.log(memo);
                return true;
            }
        }
    }
    memo.set(s, false);
    return false;
}


console.log(wordBreak("applepenapple",["apple","pen"]));