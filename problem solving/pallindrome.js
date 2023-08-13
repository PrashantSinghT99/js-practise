// const pallindrome = (str) => {
//     newStr = str.split("");
//     len = newStr.length;
//     let str2 = "";
//     for (let i = len - 1; i >= 0; i--) {
//         str2 += str[i];
//     }
//     console.log(str2);
//     if (str2 === str) {
//         return true;
//     }
//     else return false;
// }

const pallindrome = (str) => {
    newStr = str.toLowerCase();
    let left = 0;
    let right = str.length - 1
    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false;
        }
        else {
            left++;
            right--;
        }
    }
    return true;
}
console.log(pallindrome("radar"))