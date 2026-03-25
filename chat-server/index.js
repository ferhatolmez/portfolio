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

  // Kullanıcıyı aktif listesine ekle
  users.set(socket.id, { id: socket.id, sessionId: socket.sessionId });
  io.emit('users-update', Array.from(users.values()));

  // Yeni mesaj geldiğinde
  socket.on('msg-send', (data) => {
    const newMsg = {
      ...data,
      id: data.id || Math.random().toString(36).substring(2, 9),
      createdAt: new Date()
    };
    
    // Geçmişte en fazla son 100 mesajı tut (RAM tasarrufu)
    if (msgs.length > 100) msgs.shift();
    
    msgs.push(newMsg);
    
    // Herkese fırlat
    io.emit('msg-receive', newMsg);
    console.log(`[MSG] ${newMsg.username || "Anonim"}: ${newMsg.content}`);
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
    io.emit('users-update', Array.from(users.values()));
  });
});
