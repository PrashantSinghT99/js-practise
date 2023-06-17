var dailyTemperatures = function (temperatures) {
    let stack = [];
    let res =Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[0]]) {
            let prevDay = stack.shift();
            res[prevDay] = i - prevDay
        }
        stack.unshift(i);

    }
    return res;

};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// class Solution {

//     public int[] dailyTemperatures(int[] temperatures) {
//         int[] ans = new int[temperatures.length];
//         Stack<Integer> stack = new Stack<>();
//         for (int currDay = 0; currDay < temperatures.length; currDay++) {
//             while (
//                 !stack.isEmpty() &&
//                 temperatures[currDay] > temperatures[stack.peek()]
//             ) {
//                 int prevDay = stack.pop();
//                 ans[prevDay] = currDay - prevDay;
//             }
//             stack.add(currDay);
//         }
//         return ans;
//     }
// }
