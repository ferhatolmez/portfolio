"use client";
import React, { useEffect, useState } from "react";
import {
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaAws,
} from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiCsharp,
  SiPhp,
  SiPrettier,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbBrandReactNative, TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "ferology1317@gmail.com",
    href: "mailto:ferology1317@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Telefon",
    content: "+90 541 800 96 11",
    href: "tel:+905418009611",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ferhatolmez/",
    content: "/ferhatolmez",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ferhatolmez",
    content: "/ferhatolmez",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "Web'in temel programlama dili",
    icon: <RiJavascriptFill size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "JavaScript'in güçlendirilmiş versiyonu",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Web sayfalarının yapı taşı",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Stil ve tasarım dili",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "React",
    content: "Komponent tabanlı UI framework",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "React Native",
    content: "Mobil uygulama geliştirme framework'ü",
    icon: <TbBrandReactNative size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "React tabanlı full-stack framework",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Node.js",
    content: "Sunucu tarafı JavaScript runtime",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "Express.js",
    content: "Node.js web framework",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Laravel",
    content: "PHP web framework",
    icon: <SiLaravel size={"50px"} color="#ff2d20" />,
    color: "#ff2d20",
  },
  {
    name: "Python",
    content: "Yapay zeka ve veri bilimi dili",
    icon: <SiPython size={"50px"} color="#3776ab" />,
    color: "#3776ab",
  },
  {
    name: ".NET Core",
    content: "Cross-platform uygulama framework'ü",
    icon: <SiDotnet size={"50px"} color="#512bd4" />,
    color: "#512bd4",
  },
  {
    name: "MongoDB",
    content: "NoSQL veritabanı",
    icon: <SiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "PostgreSQL",
    content: "İlişkisel veritabanı yönetim sistemi",
    icon: <SiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "SQLite",
    content: "Hafif gömülü veritabanı",
    icon: <SiSqlite size={"50px"} color="#003b57" />,
    color: "#003b57",
  },
  {
    name: "Socket.io",
    content: "Gerçek zamanlı iletişim kütüphanesi",
    icon: <SiSocketdotio size={"50px"} color="#fff" />,
    color: "#010101",
  },
  {
    name: "Redis",
    content: "In-memory veri deposu",
    icon: <SiRedis size={"50px"} color="#dc382d" />,
    color: "#dc382d",
  },
  {
    name: "Tailwind CSS",
    content: "Utility-first CSS framework",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Docker",
    content: "Konteynerleştirme platformu",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Git",
    content: "Versiyon kontrol sistemi",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Kod barındırma ve collaboration",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Kod editörü",
    icon: <SiVscodium size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Linux",
    content: "Açık kaynak işletim sistemi",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Vercel",
    content: "Frontend deployment platformu",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Komut satırı arayüzü",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "C#",
    content: "Modern, nesne yönelimli dil",
    icon: <SiCsharp size={"50px"} color="#9b4993" />,
    color: "#9b4993",
  },
  {
    name: "PHP",
    content: "Dinamik web sunucu dili",
    icon: <SiPhp size={"50px"} color="#777bb4" />,
    color: "#777bb4",
  },
  {
    name: "Prettier",
    content: "Kod formatlama ve standart",
    icon: <SiPrettier size={"50px"} color="#f7b93e" />,
    color: "#f7b93e",
  },
  {
    name: "AWS",
    content: "Kapsamlı bulut bilişim servisi",
    icon: <FaAws size={"50px"} color="#ff9900" />,
    color: "#ff9900",
  },
  {
    name: "Firebase",
    content: "BaaS (Backend as a Service)",
    icon: <SiFirebase size={"50px"} color="#ffca28" />,
    color: "#ffca28",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="Ferhat Ölmez"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Ferhat Ölmez</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Junior Full Stack Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">Hakkımda</h1>
            <p className="mb-10 text-roboto">
              Merhaba! Ben Ferhat, Atatürk Üniversitesi Yazılım Mühendisliği
              mezunuyum. React, Next.js, Node.js ve REST API odaklı web
              uygulamaları geliştiren bir junior full stack developer&apos;ım.
              Gerçek zamanlı iletişim, yapay zeka entegrasyonu, form tabanlı iş
              akışları ve veritabanı odaklı backend geliştirme üzerine proje
              deneyimlerim var.
            </p>
            <p className="mb-10">
              Kullanıcı odaklı arayüz, temiz kod, Git tabanlı ekip çalışması ve
              ürün odaklı geliştirme süreçlerinde güçlü bir temele sahibim.
              Boş zamanlarımda yeni teknolojiler öğreniyor, projeler geliştiriyor
              ve bir sonraki büyük fikir üzerine beyin fırtınası yapıyorum.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Kullandığım Teknolojiler</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Teknoloji İkonları"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
