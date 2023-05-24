// function anagram(str1, str2) {
//     let arr = new Array(str1.length).fill(false);
//     if (str1.length === str2.length) {
//         for (let i = 0; i < str1.length; i++) {
//             if (str2.indexOf(str1.charAt(i)) > -1) {
//                 arr[i] = true;
//             }
//         }
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === false) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// const anagram = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     else {
//         let counter = {};

//         for (let ele of str1) {
//             counter[ele] = (counter[ele] || 0) + 1;
//         }

//         for (let item of str2) {
//             if (!counter[item]) {
//                 return false;
//             }
//             counter[item] -= 1;
//         }
//         return true;
//     }

// }

// console.time();
// console.log(anagram("aacc", "ccac"));
// console.timeEnd();



// anagram

// const anagram = (o, d) => {
//     //  return  [...original]
//     if(o.length!==d.length)
//     {
//         return false;
//     }
//     const result = {};

//     for (let i = 0; i < o.length; i++) {
//         result[o.charAt(i)] = (result[o.charAt(i)] || 0) + 1;
//     }

//     for (let i = 0; i < d.length; i++) {
//         if (!result[d.charAt(i)]) {
//             return false;
//         }
//         result[d.charAt(i)] -= 1;
//     }
// return true;

// }

// console.log(anagram("anagram", "gramana"));


var isAnagram = function(s, t) {
    if(s.length!==t.length)
{
    return false;
}
const obj1 = {};
const obj2 = {};

for (let i = 0; i < s.length; i++) {
    obj1[s.charAt(i)] = (obj1[s.charAt(i)] || 0) + 1;
    obj2[s.charAt(i)] = (obj2[s.charAt(i)] || 0) + 1;
}

for(const key in obj1)
{
    if(obj1(key)!==obj2(key))
    {
        return false;
    }
    else return true;
}


   
};