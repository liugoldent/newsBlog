---
title: Python 超基本入門
date: {{ date }}
tags: 
    - Python
    - Flask
---
# Python
## 環境相關指令
1. exit() > 離開python環境

## 關於Pip
它是python的套件管理系統，如果是JS的用戶，可想像成是Npm的概念 
### Mac 安裝pip
1. 安裝
* `curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`
* `python3 get-pip.py` 
（注意如果是python3版本，要使用python3開頭，如果不是則使用python開頭）
2. 查看pip版本
* `python3 -m pip --version`
3. 更新 pip 到最新版本?
* `python3 -m pip install --upgrade pip`

### 使用Pip
* 記住：如果是python3，則要使用`pip3`指令來操作安裝
ex：`pip3 install Flask`

## 好文共享
[pip指令大全](https://www.maxlist.xyz/2019/07/13/pip-install-python/)
