import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,

} from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <TbDeviceMobileCode />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  dotnet: {
    title: ".NET Core",
    bg: "black",
    fg: "white",
    icon: <SiDotnet />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  signalr: {
    title: "SignalR",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>S</strong>R
      </span>
    ),
  },
  webrtc: {
    title: "WebRTC",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>W</strong>RTC
      </span>
    ),
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "su-tedarik",
    category: "Freelance Client Project",
    title: "Endüstriyel Su Tedarik Kurumsal Web Sitesi",
    src: "/assets/projects-screenshots/su-tedarik/su1.png",
    screenshots: [
      "su1.png", "su2.png", "su3.png", "su4.png", "su5.png",
      "su6.png", "su7.png", "su8.png", "su9.png", "su10.png",
      "su11.png", "su12.png", "su13.png"
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [],
    },
    live: "https://xn--endstriyelsutedarik-79b.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Kurumsal Müşteri Çözümü
          </TypographyP>
          <TypographyP className="font-mono">
            Gerçek bir müşteri için baştan uca tasarlanıp yayına alınan, modern, ultra hızlı ve SEO odaklı kurumsal portfolyo sitesi. 
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">
            Gelişmiş Mimari, SEO ve Çoklu Dil
          </TypographyH3>
          <p className="font-mono mb-2">
            React v19 tabanlı modern web projesi. <strong>react-helmet-async</strong> ile %100 SEO uyumluluğu, <strong>react-i18next</strong> ile çoklu dil desteği (localization) ve <strong>react-router-dom</strong> ile kesintisiz (SPA) sayfa yönlendirmeleri eklendi. Ayrıca UI tarafında Tailwind CSS ve React Icons kullanılarak modern hız performans standartları yakalandı. Müşteri memnuniyeti yüksek bir kurumsal çözüm ortaya çıkarıldı.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/su-tedarik/su1.png`,
              `${BASE_PATH}/su-tedarik/su2.png`,
              `${BASE_PATH}/su-tedarik/su3.png`,
              `${BASE_PATH}/su-tedarik/su4.png`,
              `${BASE_PATH}/su-tedarik/su5.png`,
              `${BASE_PATH}/su-tedarik/su6.png`,
              `${BASE_PATH}/su-tedarik/su7.png`,
              `${BASE_PATH}/su-tedarik/su8.png`,
              `${BASE_PATH}/su-tedarik/su9.png`,
              `${BASE_PATH}/su-tedarik/su10.png`,
              `${BASE_PATH}/su-tedarik/su11.png`,
              `${BASE_PATH}/su-tedarik/su12.png`,
              `${BASE_PATH}/su-tedarik/su13.png`
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "mern-chat",
    category: "Real-time Communication",
    title: "MERN Stack Chat Platform",
    src: "/assets/projects-screenshots/mern-chat/mern1.png",
    screenshots: [
      "mern1.png", "mern2.png", "mern3.png", "mern4.png", "mern5.png",
      "mern6.png", "mern7.png", "mern8.png", "mern9.png", "mern10.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.socketio,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.dotnet,
      ],
    },
    github: "https://github.com/ferhatolmez/mernapp",
    live: "https://mernapp-ecru.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gerçek Zamanlı Sohbet ve Yönetim Platformu
          </TypographyP>
          <TypographyP className="font-mono">
            MERN Stack ile geliştirilmiş, gerçek zamanlı mesajlaşma, özel ve
            genel oda yapısı, yazıyor bildirimi, dosya paylaşımı ve PWA desteği
            bulunan full stack iletişim platformu.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Gerçek Zamanlı Mesajlaşma
          </TypographyH3>
          <p className="font-mono mb-2">
            Socket.io ile anlık mesaj iletimi, yazıyor bildirimi ve çevrimiçi
            durum takibi. Özel ve genel oda yapısıyla esnek iletişim.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mern-chat/mern1.png`,
              `${BASE_PATH}/mern-chat/mern2.png`,
              `${BASE_PATH}/mern-chat/mern3.png`,
              `${BASE_PATH}/mern-chat/mern4.png`,
              `${BASE_PATH}/mern-chat/mern5.png`,
              `${BASE_PATH}/mern-chat/mern6.png`,
              `${BASE_PATH}/mern-chat/mern7.png`,
              `${BASE_PATH}/mern-chat/mern8.png`,
              `${BASE_PATH}/mern-chat/mern9.png`,
              `${BASE_PATH}/mern-chat/mern10.png`
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Güvenlik ve Yönetim
          </TypographyH3>
          <p className="font-mono mb-2">
            JWT, refresh token, 2FA, e-posta doğrulama, rate limiting ve rol
            tabanlı yönetim paneli gibi güvenlik ve yönetim özelliklerini içerir.
          </p>
          <TypographyH3 className="my-4 mt-8">Dosya Paylaşımı & PWA</TypographyH3>
          <p className="font-mono mb-2">
            Dosya yükleme ve paylaşma desteği, Progressive Web App (PWA) ile
            mobil cihazlarda native uygulama deneyimi.
          </p>
        </div>
      );
    },
  },
  {
    id: "chat-ai",
    category: "AI Integration",
    title: "Chat-AI Project",
    src: "/assets/projects-screenshots/chat-ai/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.dotnet,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sqlite,
      ],
    },
    github: "https://github.com/ferhatolmez/chat-ai",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Yapay Zeka Destekli Sohbet Uygulaması
          </TypographyP>
          <TypographyP className="font-mono">
            React web, React Native mobil, .NET Core API ve Python duygu analizi
            servisinden oluşan 4 bileşenli mikro-servis mimarisi.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            4 Bileşenli Mimari
          </TypographyH3>
          <p className="font-mono mb-2">
            React web istemcisi, React Native mobil uygulama, .NET Core REST API
            ve Python tabanlı duygu analizi servisi bir arada çalışır.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/chat-ai/landing.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Duygu Analizi</TypographyH3>
          <p className="font-mono mb-2">
            Mesaj gönderimi sonrası Hugging Face modeli ile duygu analizi
            sonucunu arayüzde canlı gösteren akış. Proje Vercel, Render ve
            Hugging Face Spaces üzerinde yayınlandı.
          </p>
        </div>
      );
    },
  },
  {
    id: "lohusa-platform",
    category: "Health Platform",
    title: "Lohusa ve Bebek İzlem Platformu",
    src: "/assets/projects-screenshots/lohusa-platform/lohusa1.png",
    screenshots: [
      "lohusa1.png", "lohusa2.png", "lohusa3.png", "lohusa4.png", 
      "lohusa5.png", "lohusa6.png", "lohusa7.png", "lohusa8.png", 
      "lohusa9.png", "lohusa10.png", "lohusa11.png", "lohusa12.png", "lohusa13.png"
    ],
    skills: {
      frontend: [PROJECT_SKILLS.bootstrap, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.postgres],
    },
    github: "https://github.com/ferhatolmez/LohusaVeBebekLaravel",
    live: "https://lohusa-bebek-izlem.onrender.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sağlık Takip ve Raporlama Platformu
          </TypographyP>
          <TypographyP className="font-mono">
            16 adımlı form akışı, otomatik risk skoru hesaplama, rol tabanlı
            yetkilendirme ve dashboard raporlaması bulunan kapsamlı sağlık takip
            platformu.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Form Akışı ve Risk Skoru</TypographyH3>
          <p className="font-mono mb-2">
            16 adımlı multi-step form yapısı ile detaylı veri girişi ve
            otomatik risk skoru hesaplama sistemi.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/lohusa-platform/lohusa1.png`,
              `${BASE_PATH}/lohusa-platform/lohusa2.png`,
              `${BASE_PATH}/lohusa-platform/lohusa3.png`,
              `${BASE_PATH}/lohusa-platform/lohusa4.png`,
              `${BASE_PATH}/lohusa-platform/lohusa5.png`,
              `${BASE_PATH}/lohusa-platform/lohusa6.png`,
              `${BASE_PATH}/lohusa-platform/lohusa7.png`,
              `${BASE_PATH}/lohusa-platform/lohusa8.png`,
              `${BASE_PATH}/lohusa-platform/lohusa9.png`,
              `${BASE_PATH}/lohusa-platform/lohusa10.png`,
              `${BASE_PATH}/lohusa-platform/lohusa11.png`,
              `${BASE_PATH}/lohusa-platform/lohusa12.png`,
              `${BASE_PATH}/lohusa-platform/lohusa13.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Raporlama ve Dışa Aktarma
          </TypographyH3>
          <p className="font-mono mb-2">
            Chart.js ile görsel dashboard raporlaması, PDF/CSV dışa aktarma,
            activity log, event/listener yapısı ve Pest test senaryoları ile
            güçlendirilmiş altyapı.
          </p>
        </div>
      );
    },
  },
  {
    id: "webrtc-pro",
    category: "Video Communication",
    title: "WebRTC Pro",
    src: "/assets/projects-screenshots/webrtc-pro/webrtc1.png",
    screenshots: ["webrtc1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [
        PROJECT_SKILLS.dotnet,
        PROJECT_SKILLS.signalr,
        PROJECT_SKILLS.webrtc,
      ],
    },
    github: "https://github.com/ferhatolmez/WebRTCProjesi",
    live: "https://webrtcprojesi.onrender.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gerçek Zamanlı Video İletişim Platformu
          </TypographyP>
          <TypographyP className="font-mono">
            Tarayıcı istemcisi ile Windows masaüstü istemcisini aynı oda
            yapısında buluşturan, .NET 8 ve SignalR tabanlı gerçek zamanlı video
            iletişim platformu.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            WebRTC P2P Video
          </TypographyH3>
          <p className="font-mono mb-2">
            WebRTC peer-to-peer bağlantı ile düşük gecikmeli video ve ses
            aktarımı. Tarayıcı ve masaüstü istemcileri aynı oda yapısında.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/WebRTCProjesi/webrtc1.png`, `${BASE_PATH}/WebRTCProjesi/webrtc2.png`]}
          />
          <TypographyH3 className="my-4 mt-8">
            Ek Özellikler
          </TypographyH3>
          <p className="font-mono mb-2">
            Ekran paylaşımı, metin tabanlı chat, fallback video aktarım
            mimarisi ve SignalR sinyalleşme altyapısı.
          </p>
        </div>
      );
    },
  },
];
export default projects;
