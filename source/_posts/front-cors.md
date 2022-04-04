---
title: Vue3 解決跨域問題
date: {{ date }}
tags: 
    - Vue3
    - Express
    - Nodejs
---
# FrontEnd 前端設定
## 當你安裝好Vue3後...
想要解決跨域問題，需要從 `src/main.js` 出發
```javascript
import axios from 'axios' // 首先當然需要import進來axios在全域部分
app.config.globalProperties.axios = axios // 再來設定全域參數

axios.defaults.timeout = 5000; // 這是打API的爆錯時間
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 定義內容類型為application....
axios.defaults.baseURL = '/api' // 打api的基本URL，打任何網址都會加上這個
```

## 當最基本的設定好了之後...
回到 `vite.config.js` 設定...
```javascript
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // 主要看下面這段server的設定
  server:{
    proxy:{
      '/api': { // 有點前綴的感覺，就是上面的baseURL = /api
        target: 'http://127.0.0.1:8000/', // 想要打到的目標網址（訪問的接口網域名稱）
        changeOrigin: true, // 開啟代理，會在本地端創建一個虛擬server，同時接收請求數據，這樣服務端之間進行傳輸不會有跨域問題
        rewrite: (path) => path.replace(/^\/api/, ''), // 可以想成要將target換成什麼樣子
        // 範例：
        // http://127.0.0.1:4000/ + axios 的baseURL = http://127.0.0.1:4000/api
        // 而rewrite會把其改成 http://127.0.0.1:4000/api => http://127.0.0.1:4000/
        ws: true  // 是否啟用websocket
      },
    }
  }
})
```
# BackEnd 後端設定
## 基本App.js 全域設定
先找到 `app.js` 檔案
我們可以 `npm i conrs` 使用cors，或是使用 `app.all`的方式來解決跨域
```javascript
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); // 如果有install cors 就可以把其require進來

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
process.env.PORT = 8000;

// 這是第一種方法使用cors，其中包含了URL & 請求方法
app.use(cors({
    origin:['http://127.0.0.1:3000'],
    methods:['GET','POST'],
}));

// 這是不使用cors的方法，一樣包含了網址、方法、內容型態
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
```

## Router設定
```javascript
router.post('/word', function(req,res,next){ // 在這邊的router.js，其實就可以直接設定api
  res.json({ // 然後選擇要回傳的回應是什麼
    greeting: 'hello Woeld'
  })
})
```

# 好文連結
[vue3.x+Nodejs+expresss代理跨域问题](https://blog.csdn.net/messizhao/article/details/105356787)
[vue2 vs vue3 cors](https://iter01.com/642440.html)
