<div align="center">
  
  <a href="https://ferhatolmez.vercel.app">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=Ferhat%20%C3%96lmez&fontSize=50&animation=fadeIn&fontAlignY=38&desc=Junior%20Full-Stack%20Developer&descAlignY=55&descAlign=50" alt="Ferhat Ölmez Portfolio Banner" width="100%" />
  </a>
  <br/>
  <h1 align="center">🌌 Ferhat Ölmez — 3D Interactive Developer Portfolio</h1>

  <p align="center">
    A highly interactive, visually stunning, and performance-optimized 3D portfolio built to showcase modern Full-Stack capabilities.<br/>
    <strong>Explore the Live Experience:</strong> <a href="https://ferhatolmez.vercel.app">ferhatolmez.vercel.app</a>
  </p>

  <p align="center">
    <a href="https://ferhatolmez.vercel.app"><img src="https://img.shields.io/website?url=https%3A%2F%2Fferhatolmez.vercel.app&style=for-the-badge&label=Vercel+Deploy&color=success" alt="Deploy Status" /></a>
    <a href="https://github.com/ferhatolmez/portfolio/issues"><img src="https://img.shields.io/github/issues/ferhatolmez/portfolio?style=for-the-badge&color=red" alt="Issues" /></a>
    <a href="https://github.com/ferhatolmez/portfolio/stargazers"><img src="https://img.shields.io/github/stars/ferhatolmez/portfolio?style=for-the-badge&color=yellow" alt="Stars" /></a>
    <a href="https://github.com/ferhatolmez/portfolio/network/members"><img src="https://img.shields.io/github/forks/ferhatolmez/portfolio?style=for-the-badge&color=orange" alt="Forks" /></a>
    <a href="https://github.com/ferhatolmez/portfolio/commits/main"><img src="https://img.shields.io/github/last-commit/ferhatolmez/portfolio?style=for-the-badge&color=blue" alt="Last Commit" /></a>
  </p>

  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react&logoColor=white" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://socket.io/"><img src="https://img.shields.io/badge/Socket.IO-Realtime-black?style=flat-square&logo=socketdotio&logoColor=white" alt="Socket.IO" /></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-Backend-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
  </p>
</div>

<br/>

## 📖 Table of Contents
- [✨ Key Features](#-key-features)
- [🏗️ Technology Stack](#️-technology-stack)
- [💻 Getting Started (Local Development)](#-getting-started-local-development)
  - [1. Socket.IO Chat Server (Backend)](#1-start-the-socketio-chat-server-backend)
  - [2. Next.js Portfolio (Frontend)](#2-start-the-portfolio-website-frontend)
- [🌍 Deployment](#-deployment-options)
- [📬 Contact & Links](#-contact--links)

---

## ✨ Key Features

This repository is more than just a typical landing page. It operates as a full-stack playground to showcase advanced web technologies.

* **🌐 Live Global Chat (`#general`):** A robust, 24/7 anonymous chat room natively integrated into the site's navigation bar. 
  * Powered by a separate `Express & Socket.IO` architecture.
  * Features a **24-hour Automatic Garbage Collector** (Cron) that clears messages daily to protect memory.
* **🖱️ Real-Time Multiplayer Cursors:** Inspired by Figma's multiplayer design. Sit back and watch other live visitors' mouse cursors float seamlessly across your screen via WebSockets.
* **📧 Serverless Email Integration:** A highly secure `Contact` form built using Next.js API Routes and the **Resend API**. Sends direct, formatted HTML messages right to my official inbox.
* **🎮 3D WebGL Backgrounds:** Injected with `@splinetool/react-spline`. Engineered with deep GSAP and Tailwind CSS optimizations to ensure mobile devices maintain a strict, tear-free **60 FPS** scrolling experience.
* **🚀 Elite Portfolio Showcase:** Dedicated sections detailing real-world architectural builds, including a _MERN Stack App_, _WebRTC Video Suite_, and _Laravel Patient Management Tools_.

---

## 🏗️ Technology Stack

### End-to-End Environment
| Category | Technologies |
| --- | --- |
| **Frontend Framework** | `Next.js 14 (App Router)`, `React 18`, `TypeScript` |
| **Styling & UI** | `Tailwind CSS`, `Radix UI (shadcn)`, `SCSS` |
| **Animations** | `Framer Motion`, `GSAP`, `Canvas Confetti` |
| **3D Rendering** | `Spline` (`@splinetool/runtime`) |
| **Backend API** | `Node.js`, `Express.js`, `Resend SDK` |
| **Realtime Engine** | `Socket.IO` (Client & Server) |

---

## 💻 Getting Started (Local Development)

Because this portfolio utilizes an independent backend for real-time WebSocket capabilities, you need to instantiate two separate terminal processes.

### 1. Start the Socket.IO Chat Server (Backend)
Open your first terminal window, navigate into the hidden server directory, and start the node service:
```bash
cd chat-server
npm install
npm start
```
> **Note:** The Express server will actively listen on `http://localhost:8080`.

### 2. Start the Portfolio Website (Frontend)
Open a **second** terminal window in the repository's root directory:
```bash
npm install
```

Create a fresh `.env` file at the root to bind the frontend to your local Chat API and Resend:
```env
RESEND_API_KEY=your_resend_api_token
NEXT_PUBLIC_WS_URL=http://localhost:8080
```

Boot up the development environment:
```bash
npm run dev
```
> **Success:** Visit `http://localhost:3000` to dive into the 3D experience.

---

## 🌍 Deployment Options

If you wish to fork and deploy this architecture yourself, follow the split-deploy strategy:

1. **Frontend (Vercel):** Create a new Vercel project targeting the root (`/`) directory. This handles the Next.js static and serverless deployments flawlessly.
2. **Backend (Render):** Create a new Render Web Service. Target the `chat-server` folder as your Root Directory. Let Render act as the persistent 24/7 host for your WebSockets.
3. Finally, place your production Render URL (e.g., `https://chat-service.onrender.com`) into your Vercel project's Environment Variables as `NEXT_PUBLIC_WS_URL`.

---

## 📬 Contact & Links

Have a highly demanding web application to build, or looking to augment your development team? Let's connect.

- **LinkedIn:** [Ferhat Ölmez](https://linkedin.com/in/ferhat-ölmez)
- **GitHub:** [@ferhatolmez](https://github.com/ferhatolmez)
- **Live Site:** [ferhatolmez.vercel.app](https://ferhatolmez.vercel.app)

<br/>
<div align="center">
  <i>Developed and engineered with ♥ by Ferhat Ölmez.</i>
</div>
