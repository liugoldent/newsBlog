---
title: F - HTML 問題
date: 2022/07/17
tags: 
    - HTML
    - Test
---

# HTML 小知識

## DOCTYPE有什麼作用
* 告訴瀏覽器要用哪種版本的HTML規範來渲染文件，如果不存在則會導致瀏覽器以`Quirks Mode` 呈現
* 模式
  * 標準模式（Standards Mode）
  * 混雜模式（Quirks Mode）

## HTML5 為什麼只需要寫`<!DOCTYPE HTML>`
* HTML 不基於SGML，因此不需要針對DTD進行引用
* HTML4，需要引用DTD。才能告知文件型別
```HTML
<!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN” “http://www.w3.org/TR/html4/strict.dtd”>
```

## 行內元素有哪些，塊級元素有哪些？
```
* 行內元素：a span img input select
* 塊級元素：div ul ol li h1 p
* 空元素：<br> <hr> <link> <meta>
```

## link vs @import
* link 除了載入CSS，還可以載入其他類檔案。@import 完全屬於CSS
* link 是在頁面載入時同時載入。@import 是在頁面載入之後，載入。
* link 可以使用JS去改變樣式。@import 無法
* link 權重高於 @import

## 無樣式內容閃爍
* 因為@import是文件載完之後，再載入的，所以中間會有空擋導致沒有樣式
* 解決方法：使用Link，因為link是順序載入，所以這樣等CSS載完之後再下載HTML，先佈局好就不會有FOUC問題

## 瀏覽器核心
* 渲染引擎
  * 取得網頁內容
  * 整理訊息
  * 計算網頁顯示方式
* JS引擎
  * 主要執行和解析JS動態效果

## 常見的瀏覽器核心
* Trident、Geckos、Presto、Webkit

## HTML 新增哪些元素，如何區分HTML & HTML5
* 新增
  * canvas
  * video audio
  * localStorage、SessionStorage
  * article、footer、Header、nav、section（主要也是為了讓搜尋引擎了解你的網頁架構）
  * Geolocation
  * calendar date email time url search
  * drag drop
* HTML vs HTML5
  * 主要依照DOCTYPE的宣告方式

## HTML5的檔案離線儲存怎麼使用
* 主要是使用 manifest
  * 第一次訪問，瀏覽器會根據manifest去下載相應的資源，並進行離線儲存。

## iframe
優點
* 能夠把網頁原封不動展現出來
* 如果有多個網頁引用iframe，那麼只需要修改iframe內容就可以達到換頁功能。
缺點
* 搜尋引擎無法爬蟲讀取這種頁面
* iframe會增加server http 請求

## label
* 主要是定義表單控制元件間的關係，當使用者選擇該標籤時，瀏覽器會自動將焦點轉到和label相關的控制元件上。
* for：當點選其元件時，所連結的元件將獲得焦點。
* accesskey：幫使用者設定快捷鍵

## HTML5的自動完成功能
* 可以設定form的autocomplete on or off 來開啟輸入匡的自動完成功能

## 如何實現瀏覽器中多個標籤頁內的通訊
* websocket
不過safari在無痕模式下，localStorage會丟出QuotaExceededError的異常

## websocket 如何相容低瀏覽器
* websocket.js
* Adobe flash socket

## 網頁驗證碼
* 區別使用者是計算機還是人
* 可以防止惡意破解密碼、刷票、論壇

## title vs h1、b vs strong、i vs em
* title只表示標題。h1有明確的層級標題，並且對爬蟲也有影響
* strong 加強語氣，b無意義的視覺表現
* em 強調文字。i無意義的視覺表現

## alt vs title
* alt：作為圖片的替代文字
* title：作為圖片的解釋文字

## meta
### description 網頁摘要
* `<meta name="description" content="摘要">`
  * 顯示於搜尋結果網頁標題下方
  * 應簡短扼要說明網站

### OG：open Graph Protocol

```HTML5
<head>
    <meta property="og:type" content="type" />  
    <meta property="og:title" content="site_title" />
    <meta property="og:description" content="site_description" />
    <meta property="og:image" content="site_image" />
    <meta property="og:url" content="site_url" />
    <meta property="og:site_name" content="site_name" />
</head>
```

## HTML5語意標籤
優點：加強SEO、維護方便、使用友善
* `<header>`：網頁的標頭，通常放置網站標題。
* `<nav>`：網頁的選單或導覽列。
* `<main>`：網頁的主要內容。
* `<aside>`：網頁的側欄、附加內容。
* `<article>`：一篇文章內容。
* `<section>`：自訂的區塊。
* `<footer>`：網頁的頁尾。
* `<mark>`：強調一小塊內容。
* `<time>`：顯示日期時間。

