// class Solution {

//     public int lengthOfLongestSubstring(String s) {
//         ArrayList < Character > list= new ArrayList < Character > ();
//   int maxLen = 0;
//         for (int i = 0; i < s.length(); i++)
//         {
//             if (list.contains(s.charAt(i))) {
//           int index = list.indexOf(s.charAt(i));
//                 list.remove(index);

//                 if (index > 0) {
//                     list.subList(0, index).clear();
//                 }

//             }
//             list.add(s.charAt(i));
//             maxLen = Math.max(maxLen, list.size());
//         }

//         return maxLen;

//     }
// }





// let myMap = new Map();
// myMap.set("name", "John");
// myMap.set("age", 30);

// console.log(myMap);

// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(3);

// console.log(mySet);


const longSubs = (s) => {
    const set = new Set();
    let start = 0;
    let end = 0;
    let max = 0;
    while (end < s.length) {
        if (!set.has(s[end])) {

            set.add(s[end]);
            end++;
            max = Math.max(max, set.size)
        }
        else {
            set.delete(s[start]);
            start++;
        }
    }
    return max;


}

console.log(longSubs("pwwkew"));