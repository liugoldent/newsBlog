---
title: L - 167. Two Sum II - Input Array Is Sorted
date: 2022/05/05
tags: 
    - LeetCode
    - Medium
    - Input Array Is Sorted
    - Javascript
---
# Input Array Is Sorted
## Javascript 解
思路：
跟two sum 很像
基本上也是給定目標值，你去取得相對應的位置
另外這題keyword可以用 two pointer去解
雙指針，一個從頭出發，一個從尾出發
condition1：當總和比目標值大則j--
condition2：當總和比目標值小則i++
```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0
    let j = numbers.length - 1
    while (i < j) {
        const sum = numbers[i] + numbers[j] 
        if (sum === target) {
            return [i + 1, j + 1]
        }
        if( sum > target){
            j--
        }else{
            i++
        }
    }
};
```
## 好文連結
[【第十一天 - Two-pointer 題目分析】](https://ithelp.ithome.com.tw/articles/10262608)