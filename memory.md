# 技術記憶庫 (Technical Memory)

## 🐞 Bug 修復記錄
- (暫缺記錄，待開發後補充)

## 💡 技術決策
- **選擇 Hugo + React + Tailwind**：
  - 利用 Hugo 極速網頁建置特性，非常適合部落格的快速讀取。
  - 將部分複雜互動 UI 委派給 React (如畫廊、動態篩選)，利用 Hugo 內建的 Esbuild (`js.Build`) 編譯 JSX，不需依賴龐大的 Webpack/Vite 前端工具鏈。
  - 透過 Tailwind CSS 快速客製化日系簡約風格，減少編寫大量手寫 CSS 的負擔。
