---
title: L - 27. Remove Element
date: 2022/06/22
tags: 
    - LeetCode
    - Easy
    - Remove Element
    - Javascript
---
# Remove Element
## Javascript 解
思路：
1. 因為不能再多使用一個空間來得出答案，所以只能對原陣列動手腳
2. 所以我們一樣設定一個count，來計算說不為val的位子到哪了
```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let count = 0
  for(let i = 0 ,len = nums.length ; i < len ; i++){
      if(nums[i] !== val){
          nums[count] = nums[i]
          count++
      }
  }
  return count++
};
```
