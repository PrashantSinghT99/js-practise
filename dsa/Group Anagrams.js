var groupAnagrams = function (strs) {
    let element = [];
    let map = {};
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        element[i] = strs[i].split("").sort().join("");
    }
    // for (let i = 0; i < element.length; i++) {
    //     map[element[i]] = [];
    // }
    for (let i = 0; i < strs.length; i++) {

        if (map[element[i]]) {
            map[element[i]].push(strs[i])
        }
        else{
            map[element[i]] = [];
        }
    }
    return Object.values(map);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
