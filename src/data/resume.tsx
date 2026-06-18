import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Utkarsh Sisodia",
  initials: "UT",
  url: "https://dillion.io",
  location: "Alwar, Rajasthan",
  locationLink: "https://www.google.com/maps/place/Alwar",
  description:
    "Passionate Web Developer creating beautiful, accessible, fast, and secure websites . I love building things and helping people.",
  summary:
    "I'm Utkarsh Sisodia, a [Full-Stack Web Developer](/#education) passionate about building responsive and user-friendly web applications using [React.js, Node.js, Express.js, and PostgreSQL](/#projects). I enjoy transforming ideas into real-world solutions, learning new technologies, and continuously improving my development skills through hands-on [projects](/#projects) and problem-solving. ",
  avatarUrl: "/me.png",
  skills: [
    "Javascript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "EJS",
    "Middlwares",
    "Postgres",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "usisodia67@gmail.com",
    tel: "7976375759",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Utkarshsisodia",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/utkarsh-sisodia-a30371242/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/UtkarshSisodi11",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@utkarshsisodia2375",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:usisodia67@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Aigetai Private Limited",
      href: "https://aigetai.com/",
      badges: [],
      location: "Remote",
      title: "FullStack Developer Intern",
      logoUrl: "/Aigetai.png",
      start: "Jan 2026",
      end: "July 2026",
      description:
        "Implemented the preferably fair algorthm for betting website using react.js & Typescript SDK. Designed UI for Dice Throwing game. Architected a robust application infrastructure.",
    },
    
  ],
  education: [
    {
      school: "Bikaner Technical University",
      href: "https://www.btu.ac.in/",
      degree: "B.Tech Computer Science",
      logoUrl: "/btu.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Board Of Technical Education Rajasthan",
      href: "https://dte.rajasthan.gov.in/index.html",
      degree: "Diploma in Computer Science",
      logoUrl: "/bter.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "HR Portal",
      href: "https://github.com/Utkarshsisodia/hr-admin.git",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarshsisodia/hr-admin.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://hdcropdmqrccfvdkywyu.supabase.co/storage/v1/object/public/portfolio%20videos/react.js_hr_panel.mp4",
    },
    {
      title: "Company Portal",
      href: "https://github.com/Utkarshsisodia/salary-dashboard.git",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarshsisodia/salary-dashboard.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://hdcropdmqrccfvdkywyu.supabase.co/storage/v1/object/public/portfolio%20videos/next.js_onboarding_panel.mp4",
    },
    {
      title: "VidKing",
      href: "https://vidking-app.appwrite.network/",
      dates: "March 2026 - April 2026",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://vidking-app.appwrite.network/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Utkarshsisodia/vidking-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://hdcropdmqrccfvdkywyu.supabase.co/storage/v1/object/public/portfolio%20videos/vidking.mp4",
    },
    {
      title: "Prime Dice",
      href: "https://github.com/Utkarshsisodia/Dice_project.git",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarshsisodia/Dice_project.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://hdcropdmqrccfvdkywyu.supabase.co/storage/v1/object/public/portfolio%20videos/dice_game.mp4",
    },
    {
      title: "Design Agency",
      href: "https://github.com/Utkarshsisodia/personal-project-1.git",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Utkarshsisodia/personal-project-1.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://hdcropdmqrccfvdkywyu.supabase.co/storage/v1/object/public/portfolio%20videos/design_agency.mp4",
    },
  ],
  
} as const;
