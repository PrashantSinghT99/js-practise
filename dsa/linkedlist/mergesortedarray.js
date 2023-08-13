
var merge = function (nums1, m, nums2, n) {
    let l = m - 1;
    let r = 0;
    while (l >= 0 && r < n) {
        if (nums1[l] > nums2[r]) {
            let temp = nums1[l];
            nums1[l] = nums2[r];
            nums2[r] = temp;
            l--;
            r++;
        } else {
            break;
        }
    }
    nums1 = nums1.filter(num => num !== 0);
    nums2 = nums2.filter(num => num !== 0);
    nums1.sort();
    nums2.sort();
    nums1 = [...nums1, ...nums2];
    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));