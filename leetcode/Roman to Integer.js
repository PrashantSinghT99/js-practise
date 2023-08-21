var romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    s = s.split('')
    console.log(s);
    let num = 0;
    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] >= map[s[i + 1]] || i === s.length - 1) {
            num += map[s[i]];
        }

        else if (map[s[i]] < map[s[i + 1]]) {
            let val = map[s[i + 1]] - map[s[i]];
            i++
            num += val
        }
    }
    return num
}
console.log(romanToInt("CMXCVIII"));

// LVIII
// 50 +5+3=58  ascending +

/**
 * MCMXCIV
 * 1000+ 100-1000+10-100-1-5     100+900+90+4 1994
 *
 */

// const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    // const numeralValues = [1, 5, 10, 50, 100, 500, 1000];