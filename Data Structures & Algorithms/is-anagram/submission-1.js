class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLen = s.length;
        const tLen = t.length;

        // If lengths differ, they can't be anagrams
        if (sLen !== tLen) {
            return false;
        }

        // Frequency map to count characters
        const charCount = {};

        // Increment for characters in s, decrement for characters in t
        for (let i = 0; i < sLen; i++) {
            const charS = s[i];
            const charT = t[i];

            charCount[charS] = (charCount[charS] || 0) + 1;
            charCount[charT] = (charCount[charT] || 0) - 1;
        }

        // If all counts are zero, strings are anagrams
        for (const key in charCount) {
            if (charCount[key] !== 0) {
                return false;
            }
        }

        return true;
    }
}   