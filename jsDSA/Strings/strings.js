// const pallindrome = (num) => {
//     let n = num
//     let sum = 0;
//     while (num > 0) {
//         let r = num % 10;
//         sum = (sum * 10 )+ r
//         num = Math.floor(num / 10)

//     }
//     if (n===sum) {
//         return true
//     } else return false

// }

// console.log(pallindrome(74494477));
var hammingDistance = function (x, y) {
    x = x.toString(2)
    y = y.toString(2)
    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = "0" + x;
        }

    }
    else {
        while (x.length !== y.length) {
            y = "0" + y;
        }
    }
    let dist = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            dist++;
        }

    }
    return dist;
};

console.log(hammingDistance(2, 9)); 