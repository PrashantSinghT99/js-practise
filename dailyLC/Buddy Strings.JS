var buddyStrings = function (s, goal) {
    let set = new Set();
    if (s === goal) {
        for (let i = 0; i < s.length; i++) {
            set.add(s.charAt(i));

        }

        return s.size < goal.length;
    }
    let i = 0;
    let j = s.length - 1;

    while (i < j && s.charAt(i) === goal.charAt(i)) {
        i++;
    }
    while (j >= 0 && s.charAt(j) === goal.charAt(j)) {
        j++;
    }
    if (i < j) {
        let res = s.split("");
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
        str = res.join("");
    }
    return str === goal

};

console.log(buddyStrings("ab", "ba"));
