var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }
    const values1 = Object.values(obj1);
    const values2 = Object.values(obj2);
    console.log(JSON.stringify(values1)); 
    
    //=== JSON.stringify(values2);
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));

