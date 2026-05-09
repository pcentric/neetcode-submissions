class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log(strs, "what is her ?")
        if(strs.length === 0) return ''
        let sizes = [], res = '';

        for (let s of strs){
            sizes.push(s.length)
        }

        for (let sz of sizes) {
            res += sz + ','
        }

        res += "#";

        for (let s of strs){
            res += s
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];
        let sizes = [], res = [], i = 0; 

        console.log(str, str[i],":1 consoles")

        while(str[i] !== '#'){
            let cur = ''
            while (str[i] !== ','){
            console.log(str[i], cur, ":2 console")
                cur += str[i];
                i++;
            }
            console.log(cur, '3 console')
            sizes.push(parseInt(cur));
            i++;
        }
        i++;
        for(let sz of sizes){
            res.push(str.substr(i, sz))
            i += sz
        }
                return res;
    }
}










