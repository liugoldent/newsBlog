/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0
    for (let i = 0, len = s.length; i < len; i++) {
        if (symbolObj[s[i]] >= symbolObj[s[i + 1]] || i === len-1 ) {
            total = symbolObj[s[i]] + total
        } else {
            total = total - symbolObj[s[i]]
        }
    }
};

romanToInt('XII')