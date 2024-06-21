## Practice Socket.io

### 設置伺服器

需要在 Node.js 環境中設置一個伺服器，並使用 Socket.IO 來處理 WebSocket 連接。

1. 安裝依賴：

   ```bash
   npm install express socket.io
   ```

2. 創建 server/index.js

### 設置 React Native 客戶端

1. 安裝依賴：

   ```bash
   npm install socket.io-client
   ```

2. 修改 App.js 或創建一個新的組件

### 測試

1. 確保伺服器已啟動：

   ```bash
   node server.js # node server/index.js 取決於你放在哪個資料夾
   ```

2. 運行 React Native App 模擬器

   ```bash
   npm run android && npm run ios
   ```

- 啟動後，畫面應該會顯示「正在連接...」，成功連接到伺服器後顯示「已連接」，並顯示來自伺服器的消息「歡迎！你已成功連接到伺服器」。
