import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ColBatImg from "@/public/ColBat.webp";
import uptechImg from "@/public/uptech.png";
import rareAnimalsImg from "@/public/gobi 6 rare animals.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bachelor",
    location: "MNU Mongolian National University",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a game developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "VR simulation developer",
    location: "Mongolia, Uptech llc",
    description:
      "i worked as a VR simulation developer almost 1.5 years and 6 months of front end dvelopment",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Game Developer",
    location: "Mongolia, BlackCandy.io",
    description: "I worked as a gamev developer 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Uptech.mn",
    description:
      "I worked as a participation and learning frontend and backend",
    tags: ["React", "Gatsby.js", "Strapi", "Tailwind", "Graphql"],
    imageUrl: uptechImg,
    followURL: "https://www.uptech.mn/",
  },
  {
    title: "Mongolian Gobi rare animals Simulation",
    description: "My main role was develop a simulation in Unreal engine",
    tags: ["Unreal engine 4"],
    imageUrl: rareAnimalsImg,
    followURL: "https://www.youtube.com/watch?v=TYu6nCEpiRM",
  },
  {
    title: "Collect and Battle",
    description: "Mobile game developed on Unity 3d",
    tags: ["C#", "Unity"],
    imageUrl: ColBatImg,
    followURL:
      "https://play.google.com/store/apps/details?id=io.blackcandy.collectandbattle",
  },
] as const;

export const skillsData = [
  "C#",
  "Unity",
  "Unreal Engine 4",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GraphQL",
  "GraphQL",
  "Framer Motion",
] as const;
