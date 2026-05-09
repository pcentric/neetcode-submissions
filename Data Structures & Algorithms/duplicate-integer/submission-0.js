class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        for(let i = 0; i < nums.length; i++){
            const numberSplit = nums[i]
            const currentNumber = nums.indexOf(numberSplit)
            const lastNumber = nums.lastIndexOf(numberSplit)
            // const nextValue = nums[currentNumber + 1] 
             if (currentNumber !== lastNumber) {
            return true; // Found a duplicate
              }
            
        }
        return false
    }
}
