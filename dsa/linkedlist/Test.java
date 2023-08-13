import java.util.Arrays;

class Test {
    public void merge(int[] nums1, int m, int[] nums2, int n) {   
        int i = m - 1; // Start index of nums1
        int j = n - 1; // Start index of nums2
        int k = m + n - 1; // Start index of merged array

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }

        // If there are remaining elements in nums2
        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    public static void main(String[] args) {
        Test obj = new Test();
        int[] nums1 = {1, 2, 3, 0, 0, 0};
        int[] nums2 = {2, 5, 6};
        obj.merge(nums1, 3, nums2, 3);
        System.out.println(Arrays.toString(nums1));
    }
}