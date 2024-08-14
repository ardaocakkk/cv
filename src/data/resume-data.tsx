import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arda Ocak",
  initials: "AO",
  location: "Cankaya, Ankara, Turkey",
  locationLink: "https://www.google.com/maps/place/Ku%C4%9Fulu+Park/@39.9020042,32.8576013,17z/data=!3m1!4b1!4m6!3m5!1s0x14d34fa20e21b04f:0x3371802aff0b427d!8m2!3d39.9020001!4d32.8601762!16s%2Fm%2F0vxdzb2?entry=ttu",
  about:
    "Passionate computer engineering student from Ankara. Enthusiast about web development & embedded systems.",
  summary:
    "As a Computer Engineering student, I am passionate about web development and embedded systems. I have experience in developing web applications with React and Next.js. I am also interested in backend development with Java and Spring Boot. I also have some experience with FPGA VHDL programming. I am looking for opportunities to learn new technologies and improve my skills.",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQF5AZtXzPlemw/profile-displayphoto-shrink_200_200/0/1719085989786?e=1724889600&v=beta&t=SFfcU1hj09ckfGNLGi98xHNzgVtut4leTgMoL6TmaQc",
  personalWebsiteUrl: "https://ardaocakkk.github.io/",
  contact: {
    email: "ardaocak54@gmai.com",
    tel: "+90 553 357 6169",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ardaocakkk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ardaocakk/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ardaocak44",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ankara Medipol University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Nurol Technology",
      link: "https://www.nurol.com.tr/en/nurol-technology-industry",
      badges: ["Remote","Part-Time"],
      title: "Project Researcher",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Participated in open innovation projects, researched new technologies and learnt project managment.",
    },
    {
      company: "Kolaysoft",
      link: "https://www.kolaysoft.com.tr/",
      badges: ["Internship"],
      title: "Software Developer Intern",
      logo: ParabolLogo,
      start: "17-06-2024",
      end: "16-08-2024",
      description:
        "I was responsible for developing and testing the Biz mobile application of T.C. Gençlik ve Spor Bakanlığı. ",
    },
  ],
  skills: [
    "JavaScript",
    "React/Next.js",
    "Python",
    "React-Native",
    "Flask",
    "FastAPI",
    "Java",
    "Spring Boot",
    "Docker",
    "Redux Tool Kit",
    "Tailwind CSS",
  
  ],
  projects: [
    {
      title: "Audiophile Frontend",
      techStack: [
        "Side Project",
        "Full Stack Development",
        "Javascript",
        "React",
        "Next.js",
        "Tailwindcss",
        "Redux Toolkit",
      ],
      description:
        "Audiophile is a high-end audio equipment retailer. The website is a full-stack e-commerce platform.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://audiophile-amber.vercel.app/",
      },
    },
    {
      title: "Audiophile Backend",
      techStack: [
        "Side Project",
        "Backend Development",
        "Java",
        "Spring Boot",
      ],
      description:
        "REST API for Audiophile e-commerce platform. Built with Java and Spring Boot.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Dine Restaurant",
      techStack: [
        "Side Project",
        "Javascrpit",
        "Next.js",
        "Tailwindcss",
      ],
      description: "Dine is a restaurant website template. Built with Next.js and Tailwind CSS.",
      logo: ConsultlyLogo,
      link: {
        label: "dine.com",
        href: "https://dine-restaurant-five.vercel.app/",
      },
    },
    {
      title: "Invoice App",
      techStack: ["Side Project", "Javascript", "React", "Tailwindcss", "Chakra UI", "Redux Toolkit"],
      description:
        "Invoice App is a web application for creating and managing invoices.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://invoice-app-three-eta.vercel.app/",
      },
    },
    {
      title: "tartisalim",
      techStack: ["Side Project", "React", "Python", "FastAPI", "Tailwindcss"],
      description:
        "tartisalim is a social media website for sharing ideas and discussing topics.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ardaocakkk/tartisalim",
      },
    },
    {
      title: "Analyse Deaths Involving Police in the USA",
      techStack: ["Side Project", "Python", "Pandas", "Matplotlib", "NumPy", "Seaborn"],
      description:
        "Analysing deaths involving police in the United States",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/ardaocakkk/Analyse-Deaths-Involving-Police-in-US",
      },
    },
    {
      title: "Space Mission Analysis",
      techStack: ["Side Project", "Python", "Pandas", "Matplotlib", "NumPy", "Seaborn"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "https://github.com/ardaocakkk/Space_Missions_Analysis",
        href: "Analyse and Visualize The Space Race on Cold War Time",
      },
    },
  ],
} as const;

