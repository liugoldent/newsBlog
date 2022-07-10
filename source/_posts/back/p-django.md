---
title: B - Django 入門
date: 2022/07/10
tags: 
    - Python
    - Django
---
# Django 入門

## 安裝環境與套件
### 1. 介紹virtualEnv
在安裝Django之前，我們要先安裝virtualenv，主要是確保各專案環境不會被污染
* 確保本專案有自己的python環境
* 不需要root權限，就可以安裝新套件
* 方便控管不同版本的套件，不用擔心套件升級會影響其它套件
* 如果需要多人協作時，也能確保環境一致性

### 2. 安裝virtualEnv

```shell
pip3 install virtualenv
virtualenv --version
```

### 3. 利用virtualenv 去安裝基本「環境」
首先要先新增資料夾：pyApp
然後在pyApp中新增兩個資料夾：1. pyApp/virtualenv & 2. pyApp/workspace
```shell
// 首先進入資料夾
cd pyApp/virtualenv 
// 再來利用virtualenv新增環境檔案
virtualenv pyAppenv
```

### 4. 安裝環境之後，要安裝套件django
* 輸入$ source pyAppenv/bin/activate，啟動虛擬環境pyAppenv
* (pyAppenv)$ pip3 install django 
* 安裝完成後，可以再輸入指令$ pip3 freeze，確認這個虛擬環境的django是否正確被安裝

## 對django去安裝project 與 App
差別：
* project：偏全域配置
* App：偏各自App配置。（例如我們web中可能會有各種不同功能）

重點：
這些指令都要操作於虛擬環境之下
### 安裝project
注意路徑：是在專案資料夾下
```shell
(pyAppenv) ~/djangogirls$ django-admin.py startproject mysite
```
### 安裝App
注意路徑：是在剛剛建好的mysite下
```shell
(pyAppenv) ~/djangogirls/mysite$ django-admin.py startapp mysiteApp
```

## 參考資料
[安裝 Django](https://djangogirlstaipei.gitbooks.io/django-girls-taipei-tutorial/content/django/installation.html)
[Day3. 建立第一個Django專案](https://ithelp.ithome.com.tw/articles/10238610)



