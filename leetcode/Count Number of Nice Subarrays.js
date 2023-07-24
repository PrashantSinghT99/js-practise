var numberOfSubarrays = function (nums, k) {
    let countOdd = 0;
    let l = 0;
    let niceSubarray = 0;
    let r = 0;

    while (r < nums.length) {
        if (nums[r] % 2 !== 0) {
            countOdd++;
        }

        while (countOdd > k) {

            if (nums[l] % 2 !== 0) {
                countOdd--;
            }
            l--;
        }
        if (countOdd === k) {
            niceSubarray++;
        }
        r++
    }
    return niceSubarray;
};


console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2));