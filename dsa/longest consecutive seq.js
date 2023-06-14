var longestConsecutive = function (nums) {
    if(nums.length===0) return 0;
    nums.sort((a, b) => a - b);
    console.log(nums);
    let count = 1;
    let max = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] + 1)===nums[i + 1]) {
          count++;
            max = Math.max(max, count);
        }

        else if (nums[i] === nums[i + 1]) {
            continue;

        }
        else {
            count = 1;
        }
    }

    return max;
}


console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
