class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let left = 0;                    
    let maxf = 0;                    
    let maxLength = 0;              
    const count = {};               

    for (let right = 0; right < s.length; right++) { 
        const char = s[right];                        
        count[char] = (count[char] || 0) + 1;         
        maxf = Math.max(maxf, count[char]);           

        while ((right - left + 1) - maxf > k) {       
            count[s[left]] -= 1;                      
            left++;                                   
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;                 
}   
}
