<p align="center"><a href="README.md">English</a>, <a href="README_cn.md">中文</a></p>


<img src="docs/icon.png?raw=true" height="48"> NflxMultiSubs
============================================================
Best ever Chrome/Firefox extension to unleash bilingual subtitles on Netflix!
全球首款支援 Netflix 全語言雙字幕的 Chrome/Firefox 擴充套件，提供您更佳的觀影體驗！

[<img src="https://user-images.githubusercontent.com/13658335/138092194-303708fb-9a4e-4e3f-a1dc-74baff1e45c9.png" height="59"/>](https://chrome.google.com/webstore/detail/jepfhfjlkgobooomdgpcjikalfpcldmm)
[<img src="https://user-images.githubusercontent.com/13658335/138086366-8deee659-16c3-4621-b3f0-eaf4cb6ed9ba.png" height="60"/>](https://addons.mozilla.org/en-GB/firefox/addon/nflxmultisubs-2021)



特色
----
- 坊間首款全自動支援日語、俄文等語言 (image-based) 第二字幕的擴充套件
- 智慧選擇雙語字幕：看日本動畫顯示日語，看美劇顯示英文
- 整合原生 Netflix 選單，不需離開播放介面即可切換語言
- Netflix 有提供的字幕通通可以選，不需要另外找字幕組
- 也順便做了調整播放速度的功能（按 `[` 與 `]` 鍵）
- 開放原始碼！



有圖有真相
----------
![Bilingual Subtitles with zh-cn/en](docs/2021_zh-en.jpg?raw=true)
![Intergrated in original menu](docs/2021_popup-menu.jpg?raw=true)
![Settings menu](docs/2021_settings.jpg?raw=true)

构建
----
```
git clone https://github.com/gmertes/NflxMultiSubs.git
cd NflxMultiSubs
npm install
npm run build
```

使用須知 & 已知問題
-------------------
- 使用過程中發生的問題，本套件與開發者概不負責哦，請謹慎使用
- 本套件與 Netflix, Inc. 原廠沒有關係，各資源版權均屬原創作者所有
- 本套件可能與其他 Netflix 相關套件相衝，很遺憾請擇一使用
- 本套件可能與「廣告阻擋套件」（如 [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) 等）相衝，目前請自行解決 XD
- 目前 text-based 第二字幕沒有處理 right-to-left (RTL) 語系



遇到問題了嗎？
--------------
### 字幕列表是空的
- 重新整理 (F5) 后字幕会出现
### Netflix 播放器一直轉圈圈，最後跳出錯誤訊息
- 通常從「影片列表」進到「播放頁面」會發生這種狀況
- 多按幾次重新整理 (F5) 試試看 XD
- 還是不行的話，可能是被「廣告阻擋套件」誤判擋下來了，請將 `netflix.com` 加入白名單或暫時停用該套件

### 主字幕跟第二字幕分很開
- 通常只有在進度條顯示的時候才會發生，等到進度條隱藏就好了

### 主字幕跳到畫面中間
- 通常只有在進度條顯示的時候才會發生，等到進度條隱藏就好了

### 只能在 Chrome 桌面版用嗎？
- 沒錯，手機、平版電腦、智慧電視、Apple TV、Chromecast、………通通不支援
- 因為技術限制，未來也不會支援這些平台，只能跪求 Netflix 官方釋出囉

### 可以跨區載入字幕嗎？
- 本套件尊重 Netflix 資源，目前只支援該地區官方有提供的字幕（主字幕有什麼語言，第二字幕就有相同選擇）
- 未來也不會加入「自行掛載字幕檔」的功能

### 可不可以加入＿＿＿＿功能？
- 這個套件只想專注做好一件事：提供「雙語字幕」的良好觀影體驗
- 如果有请求，可以打开 issue（请写英文与在标题写入[Feature Request]）



Licenses
--------
MIT. Refer to [LICENSE.md](LICENSE.md) for details.
