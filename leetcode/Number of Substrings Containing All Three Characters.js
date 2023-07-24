var numberOfSubstrings = function (s) {
    let l = 0;
    let map = {
        "a": 1,
        "b": 1,
        "c": 1
    }
    let subwindowMap = {};
    let count = 0;
    let r = 0;
    while (r < s.length) {
        if (!subwindowMap[s.charAt(r)]) {
            subwindowMap[s.charAt(r)] = 1;
        }
        else {
            subwindowMap[s.charAt(r)] = (subwindowMap[s.charAt(r)] || 0) + 1
        }

        r++
    }

    return subwindowMap;


};


console.log(numberOfSubstrings("abcabc"));