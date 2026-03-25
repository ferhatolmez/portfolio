"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Endüstriyel Su Tedarik Platformu",
    description: `Gerçek bir müşteri için baştan uca tasarlanıp yayına alınan, modern, ultra hızlı ve %100 SEO odaklı kurumsal web sitesi. (React, Tailwind CSS, react-i18next)`,
    link: "https://xn--endstriyelsutedarik-79b.com/",
    images: [
      "/assets/projects-screenshots/su-tedarik/su1.png",
      "/assets/projects-screenshots/su-tedarik/su2.png",
      "/assets/projects-screenshots/su-tedarik/su3.png",
    ],
  },
  {
    id: 2,
    name: "MERN Stack Chat Platform",
    description: `React, Express, MongoDB ve Socket.io kullanılarak geliştirilmiş iletişim platformu. Yazıyor bildirimi, dosya paylaşımı ve özel/genel sohbet odaları içerir.`,
    link: "https://mernapp-ecru.vercel.app/",
    images: [
      "/assets/projects-screenshots/mern-chat/mern1.png",
      "/assets/projects-screenshots/mern-chat/mern2.png",
      "/assets/projects-screenshots/mern-chat/mern3.png",
    ],
  },
  {
    id: 3,
    name: "Lohusa ve Bebek İzlem Platformu",
    description: `Laravel ve PostgreSQL altyapısıyla geliştirilen; otomatik risk skoru, 16 adımlı sağlık formu ve dashboard raporlaması sunan tam donanımlı takip sistemi.`,
    link: "https://lohusa-bebek-izlem.onrender.com/",
    images: [
      "/assets/projects-screenshots/lohusa-platform/lohusa1.png",
      "/assets/projects-screenshots/lohusa-platform/lohusa2.png",
      "/assets/projects-screenshots/lohusa-platform/lohusa3.png",
    ],
  },
  {
    id: 4,
    name: "WebRTC Pro Video App",
    description: `Tarayıcı istemcisi ve Windows masaüstü istemcilerini buluşturan, .NET 8 ve SignalR tabanlı P2P video iletişim projesi. Arama, mesajlaşma ve dosya aktarımı sağlar.`,
    link: "https://webrtcprojesi.onrender.com/",
    images: [
      "/assets/projects-screenshots/webrtc-pro/webrtc1.png",
      "/assets/projects-screenshots/webrtc-pro/webrtc2.png",
    ],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Tüm Projelerim</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around pb-20">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-700 bg-black/40 overflow-hidden hover:border-zinc-500 transition-colors"
              key={project.id}
            >
              <div className="h-[200px] bg-zinc-900/50">
                {project.images.length > 0 ? (
                  <Splide
                    options={{
                      type: "loop",
                      interval: 3000,
                      autoplay: true,
                      speed: 2000,
                      perMove: 1,
                      rewind: true,
                      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                      arrows: false,
                    }}
                    aria-label={`${project.name} Screenshots`}
                  >
                    {project.images.map((image) => (
                      <SplideSlide key={image}>
                        <Image
                          src={image}
                          alt={project.name}
                          className="w-[300px] h-[200px] object-cover"
                          width={300}
                          height={200}
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                ) : (
                  <div className="w-full h-full flex justify-center items-center text-zinc-600 text-sm">
                    Görsel Yok
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col justify-between h-[200px]">
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2 line-clamp-1">{project.name}</h2>
                  <p className="text-xs text-zinc-400 line-clamp-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-xs text-blue-400 hover:text-blue-300 mt-4 inline-block font-mono bg-blue-500/10 px-3 py-1.5 rounded-md w-fit border border-blue-500/20"
                >
                  Projeye Git →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
