var productExceptSelf = function (nums) {
    let prefix = 1;
    let postfix = 1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {  
        result[i] = prefix;
        prefix = prefix * nums[i]
    }
    for (let i = nums.length - 1; i >=0; i--) {
        result[i] = result[i]*postfix;
        postfix = postfix * nums[i]
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));