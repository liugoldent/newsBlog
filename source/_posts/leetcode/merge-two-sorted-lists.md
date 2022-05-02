---
title: L - 21. Merge Two Sorted Lists
date: 2022/04/20
tags: 
    - LeetCode
    - Easy
    - Merge Two Sorted Lists
    - Javascript
    - Python
---
# Merge Two Sorted Lists
## Javascript 解
思路：
1. 首先要了解linked list
2. 基本上就是比大小，如果l1 < l2，則將l1放進 current的下一個節點
3. 反之則反
4. 如果到了一個linked list 結束了，但是另一個還沒結束則另一個繼續往下
5. 最後回傳 headNodeu節點
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 製作出一個新的linked list
    let result = new ListNode(0)
    // 讓c指向這個新的linked list（所以對這個c操作，相等於是對result操作）
    let c = result
    while(list1 != null && list2 != null){
        if(list1.val >= list2.val){
            c.next = list2
            list2 = list2.next
        }else{
            c.next = list1
            list1 = list1.next
        }
        c = c.next
    }
    // 若任一linked list 結束後，則將某個最長的list，全部放到c.next的後面
    if(list1 != null){
        c.next = list1
    }
    
    if(list2 != null){
        c.next = list2
    }
    // 為何會回傳result.next，因為c那個節點一直跑到最後了，而c節點同樣是對result做操作，所以最後回傳current.next
    return result.next
};
```