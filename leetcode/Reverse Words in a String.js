var reverseWords = function (s) {
    let str = s.split(" ")
    console.log(str);
    s = ""
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != "") {
            s += str[i] + " "
            console.log(s);
        }
    }
    return s.trim()
};

console.log(reverseWords("  hello world  "));