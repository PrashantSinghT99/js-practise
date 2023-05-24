// function anagram(str) {
//     let arr = new Array(26).fill(false);
//     // console.log(arr);
//     let index;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "Z")
//             index = str.charCodeAt(i) - "A".charCodeAt(0);
//         else if (str[i] >= "a" && str[i] <= "z")
//             index = str.charCodeAt(i) - "a".charCodeAt(0);
//         else continue;
//         arr[index] = true;
//     }

//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] === false) {
//             return false;
//         }

//     }
//     return true;
// }

// console.log(anagram("The quick brown fox jumps over the lazy dog"));


const anagram = (str) => {
    let arr = new Array(26).fill(false);


    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            index = str.charCodeAt(i) - "A".charCodeAt(0);
        }
        else if (str[i] >= "a" && str[i] <= "z") {
            index = str.charCodeAt(i) - "a".charCodeAt(0);
        }
        else
            continue;

        arr[index] = true;

    }


    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === false) {
            return false;
        }

    }
    return true;

}


console.log(anagram("The quick brown fox jumps over the lazy dog"));

