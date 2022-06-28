---
title: F - Pinia 使用紀錄
date: 2022/06/28
tags: 
    - Vue3
    - Pinia
---
# Pinia
## 為何我們要使用Pinia

* 其支援Option API and Composition API 
* 沒有Mutation
* 沒有巢狀模塊
* 支援TS
* 自動代碼分割

## Pinia vs VueX

* Pinia：State、Getter、Actions（支援同步非同步）
* VueX：State、Getters、Mutation（同步）、Actions（非同步）

## Pinia 基本配置

```javascript
// main.js
import { createPinia } from 'pinia'
vue.use(createPinia)
```


### 創建Pinia方法1
```javascript
// 在自創一個store時
// ex: userstore
import { defineStore } from 'pinia'
export const userStore = defineStore('user', {
    // defineStore 第一個參數為string：代表名稱
    // 第二個參數為Object key有 state actions getters

    // state必須為箭頭函數，為了在server渲染時避免交叉請求造成的數據狀態污染以及更好的ts support，所以只能是函數
    state: () => {
        return { 
            count: 1,
            arr: []
        }
    },
    // getters封裝計算屬性
    getters: { ... }, 
    // actions封裝業務邏輯，修改state
    actions: { ... }
})
```

### 創建Pinia方法2
也可以用類似Vue3的方法來創建
```javascript
const useGetTechSheet = defineStore('getTechSheet', function () {

  const kd_gold = ref([])
  const kd_promise = proxy.axios.get(
    `${proxy.envURL}/stockApi/sheetData/tech/kd`
  )

  const getSheetData = async function () {
    try {
      await Promise.all([
        kd_promise,
      ])
        .then((res) => {
          kd_gold.value = res[0].data.sheetsData.kd_gold_stock_name
          kd_death.value = res[0].data.sheetsData.kd_death_stock_name
          return res
        })
        .catch((err) => {
          throw err
        })

    } catch (error) {
      console.error(error)
    }
  }
  return {
    kd_gold,
  }
})
```

## 訪問state
我們可以直接import所需的store檔案，並使用它
```javascript
import useGetTechSheet from '@/stores/getTechSheet'
const useGetTech = useGetTechSheet()
```

但是如果要讓其數據保持響應式，必須要加上storeToRefs()
```javascript
import useGetTechSheet from '@/stores/getTechSheet'
const { count } = storeToRefs(useGetTechSheet)
```

## 使用Getters
getters具有緩存功能，也就是像computed一樣，如果沒有更新到，會直接讀取緩存起來的資料
```javascript
getters: {
    // 方法一：接收一個參數
    myCount(state){
        console.log('调用了') 
        return state.count + 1 // 如果count沒有改變，則myCount會調用緩存起來的數值
    },
    // 方法二，不傳参数，使用 this
    // ts：必须指定函数返回值的类型，否则類型推導不出來
    // js 則去掉類型
    myCount(): number{
        return this.count + 1
    }
}
```

## 更新資料：Actions
```javascript
import { userStore } from '../store'
const user_store = userStore()
const handleClick = () => {
    // 記住，這是在vue中，不是在store中
    // 方法一：我們在vue中，直接對這個store的資料進行更新
    user_store.count++
    
    // 方法二，若需要修改多個數據，可以用 $patch 更新，注意是「傳入一個物件」
    // 物件中若陣列要更新要解構
    user_store.$patch({
        count: user_store.count1++,
        // arr: user_store.arr.push(1) // 錯誤
        arr: [ ...user_store.arr, 1 ] // 可以，但是還是要把整個陣列都拿出来解構，没必要
    })
    
    // 使用 $patch 性能更好，因為資料一次更新完畢，只需要reload一次
    
    // 方法三，$patch，但是是傳入函數，第一个參數是 state 推推
    user_store.$patch( state => {
        state.count++ // state
        state.arr.push(1) // 可以直接用push
    })
}
```
或是在store中更新actions來改變數據
```javascript
{
  "actions": {
      changeState(num: number){ // 不能用箭頭函数，不然會變成綁定成外面的this
          this.count += num
      }
  }
}
```

## 文章分享
[上手 Vue 新的状态管理 Pinia，一篇文章就够了](https://segmentfault.com/a/1190000041554023)
[Pinia - Vuex 的後繼者](https://johnnywang1994.github.io/book/articles/js/pinia-intro.html)
