# 🌸 手工藝術時光 (Craft Moments)

這是一個日系簡約、溫暖且高度視覺化的部落格專案。利用極速的靜態站點生成工具 **Hugo**，搭配 **React** 作為動態互動組件，並引入 **Tailwind CSS** 以便快速套用設計系統規範。結合 GitHub Actions 實現自動編譯發布，讓撰寫文章更加直觀彈性。

## 🛠️ 技術架構 (Technology Stack)

*   **核心框架**：Hugo (SSG)
*   **介面樣式**：Tailwind CSS + Hugo Theme Dream (Git Submodule)
*   **互動組件**：React (利用 Hugo 原生的 Esbuild — `js.Build` 直接編譯，免開 Webpack/Vite 伺服器)
*   **環境管理**：透過 `uv` 來管理 Python 虛擬環境 (如果未來有建置相關的 Python 腳本或 AI 工具)
*   **部署系統**：GitHub Pages (結合 GitHub Actions: 自動編譯與推送)

## 📂 目錄結構說明

```text
craft-moments/
├── .github/          # 存放 GitHub Actions 自動部署腳本 (hugo.yml)
├── .venv/            # uv 提供之 Python 虛擬環境 (不需加進版本控制)
├── assets/           # React 組件 (js/) 與 Tailwind 進入點 (css/)
├── content/          # 📝 部落格文章放置的地方 (Markdown)
├── layouts/          # 覆蓋主題佈景的自定義模板 (目前包含掛載 CSS/JS 的 head.html)
├── themes/dream/     # Hugo 核心佈景主題 (透過 submodule 匯入)
├── claude.md         # 專案任務清單與開發指揮中心
├── memory.md         # 紀錄過往的程式 Bug 與技術決策
├── design-system.md  # 視覺設計與字體顏色指南
├── hugo.toml         # Hugo 核心設定檔
├── postcss.config.js # 透過 PostCSS 處理 Tailwind 的設定
└── tailwind.config.js# 定義字體、主題色 (primary, secondary) 的 Tailwind 設定檔
```

---

## 🚀 如何在本地端啟動 (Local Development)

### 1. 系統需求
請確保您的開發環境中已安裝下列套件：
*   [Node.js](https://nodejs.org/) (請使用 LTS 版本以上)
*   [Hugo Extended 版](https://gohugo.io/installation/) (如 macOS 下支援 `brew install hugo`)
*   [uv](https://github.com/astral-sh/uv) (可選，作為 Python 虛擬環境啟動使用)

### 2. 安裝套件
首先安裝前端依賴庫（Tailwind CSS 與 React 等）：
```bash
npm install
```

如需啟動並進入 Python `uv` 環境：
```bash
uv venv
source .venv/bin/activate
```

### 3. 發布與測試
您可以使用先寫好的 npm 腳本在本地端啟動伺服器：
```bash
npm run start
```
或是使用原生指令：`hugo server -D`。在瀏覽器打開 `http://localhost:1313/craft-moments/` 即可即時預覽。

---

## ✍️ 如何撰寫新文章 (How to Post)

所有文章都統一存放在 `content/posts/` 目錄中，並以 Markdown 格式 (`.md`) 撰寫。

### 方法一：直接新增 Markdown 檔案
若要發布一篇新文章，可以在終端機下輸入：
```bash
hugo new posts/my-first-post.md
```
然後利用文字編輯器打開 `content/posts/my-first-post.md`。

### 文章開頭設定 (Front Matter) 與首頁縮圖
在檔案最上面的區段 (由 `---` 包圍的部分)，您可設定該文章的專屬屬性。其中 `cover` 是用來產生首頁縮圖的關鍵設定：

```markdown
---
title: "我的第一篇手工草稿"       # 文章標題
date: 2026-03-25T10:00:00+08:00 # 發布日期
cover: "/craft-moments/images/my-cover.png" # 顯示在首頁的縮圖路徑 (圖片可放於 static/images/ 內)
draft: false                    # 是否為草稿 (若為 true 在正式部署將不顯示)
tags: ["木作", "日常"]           # 文章標籤 (可選)
categories: ["手作筆記"]         # 文章分類 (可選)
---
這裡寫的文字會出現在首頁，作為卡片下方的**簡寫說明 (Excerpt)**。

<!--more-->

加上 `<!--more-->` 標籤後，下面撰寫的所有內文就只會在**點進文章的閱讀頁面**中顯示，這是保持首頁排版乾淨俐落的核心技巧！
```

### 方法三：在文章中插入高品質排版圖片

在 Markdown 內文（位於 `<!--more-->` 之後的區域）也可以隨時插入圖片。\
推薦使用原生的 `<img>` 結合 Tailwind CSS 來保持視覺優雅與圓角陰影：

```html
<figure class="my-8">
  <img src="/craft-moments/images/您的圖片檔名.png" alt="說明文字" class="w-full max-w-2xl mx-auto rounded-2xl shadow-md border hover:scale-105 transition-transform" />
  <figcaption class="text-center text-sm text-gray-500 mt-3 font-serif">圖說：這是一張展示用圖片</figcaption>
</figure>
```

> **存放路徑：** 所有的預設圖片需統一放入存放目錄：`static/images/`，使用時就可以直接拿著 `/craft-moments/images/檔名` 輕鬆呼叫出來。

若需要在您的 Markdown 文章中加入具有「燈箱效果」或「進階互動」的畫廊，只需在內文直接插入以下的 `HTML 標籤` 即可。因為專案已設定完全相容 React 與 HTML 混寫！

```markdown
---
title: "精選陶瓷作品"
date: 2026-03-26T15:00:00+08:00
draft: false
---

這是我最新製作的陶瓷，請點擊下方照片進入。

<!-- 這個 div 會被 React 自動識別並掛載畫廊元件 -->
<div id="react-gallery-root"></div>
```

如果有需要，您可以隨時至 `assets/js/Gallery.jsx` 修改這支 React 元件的內容或新增更多圖片假資料。
