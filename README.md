# 🌌 Ferhat Ölmez - 3D Interactive Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=nodedotjs&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-black?logo=socketdotio&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-e61e74?logo=framer&logoColor=white)

A highly interactive, visually stunning, and performance-optimized 3D portfolio built exclusively to showcase the projects, skills, and full-stack capabilities of **Ferhat Ölmez** — a Junior Full Stack Developer.

## ✨ Key Technical Features

- **🌐 Live Global Chat (#general):** A robust, 7/24 anonymous chat room integrated directly into the navigation bar. Powered by a custom **Express & Socket.IO** backend with real-time payload mapping and a robust 24-hour automatic garbage collector (Cron Job) to clear logs.
- **🖱️ Real-time Multiplayer Cursors:** Borrowing concepts from Figma, visitors can see the live cursors of other online guests hovering and moving across the screen via WebSockets. Active coordinate tracking explicitly hides ghost avatars from mobile users.
- **📧 Resend API Integration:** A fully functional `Contact` email form using Next.js Serverless API routes and the Resend SDK. No more clunky `mailto:` links—emails are securely dispatched to the main inbox natively without leaving the page.
- **🎮 3D WebGL Backgrounds:** Immersive 3D environments injected through `@splinetool`. Deep WebGL optimizations and GSAP cleanup routines have been applied to ensure strict 60 FPS scrolling and low GPU usage.
- **🚀 Dynamic Project Showcase:** Highlights a hand-crafted suite of full-stack projects including a _MERN Chat App_, _WebRTC Video Suite_, _Lohusa & Baby Monitor (Laravel)_, and the _Industrial Water Supply UI_.

## 🏗️ Technology Stack

### Frontend (Next.js)
- **Framework:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, Radix UI (shadcn/ui), SCSS modules
- **Animations:** Framer Motion, GSAP, Canvas Confetti
- **3D Render:** Spline (`@splinetool/react-spline`)

### Backend (Global Chat Server)
- **Framework:** Node.js, Express.js
- **WebSockets:** Socket.IO
- **Architecture:** Lightweight Memory-Mapping, CORS hardened, 24h setInterval Sweeper

---

## 💻 Getting Started (Local Development)

Because this portfolio utilizes a fully independent **Backend** for its Real-Time WebSocket features, you need to spin up two separate terminals.

### 1. Start the Socket.IO Chat Server (Backend)
Open a new terminal and navigate to the embedded chat server directory:
```bash
cd chat-server
npm install
npm start
```
*The WebSocket server will actively listen on `http://localhost:8080`.*

### 2. Start the Portfolio Website (Frontend)
Open a SECOND terminal in the root directory and install Next.js dependencies:
```bash
npm install
```

Make sure your local `.env` file mimics `.env.example` and points the `NEXT_PUBLIC_WS_URL` to your local chat server:
```env
# .env file
RESEND_API_KEY=your_resend_api_token
NEXT_PUBLIC_WS_URL=http://localhost:8080
```

Boot up the development environment:
```bash
npm run dev
```
*Visit `http://localhost:3000` to dive into the 3D experience.*

---

## 🌍 Deployment Options

To deploy this project for the world to see:
1. **Frontend:** Deploy the root Next.js framework on **[Vercel](https://vercel.com/)** (Set `Root Directory` to `/`).
2. **Backend:** Deploy the `chat-server` folder independently to a cloud container like **[Render](https://render.com/)** or Railway as a Node.js Web Service (Set `Root Directory` to `chat-server`).
3. Pass the live Render URL into your Vercel Environment Variables as `NEXT_PUBLIC_WS_URL`.

---

<div align="center">
  <i>Developed and refined with ♥ by <a href="https://github.com/ferhatolmez">Ferhat Ölmez</a>.</i>
</div>
