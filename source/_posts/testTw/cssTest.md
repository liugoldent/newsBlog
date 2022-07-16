---
title: F - CSS 問題
date: 2022/07/14
tags: 
    - CSS
---
### CSS 權重
* inline style > id > class > element > *

### RWD
* 瀏覽區域的寬度小於600像素，則下方的CSS描述就會立即被套用
```CSS
@media screen and (max-width: 600px){
    .class{
        background: #ccc;
    }
}
```
* 瀏覽區域的寬度大於900像素，則下方的CSS描述就會立即被套用：
```CSS
@media screen and (min-width: 900px) {
    .class {
        background: #666; 
    } 
}
```
* 瀏覽區域寬度範圍在321px~768px，則下方CSS描述會立即被套用：
```CSS
@media only screen and (min-width: 321px) and (max-width: 768px) {
    .class {
        background: #666; 
    } 
} 
```
[CSS media屬性判別使用](https://www.ucamc.com/articles/102-rwd-css-media-type)

### animate、keyframes
* @keyframes: 需要呈現的狀態（錄影帶）
* animation: 實際演出時的播放方式，包含速率、正反轉都可以調整（播放器，可使其正轉倒轉快轉）
```css
@keyframe rotate-a {
  from {
    transform: translateX(0%); 
  }

  to {
    transform: translateX(100%);
  }
}

div {
  /* 你要告訴CSS，你要播放的狀態為何（必要） */
  animate-name: rotate-a;
  /* 然後要告訴CSS，持續幾秒（必要） */
  animation-duration: 3s;
}
```

