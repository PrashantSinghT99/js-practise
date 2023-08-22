function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
        
    }
    return s.substring(left + 1, right);
}
function longestPalindrome(s) {
    if (s.length === 0) {
        return "";
    }
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        // For odd length palindromes
        let palindrome1 = expandAroundCenter(s, i, i);
        if (palindrome1.length > longest.length) {
            longest = palindrome1;
        }
        // For even length palindromes
        let palindrome2 = expandAroundCenter(s, i, i + 1);
        if (palindrome2.length > longest.length) {
            longest = palindrome2;
        }
    }  
    return longest;
}




console.log(longestPalindrome("babad"));