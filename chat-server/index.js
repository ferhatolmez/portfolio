const express = require('express');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();

// Tüm kaynaklardan gelen CORS isteklerine izin ver
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send('Portfolio WebSocket Real-time Chat Server is running correctly.');
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Chat server is actively listening on port ${port}`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

// Sunucu hafızasında tutulacak geçmiş mesajlar ve aktif kullanıcılar
const msgs = [];
const users = new Map();

// Her 24 saatte bir (86.400.000 ms) sohbet algoritmasını tamamen temizle
setInterval(() => {
  msgs.length = 0; // Diziyi hafızadan tamamen kazıyarak temizler
  io.emit('msgs-receive-init', msgs); // Bağlı olan herkese "Sohbet temizlendi" sinyali yollar ve ekranlarındaki metinleri siler
  console.log('[SYSTEM] Günlük standart otomatik sohbet temizliği yapıldı.');
}, 24 * 60 * 60 * 1000);

// Session ID Middleware
io.use((socket, next) => {
  const sessionId = socket.handshake.auth.sessionId;
  if (sessionId) {
    socket.sessionId = sessionId;
  } else {
    socket.sessionId = Math.random().toString(36).substring(2, 15);
  }
  next();
});

io.on('connection', (socket) => {
  console.log(`[+] User connected: ${socket.id} (Session: ${socket.sessionId})`);
  
  // Bağlanan kullanıcıya session kimliği ve geçmiş mesajları gönder
  socket.emit('session', { sessionId: socket.sessionId });
  socket.emit('msgs-receive-init', msgs);

  // Frontend'in TypeScript User interface'ine tam uyan kullanıcı objesi
  const userObj = {
    id: socket.sessionId,
    socketId: socket.id,
    name: "Guest",
    avatar: "1",
    color: "#60a5fa",
    isOnline: true,
    posX: -1000,
    posY: -1000
  };
  users.set(socket.id, userObj);
  // HATA FIX: 'users-update' yerine bağlanan istemci aslında Context içerisinde 'users-update' mi dinliyor yoksa 'users'?
  io.emit('users', Array.from(users.values()));

  // Kullanıcı profili güncelleme (isim, avatar)
  socket.on('update-user', (data) => {
    const user = users.get(socket.id);
    if (user) {
      if (data.username) user.name = data.username;
      if (data.avatar) user.avatar = data.avatar;
      if (data.color) user.color = data.color;
      io.emit('users', Array.from(users.values()));
    }
  });

  // Yeni mesaj geldiğinde
  socket.on('msg-send', (data) => {
    const user = users.get(socket.id);
    const newMsg = {
      content: data.content,
      id: Math.random().toString(36).substring(2, 9),
      sessionId: user ? user.id : socket.sessionId,
      username: user ? user.name : "Guest",
      avatar: user ? user.avatar : "1",
      color: user ? user.color : "#60a5fa",
      createdAt: new Date()
    };
    
    if (msgs.length > 100) msgs.shift();
    msgs.push(newMsg);
    io.emit('msg-receive', newMsg);
    console.log(`[MSG] ${newMsg.username}: ${newMsg.content}`);
  });

  // Cursor (Fare İmleci) senkronizasyonu
  socket.on('cursor-change', (data) => {
    // Sadece diğerlerine gönder (kendisine değil)
    socket.broadcast.emit('cursor-changed', data);
  });

  // Yazıyor... (Typing) animasyonu
  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

  // Mesaj silme talebi
  socket.on('msg-delete', (data) => {
    const index = msgs.findIndex((m) => m.id === data.id || Number(m.id) === data.id);
    if (index !== -1) {
      msgs.splice(index, 1);
      io.emit('msg-delete', { id: data.id });
    }
  });

  // Bağlantı koptuğunda
  socket.on('disconnect', () => {
    console.log(`[-] User disconnected: ${socket.id}`);
    users.delete(socket.id);
    io.emit('users', Array.from(users.values()));
  });
});
