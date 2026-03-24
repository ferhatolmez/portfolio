// Skills and Experience data
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  VERCEL = "vercel",
  LINUX = "linux",
  LARAVEL = "laravel",
  PYTHON = "python",
  DOTNET = "dotnet",
  SOCKETIO = "socketio",
  REDIS = "redis",
  SQLITE = "sqlite",
  CSHARP = "csharp",
  PHP = "php",
  PRETTIER = "prettier",
  AWS = "aws",
  FIREBASE = "firebase",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Web'in temel dili, her yerde çalışır! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript'in güçlü tip sistemiyle donatılmış hali 🔒💪",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Web'in yapı taşı, her şey buradan başlar 🏗️🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Stil ve tasarımın kalbi, görsel mükemmellik 💅✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Komponent tabanlı UI geliştirmenin yıldızı ⚛️🌟",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "React'in en güçlü framework'ü, SSR ve SSG destekli 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS ile hızlı ve tutarlı tasarımlar 🌪️🎨",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript artık sunucu tarafında da güçlü! 🔙🚀",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express.js",
    shortDescription: "Node.js için hızlı ve minimal web framework'ü 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Güçlü ve güvenilir ilişkisel veritabanı 🐘💎",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Esnek NoSQL veritabanı, JSON benzeri dokümanlar 🍃💪",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Versiyon kontrol sistemi, kodun güvenliği 🔄🛡️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Açık kaynak dünyasının merkezi, PR ve collaboration 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 14,
    name: "docker",
    label: "Docker",
    shortDescription: "Konteynerleştirme ile tutarlı ortamlar 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 15,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deploy et ve rahatla, frontend hosting'in en iyisi 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 16,
    name: "linux",
    label: "Linux",
    shortDescription: "Açık kaynak işletim sistemi, sunucu yönetiminin temeli 🐧🔓",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.LARAVEL]: {
    id: 17,
    name: "laravel",
    label: "Laravel",
    shortDescription: "PHP'nin en şık framework'ü, elegant syntax 🎯🔴",
    color: "#ff2d20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 18,
    name: "python",
    label: "Python",
    shortDescription: "Yapay zeka ve veri biliminin gözde dili 🐍🧠",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DOTNET]: {
    id: 19,
    name: "dotnet",
    label: ".NET Core",
    shortDescription: "Microsoft'un güçlü cross-platform framework'ü 💜⚡",
    color: "#512bd4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  [SkillNames.SOCKETIO]: {
    id: 20,
    name: "socketio",
    label: "Socket.io",
    shortDescription: "Gerçek zamanlı iletişimin kalbi, WebSocket tabanlı ⚡🔌",
    color: "#010101",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.REDIS]: {
    id: 21,
    name: "redis",
    label: "Redis",
    shortDescription: "Yıldırım hızında in-memory veri deposu ⚡🔴",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 22,
    name: "sqlite",
    label: "SQLite",
    shortDescription: "Hafif ve taşınabilir gömülü veritabanı 📦💾",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.CSHARP]: {
    id: 23,
    name: "csharp",
    label: "C# / .NET",
    shortDescription: "Modern, nesne yönelimli, güçlü ve esnek dil 💜⚡",
    color: "#9b4993",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  [SkillNames.PHP]: {
    id: 24,
    name: "php",
    label: "PHP",
    shortDescription: "Web sunucularının vazgeçilmezi, dinamik ve esnek 🐘💙",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 25,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Kodu otomatik formatlayan kahraman ✍️✨",
    color: "#f7b93e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.AWS]: {
    id: 26,
    name: "aws",
    label: "AWS",
    shortDescription: "Bulut bilişimin dev gücü ☁️🌩️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 27,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Hızlı ve güvenli BaaS platformu 🗄️🔥",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Şub 2025",
    endDate: "Haz 2025",
    title: "Yazılım Mühendisliği Stajyeri",
    company: "ATA BAUM",
    description: [
      "React ve Laravel ile web tabanlı uygulamaların frontend ve backend geliştirme süreçlerinde görev aldı.",
      "REST API endpointleri, veritabanı odaklı özellikler ve form iş akışlarının geliştirilmesine katkı sağladı.",
      "Hata ayıklama, performans iyileştirme ve ekip içi kod düzeni süreçlerinde aktif rol aldı.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.LARAVEL,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Uyarı: Light mode göz kamaştırıcı parlaklıkta!",
    "Dikkat: Light mode aktif! Güneş gözlüğünüzü takın.",
    "Bu kadar parlaklığı sadece profesyoneller kaldırabilir!",
    "Light mode açılıyor... Gözleriniz hazır mı?",
    "Işık moduna geçiliyor — geleceğinizden daha parlak!",
  ],
  dark: [
    "Dark mode aktif! Karanlık tarafın gücü seninle olsun.",
    "Dark mode'a geri hoş geldin. Işık tarafında hayat nasıldı?",
    "Dark mode aktif! Kalbimin derinliklerinden ve gözlerimden teşekkürler.",
    "Gölgelere geri hoş geldin. Dışarıda hayat nasıldı?",
    "Dark mode açık! Sonunda gerçek zarafeti anlayan biri.",
  ],
};
