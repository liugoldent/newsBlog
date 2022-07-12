---
title: L - 66. Plus One
date: 2022/07/12
tags: 
    - LeetCode
    - Easy
    - Plus One
    - Javascript
---
# Plus One

## Javascript 解
要注意到此題你如果用js的強制轉型，會導致溢位
所以正解要從最後一個index去做迴圈
然後判斷是否為9
若為9則進位為0
並且
若有下一位子，則繼續進位
若無則跳出迴圈return 解構

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  for(let i = digits.length - 1 ; i >= 0 ; i--){
    let lastDigit = digits[i];
    if (lastDigit < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits]
};
```

