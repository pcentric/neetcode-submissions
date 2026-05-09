class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length <= 0) return []
       const count = {}

        for (let n of nums){
            console.log(n, (count[n] || 0), (count[n] || 0) + 1, "what is here ")
            count[n] = (count[n] || 0) + 1
        }

        console.log(Object.entries(count), count, "Object.entries(count)")
  const arr = Object.entries(count).map(([num, freq]) => [
            freq,
            parseInt(num),
        ]);

arr.sort((a, b) => b[0] - a[0]);
console.log(arr, "hhh",arr.sort((a, b) => b[0] - a[0]),"SLOCE",arr.slice(0, k))

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}
