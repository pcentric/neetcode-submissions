class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const numsLen = nums.length 
        const finalArray = []

        for(let i = 0; i < numsLen; i++){
            for(let j = i +1; j < numsLen; j++){
                if(nums[i] + nums[j] === target){
                    finalArray.push(i,j)
                }
            }

        }
        return finalArray
    }
}
