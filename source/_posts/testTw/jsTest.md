---
title: F - JS 問題
date: 2022/07/03
tags: 
    - javascript
---
# JS 小知識
### var、const、let
```javascript
var a = 1;
var b = 1;
var c = 1;

function test(a){
  console.log(a) // undefined
  var b = 2;
  console.log(b) // 2
  if(true){
    let c = 5
    var d = 6
    const e = 7
  }
  console.log(c) // 1
  console.log(d) // 6
  console.log(e) // error
}

test()
```

### Event Loop
1. 當js執行到該行時，會進入Call Stack（先進後出）
2. 然後遇到cb時，cb進入Web API等待
3. 然後Web API得到結果時，將這個cb丟給Queue（先進先出）
4. 最後當stack都清空時，Queue的資料或function會進入Call Stack執行

### CSS 權重
* inline style > id > class > element > *

### 淺拷貝 vs 深拷貝
#### 深拷貝使用
```javascript
JSON.parse(JSON.stringify())
```
### 淺拷貝
```javascript
Object.assign() // 只能完成第一層的淺層複製
```

### this
Ans：把呼叫function想像成：function.call()

### 型別

#### 基本型別
* Boolean、Null、Undefined、Number、String、Symbol

#### 物件型別
* Object、Array、Function

### call vs apply
* 差別在於傳遞參數方式
* apply只允許傳進兩個參數

```javascript
fun.call(this, arg1, arg2) == fun.apply(this, arguments)
```

### == vs ===
* == 會自動轉型
* === 要型別正確 & 資料正確 才會true

### map vs filter vs reduce
* map 遍歷陣列，然後返回新陣列
* filter 遍歷陣列，然後條件為true才會返回
* reduce 遍歷陣列，但可通過回調函數返回一個值

## cookie vs localStorage vs SessionStorage
[cookie vs localStorage vs SessionStorage](https://liugoldent.gitbook.io/workspace/conceptual-analysis/http/http-cookie-storage)


## 參考文章
[javascript-questions.md](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/main/src/questions/javascript-questions.md)
[Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question)
[Amazon front end interview questions](https://www.frontendinterviewhandbook.com/companies/amazon-front-end-interview-questions/)
[Software Engineer interviews: Everything you need to prepare](https://www.techinterviewhandbook.org/software-engineering-interview-guide/)

