class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let strLen = s.length;
        let maxChar = 0
        let left = 0 
        let set = new Set()
        for(let right = 0; right < strLen; right++ ){
            while(set.has(s.charAt(right))){
                set.delete(s.charAt(left))
                left++;
            }
            set.add(s.charAt(right))
            maxChar = Math.max(maxChar, right - left + 1)
        }
        return maxChar
    }
}
