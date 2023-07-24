import java.util.HashMap;
import java.util.Map;
public class Solution {

    public static int kDistinctChars(int k, String str) {
		// Write your code here
	    int left = 0;
        int max = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int right = 0; right < str.length(); right++) {
            char rightChar = str.charAt(right);
            map.put(rightChar, map.getOrDefault(rightChar, 0) + 1);
            while (map.size() > k) {
                char leftChar = str.charAt(left);
                map.put(leftChar, map.get(leftChar) - 1);
                if (map.get(leftChar) == 0) {
                    map.remove(leftChar);
                }
                left++;
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
        }
    
    }