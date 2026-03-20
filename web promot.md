


### 🚀 針對 GitHub 優化的啟動 Prompt

> **Role**: 你是一位精通 **Hugo**、**React**、**Tailwind CSS** 以及 **GitHub Actions** 的資深全端工程師。
> 
> **Project Goal**: 建立一個名為「手工藝術時光 (Craft Moments)」的部落格。風格：日系簡約、溫暖、高度視覺化。

**模板連結**：https://themes.gohugo.io/themes/hugo-theme-dream/
> 
> **Technical Stack (GitHub Optimized)**:
> 
> 1. **Core**: Hugo (SSG)。
>     
> 2. **Interactivity**: React (透過 Hugo 內建的 Esbuild 編譯)。
>     
> 3. **Styling**: Tailwind CSS。
>     
> 4. **Deployment**: **GitHub Pages**。必須包含自動化的 **GitHub Actions (`hugo.yml`)**，確保每次 `git push` 時能自動處理 Esbuild 編譯並發布。
>     
> 
> **AI Management Framework**: 請在根目錄初始化：
> 
> - **`claude.md` (Project Commander)**: 任務進度、架構圖、待辦清單。
>     
> - **`memory.md` (Technical Memory)**: 記錄 Bug 修復、技術決策。
>     
> - **`design-system.md` (Aesthetic Guide)**: 顏色、字體、組件規範。
>     
> 
> **Initialization Task (第一階段任務)**: 請一次性提供以下內容：
> 
> 1. **專案目錄結構樹**。
>     
> 2. **`claude.md` 與 `memory.md` 的初始模板**。
>     
> 3. **`hugo.toml` 配置**：需設定正確的 `baseURL`（假設為 `https://<USERNAME>.github.io/<REPO>/`）並啟用 `js.Build`。
>     
> 4. **`.github/workflows/hugo.yml`**：這是一個關鍵的自動化部署腳本，需支援安裝 Node.js 以便執行 Tailwind 和 React 的編譯。
>     
> 5. **一個基礎的 React 組件範例** (`assets/js/Gallery.jsx`)。
>     
> 6. **Tailwind CSS 的配置與 Hugo 模板連結方式**。
>     
> 
> **Output format**: 請使用 Markdown 區塊清晰地呈現程式碼。