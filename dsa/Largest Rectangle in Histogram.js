//Brute force
// var largestRectangleArea = function(heights) {
//     let n=heights.length;
//     let maxArea=-Infinity;
//     for(let i=0;i<n;i++)
//     {
//         let min=heights[i];
//         for(let j=i;j<n;j++)
//         {
//            min=Math.min(min,heights[j])
//            let area=min*(j-i+1)
//            maxArea=Math.max(maxArea,area)
//         }
//     }
//     return maxArea;
// };

var largestRectangleArea = function (heights) {
    const n = heights.length;
    const leftSmaller = new Array(n);
    const rightSmaller = new Array(n);
    const stack = [];
    // Fill leftSmaller array
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && heights[stack[0]] >= heights[i]) {
        stack.shift();
      }
      leftSmaller[i] = stack.length === 0 ? -1 : stack[0];
      stack.unshift(i);
    }
    // Clear the stack for the next traversal
    stack.length = 0;
    // Fill rightSmaller array
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && heights[stack[0]] >= heights[i]) {
        stack.shift();
      }
      rightSmaller[i] = stack.length === 0 ? 0 : stack[0];
      stack.unshift(i);
    }
    // Calculate the maximum area
    console.log(leftSmaller);
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
      const width = rightSmaller[i] - leftSmaller[i] - 1;
      const area = heights[i] * width;
      maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3]));