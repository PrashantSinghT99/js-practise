var frequencySort = function (s) {
    let charMap = {};
    let str = "";
    for (let i = 0; i < s.length; i++) {
        charMap[s.charAt(i)] = (charMap[s.charAt(i)] || 0) + 1
    }
    const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);
    for (let i = 0; i < sortedArr.length; i++) {
        str += sortedArr[i].repeat(charMap[sortedArr[i]])
    }
    return str;
};

console.log(frequencySort("tree"));