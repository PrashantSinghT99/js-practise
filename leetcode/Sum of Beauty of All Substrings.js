var beautySum = function (s) {
    let totalSum = 0;

    for (let i = 0; i < s.length; i++) {
        const charCount = new Array(26).fill(0); // Assuming only lowercase English letters

        for (let j = i; j < s.length; j++) {
            const charIndex = s.charCodeAt(j) - 'a'.charCodeAt(0);
            charCount[charIndex]++;

            let maxCount = 0;
            let minCount = Number.MAX_SAFE_INTEGER;

            for (let k = 0; k < 26; k++) {
                if (charCount[k] > 0) {
                    maxCount = Math.max(maxCount, charCount[k]);
                    minCount = Math.min(minCount, charCount[k]);
                }
            }

            totalSum += maxCount - minCount;
        }
    }

    return totalSum;
};