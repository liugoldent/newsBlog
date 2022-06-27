---
title: F - Vue3 think more
date: 2022/06/27
tags: 
    - Vue3
---
# Vue3 近一步思考
## 1. use Proxy
1-1. 為何在Vue3中要使用Proxy取代掉defineProperty

a. 因為defineProperty API 的問題就是只能對已經設定好的屬性去做監聽
* Vue2中的響應式是基於defineProperty中的descriptor，對data做遍歷，為每個屬性加上getter and setter
* 而這也照就了「無法」為新屬性去做setter的響應式

b. 而Proxy API主要是針對一整個物件的，那麼這整個物件就會都被監聽到
* 也就是Proxy為物件架設了一層攔截功能，外界對Proxy物件作操作都會被監聽到。

## 2. Vue3做了哪些優化
2-1. 生成Block tree的部分

a. Vue2
* Vue2的數據更新與重新渲染是組件級別的，也就是說，如果組件越大，渲染越久
* 等同於渲染速度與組件大小成正比
* 相等於連靜態節點一起遍歷

b. Vue3
* Vue3進一步分割了靜態節點與動態節點，讓區塊在更新時，只去追蹤或更新其動態節點
* 渲染速度與動態節點的數量成正比

## 3. slot優化

3-1. Vue2
* 在Vue2中，如果有一個組件傳入了slot，那麼父組件更新時，會強制子組件update，造成性能浪費

3-2 Vue3
* 優化了slot的生成，使得非動態slot中屬性的更新只會觸發子組件的更新。

## 4. diff演算法優化
[Composition API 与 React.js 中 Hooks 的异同点](https://juejin.cn/post/7099822058879582245)
* Vue2中的virtual DOM是全面性的對比
* Vue3新增了靜態標記（PatchFlag），可以大致想成，此次比對與上次比對，「只比對有patch flag」的節點，並且可以透過flag的信息得知當前節點要比對的具體內容。

## 5. hoistStatic靜態提升
* Vue2是不論元素是否更新，都會被「重新創建」
* Vue3是對於不參與更新的元素，只會創建一次，然後在每次渲染時，「重複利用」

## 6. catchHandler的復用
* 像是在onClick 的function上，因為我們每次都是呼叫同一個函數，所以直接緩存起來復用

## 文章參考
[Vue3面試分享](https://zhuanlan.zhihu.com/p/335478785)
