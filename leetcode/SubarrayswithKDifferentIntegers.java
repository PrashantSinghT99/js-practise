import java.util.HashSet;
public class SubarrayswithKDifferentIntegers {
     public static int countGoodSubarrays(int[] nums, int k) {
        int n = nums.length;
        int goodSubarrays = 0;

        for (int i = 0; i < n; i++) {
            HashSet<Integer> uniqueElements = new HashSet<>();
            System.out.println("declare"+uniqueElements);
            for (int j = i; j < n; j++) {
                uniqueElements.add(nums[j]);
                  System.out.println(uniqueElements);
                if (uniqueElements.size() == k) {
                    goodSubarrays++;        
                }
            }
        }

        return goodSubarrays;
    }

    public static void main(String[] args) {
        int[] nums = {1,2,1,2,3};
        int k = 2;
        int result = countGoodSubarrays(nums, k);
        System.out.println("Number of good subarrays: " + result); // Output: Number of good subarrays: 3
    }
}
