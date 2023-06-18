function encode(strs) {
    let newstr = '';
    for (let i = 0; i < strs.length; i++) {
        newstr = newstr + strs[i].length + '#' + strs[i];
    }
    return newstr;
}
function Decode(strs) {
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        if (!isNaN(strs.charAt(i))) {
            if (strs.charAt(i + 1) === "#") {
                arr.push(strs.substring(i + 2, i + 2 + Number(strs[i])))
            }
        }
    }
    return arr;

}
console.log(encode(["lint", "code", "love", "you"]));
console.log(Decode("4#lint4#code4#love3#you"));

//4#lint4#code4#love3#you