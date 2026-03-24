const config = {
  title: "Ferhat Ölmez | Junior Full Stack Developer",
  description: {
    long: "Yazılım Mühendisliği mezunu; React, Next.js, Node.js ve REST API odaklı web uygulamaları geliştiren bir junior full stack developer. Gerçek zamanlı iletişim, yapay zeka entegrasyonu, form tabanlı iş akışları ve veritabanı odaklı backend geliştirme üzerine proje deneyimine sahip.",
    short:
      "Ferhat Ölmez — React, Next.js, Node.js odaklı junior full stack developer portföyü.",
  },
  keywords: [
    "Ferhat Ölmez",
    "portfolio",
    "junior full stack developer",
    "yazılım mühendisi",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "MERN Stack",
    "Laravel",
    "WebRTC",
    "Socket.io",
  ],
  author: "Ferhat Ölmez",
  email: "ferology1317@gmail.com",
  site: "https://ferhatdev.vercel.app",

  // for github stars button
  githubUsername: "ferhatolmez",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/jaxfel",
    linkedin: "https://www.linkedin.com/in/ferhatolmez/",
    instagram: "https://www.instagram.com/ferhatolmez",
    facebook: "https://www.facebook.com/ferhatolmez",
    github: "https://github.com/ferhatolmez",
  },
};
export { config };
