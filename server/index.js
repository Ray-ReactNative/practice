const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// 當有客戶端連接時
io.on('connection', socket => {
  console.log('一個客戶端已連接');

  // 發送消息給客戶端
  socket.emit('message', '歡迎！你已成功連接到伺服器');

  // 當客戶端斷開連接時
  socket.on('disconnect', () => {
    console.log('客戶端已斷開連接');
  });
});

// 啟動伺服器
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`伺服器正在執行在 http://localhost:${PORT}`);
});
