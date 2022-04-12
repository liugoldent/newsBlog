---
title: B - Flask 超基本入門
date: {{ date }}
tags: 
    - Python
    - Flask
---
# Flask
## Hello World
### 首先安裝 Flask
`pip3 install Flask`
### 新增檔案：app.py
```python
from flask import Flask
app = Flask(__name__) #用來指定目前載入資料夾的位置
@app.route("/")
def hello():
    return "Hello, World!"
```

### 透過終端機啟動
* 官網推薦
```
$ export FLASK_APP=main.py
$ flask run --reload --debugger --host 0.0.0.0 --port 80
```
  * -reload：在修改py檔後，Flask server會自動reload
  * -debugger：如果有錯誤，會在頁面上顯示是哪一行錯誤
  * -host：指定可以訪問的主機IP，0.0.0.0為所有主機的意思
  * -port：指定port號

## 好文推薦
[Flask Hello World](https://www.maxlist.xyz/2020/04/30/flask-helloworld/)
[Python Flask 入門指南 : 輕量級網頁框架教學](https://devs.tw/post/448)

