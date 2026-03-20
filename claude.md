# 專案指揮中心 (Project Commander)

## 🎯 專案目標
建立「手工藝術時光 (Craft Moments)」部落格，風格：日系簡約、溫暖、高度視覺化。

## 🏗️ 系統架構
- **核心框架**：Hugo (SSG)
- **主題**：Hugo Theme Dream
- **互動組件**：React (透過 Hugo Esbuild 編譯)
- **樣式**：Tailwind CSS
- **環境管理**：透過 `uv` 控制 Python 虛擬環境
- **部署**：GitHub Pages (結合 GitHub Actions)

## 📋 待辦清單 (To-Do List)
- [x] 專案基礎目錄與 AI 管理框架初始化
- [ ] 導入 Hugo Theme Dream 作為 Git Submodule (或安裝模組)
- [ ] 初始化 npm 與 Tailwind CSS / React 依賴
- [ ] 結合 Tailwind CSS 與 Hugo Pipes
- [ ] 編寫第一個 React 組件並掛載到 Hugo 網頁中
- [ ] 設定 `hugo.toml` baseURL，推播至 GitHub 以測試 GitHub Actions 自動部署
