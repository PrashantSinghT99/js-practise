var largestRectangleArea = function (heights) {
    let stack = [];
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        let heightStart = i;
        while (stack.length && stack[0][1] > heights[i]) {
                let [pos, height] = stack.pop();
                res = Math.max(res, (i - pos) * height);
                heightStart = pos; 
            }
        stack.unshift([heightStart, heights[i]]);
    }
    return res;
}

console.log(largestRectangleArea([1, 2, 5, 6, 2, 3]));