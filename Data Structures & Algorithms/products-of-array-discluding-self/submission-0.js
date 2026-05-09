class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);
        console.log(res, "<===1 console ")
        for(let i = 0; i < n; i++){
            console.log(i, "<===2 console ")
            let prod = 1;
            console.log(prod, "<===3 console ")
            for (let j = 0; j < n; j++){
                console.log(j, "<===4 console ")
                if(i !== j){
                    console.log(nums[j], "<===5 console ")
                    prod *= nums[j]
                }
            }
            console.log(res[i], "<===6 console ")
            res[i] = prod;
        }
        return res;
    }
}
