class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let newString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let newLength = newString.length;

        for(let i = 0 ; i < newLength / 2; i++){
            if(newString[i] !== newString[newLength - 1 - i]){
                return false
            } 
        }
                return true
      
    }
}